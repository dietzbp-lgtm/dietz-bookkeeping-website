type Env = {
  RESEND_API_KEY?: string;
  TURNSTILE_SECRET_KEY?: string;
};

type RequestPayload = Record<string, unknown>;

const permitted = new Set(['contact', 'estimate']);
const allowedServices = new Set([
  'Monthly bookkeeping',
  'Cleanup / catch-up bookkeeping',
  'Bank reconciliation',
  'Accounts payable',
  'Accounts receivable',
  'Payroll support',
  'Financial reporting',
  'Tax preparation support',
  'Budgeting & forecasting',
  'Other / not sure',
]);
const allowedOrigins = new Set(['https://dietzbookkeeping.com', 'https://www.dietzbookkeeping.com']);
const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
});

const asText = (value: unknown, max = 200) =>
  typeof value === 'string' ? value.trim().slice(0, max) : '';

const escapeHtml = (value: string) => value
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;').replaceAll("'", '&#39;');

function validEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

async function sendResend(key: string, payload: Record<string, unknown>) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    console.error('Resend delivery failed', response.status);
    throw new Error('Email delivery unavailable');
  }
}

export const onRequestPost = async (context: {
  request: Request;
  env: Env;
}): Promise<Response> => {
  const { request, env } = context;
  const origin = request.headers.get('Origin');
  // Reject cross-site browser submissions. Same-origin fetch normally includes Origin on POST.
  if (!origin || !allowedOrigins.has(origin)) return json({ error: 'Invalid request origin.' }, 403);
  if (!(request.headers.get('content-type') || '').startsWith('application/json')) {
    return json({ error: 'Invalid content type.' }, 415);
  }
  if (Number(request.headers.get('content-length') || '0') > 12000) return json({ error: 'Request too large.' }, 413);
  let data: RequestPayload;
  try {
    data = await request.json() as RequestPayload;
  } catch {
    return json({ error: 'Invalid request.' }, 400);
  }
  if (!data || typeof data !== 'object' || Array.isArray(data)) return json({ error: 'Invalid request.' }, 400);
  if (asText(data.website, 200)) return json({ ok: true }); // bot honeypot
  const type = asText(data.type, 30);
  if (!permitted.has(type)) return json({ error: 'Invalid form.' }, 400);

  const name = asText(data.name, 100);
  const email = asText(data.email, 254);
  const phone = asText(data.phone, 40);
  const message = asText(data.message, 3000);
  const company = asText(data.company, 150);
  // Accept the new multi-select payload and the previous single-service format,
  // so a visitor with a cached copy of the old form is not rejected.
  const submittedServices = Array.isArray(data.services)
    ? data.services
    : (typeof data.service === 'string' ? [data.service] : []);
  const validServices = submittedServices.length > 0
    && submittedServices.length <= allowedServices.size
    && submittedServices.every((item: unknown) => typeof item === 'string' && allowedServices.has(item));
  const services = validServices ? [...new Set(submittedServices as string[])] : [];
  const transactions = asText(data.transactions, 50);
  const accounts = asText(data.accounts, 50);
  const software = asText(data.software, 90);
  if (name.length < 2 || !validEmail(email) || (type === 'contact' && message.length < 10) ||
      (type === 'estimate' && (!company || services.length === 0))) {
    return json({ error: 'Please complete the required fields.' }, 400);
  }

  // If a Turnstile secret is configured, demand and verify its challenge token.
  if (env.TURNSTILE_SECRET_KEY) {
    const token = asText(data.turnstileToken, 2200);
    if (!token) return json({ error: 'Please complete the verification challenge.' }, 400);
    const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: new URLSearchParams({ secret: env.TURNSTILE_SECRET_KEY, response: token }),
    });
    const result = await verify.json() as { success?: boolean; hostname?: string };
    if (!result.success || !['dietzbookkeeping.com', 'www.dietzbookkeeping.com'].includes(result.hostname || '')) {
      return json({ error: 'Verification unsuccessful. Please try again.' }, 403);
    }
  }

  if (!env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured');
    return json({ error: 'The form is temporarily unavailable. Please email us directly.' }, 503);
  }

  const details = [
    ['Submission', type === 'contact' ? 'General contact' : 'Bookkeeping estimate'],
    ['Name', name], ['Email', email], ['Phone', phone],
    ...(type === 'estimate' ? [
      ['Company', company], ['Services requested', services.join(', ')],
      ['Monthly transactions', transactions], ['Bank/card accounts', accounts],
      ['Accounting software', software],
    ] : []),
    ['Message', message],
  ].filter(([, v]) => Boolean(v));
  const text = details.map(([k, v]) => `${k}: ${v}`).join('\n');
  const html = '<h2>New Dietz Bookkeeping inquiry</h2>' +
    details.map(([k, v]) => `<p><strong>${escapeHtml(k)}:</strong> ${escapeHtml(v).replaceAll('\n', '<br>')}</p>`).join('');

  try {
    await sendResend(env.RESEND_API_KEY, {
      from: 'Dietz Bookkeeping Website <notifications@dietzbookkeeping.com>',
      to: ['bryand@dietzbookkeeping.com'],
      reply_to: email,
      subject: type === 'contact' ? 'New website contact inquiry' : 'New bookkeeping estimate request',
      text, html,
    });
    // A notification failure should not undo a successfully received inquiry.
    try {
      await sendResend(env.RESEND_API_KEY, {
        from: 'Dietz Bookkeeping <notifications@dietzbookkeeping.com>',
        to: [email],
        subject: 'We received your Dietz Bookkeeping request',
        text: `Hi ${name},\n\nThank you for contacting Dietz Bookkeeping. We received your ${type === 'estimate' ? 'estimate request' : 'message'} and will review it.\n\nPlease do not email passwords or financial account credentials.\n\nDietz Bookkeeping`,
      });
    } catch {
      console.error('Customer confirmation delivery failed');
    }
    return json({ ok: true });
  } catch {
    return json({ error: 'We could not send your request. Please email bryand@dietzbookkeeping.com.' }, 502);
  }
};
