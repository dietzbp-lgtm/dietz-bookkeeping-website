import { useState, type FormEvent } from 'react';

type Kind = 'contact' | 'estimate';

const labelClass = 'block text-sm font-semibold text-slate-800 mb-2';
const controlClass = 'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500';
const options = (values: string[]) => values.map(value => <option key={value} value={value}>{value}</option>);

export default function InquiryForm({ kind }: { kind: Kind }) {
  const [sending, setSending] = useState(false);
  const [complete, setComplete] = useState(false);
  const [error, setError] = useState('');
  const estimate = kind === 'estimate';

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());
    setSending(true);
    setError('');
    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, type: kind }),
      });
      const result = await response.json() as { ok?: boolean; error?: string };
      if (!response.ok || !result.ok) {
        throw new Error(result.error || 'We could not send the form. Please try again.');
      }
      setComplete(true);
      const gtag = (window as Window & {
        gtag?: (command: string, event: string, params?: Record<string, string>) => void
      }).gtag;
      gtag?.('event', estimate ? 'estimate_form_submitted' : 'contact_form_submitted', {
        submission_method: 'native_website_form',
      });
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
  }

  if (complete) return <div role="status" className="rounded-2xl border border-green-200 bg-green-50 p-8 sm:p-12 text-center">
    <h2 className="text-2xl font-bold text-slate-900 mb-3">Thank you! Your request was sent.</h2>
    <p className="text-slate-700">We'll review your information and get back to you. Please check your inbox for a confirmation email.</p>
  </div>;

  return <form onSubmit={submit} className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 sm:p-9 space-y-6">
    <div className="grid sm:grid-cols-2 gap-5">
      <div><label htmlFor={kind + '-name'} className={labelClass}>Full name *</label>
        <input id={kind + '-name'} name="name" required minLength={2} maxLength={100} autoComplete="name" className={controlClass} /></div>
      <div><label htmlFor={kind + '-email'} className={labelClass}>Email address *</label>
        <input id={kind + '-email'} type="email" name="email" required maxLength={254} autoComplete="email" className={controlClass} /></div>
    </div>
    <div className="grid sm:grid-cols-2 gap-5">
      <div><label htmlFor={kind + '-phone'} className={labelClass}>Phone (optional)</label>
        <input id={kind + '-phone'} type="tel" name="phone" maxLength={40} autoComplete="tel" className={controlClass} /></div>
      {estimate && <div><label htmlFor="estimate-company" className={labelClass}>Business name *</label>
        <input id="estimate-company" name="company" required maxLength={150} autoComplete="organization" className={controlClass} /></div>}
    </div>
    {estimate && <>
      <div><label htmlFor="estimate-service" className={labelClass}>What help do you need? *</label>
        <select id="estimate-service" name="service" required defaultValue="" className={controlClass}>
          <option value="" disabled>Select a service</option>
          {options(['Monthly bookkeeping', 'Cleanup / catch-up bookkeeping', 'Bank reconciliation', 'Accounts payable', 'Accounts receivable', 'Payroll support', 'Financial reporting', 'Other / not sure'])}
        </select>
      </div>
      <div className="grid sm:grid-cols-3 gap-5">
        <div><label htmlFor="estimate-transactions" className={labelClass}>Monthly transactions</label><select id="estimate-transactions" name="transactions" className={controlClass}>{options(['Not sure', 'Under 50', '50–100', '101–250', '251–500', 'Over 500'])}</select></div>
        <div><label htmlFor="estimate-accounts" className={labelClass}>Bank / card accounts</label><select id="estimate-accounts" name="accounts" className={controlClass}>{options(['Not sure', '1', '2–3', '4–5', '6 or more'])}</select></div>
        <div><label htmlFor="estimate-software" className={labelClass}>Accounting software</label><select id="estimate-software" name="software" className={controlClass}>{options(['Not sure', 'QuickBooks Online', 'QuickBooks Desktop', 'Xero', 'Spreadsheets', 'Other', 'None yet'])}</select></div>
      </div>
    </>}
    <div><label htmlFor={kind + '-message'} className={labelClass}>{estimate ? 'Additional details (optional)' : 'How can we help? *'}</label>
      <textarea id={kind + '-message'} name="message" rows={5} required={!estimate} minLength={estimate ? undefined : 10} maxLength={3000} className={controlClass} placeholder={estimate ? 'Tell us about your bookkeeping needs or any cleanup backlog.' : 'Tell us a little about your question.'} /></div>
    <div className="hidden" aria-hidden="true"><label htmlFor={kind + '-website'}>Leave this blank</label><input id={kind + '-website'} name="website" tabIndex={-1} autoComplete="off" /></div>
    <p className="text-sm text-slate-600">Please do not submit passwords, Social Security numbers, bank account numbers, or financial documents through this form.</p>
    {error && <div role="alert" className="rounded-xl bg-red-50 border border-red-200 text-red-800 p-4">{error} <a href="mailto:bryand@dietzbookkeeping.com" className="underline">Email us instead.</a></div>}
    <button type="submit" disabled={sending} className="rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold px-8 py-3.5 w-full sm:w-auto">
      {sending ? 'Sending your request…' : estimate ? 'Send estimate request' : 'Send message'}
    </button>
    <p className="text-xs text-slate-500">By sending, you agree that we may contact you about your inquiry.</p>
  </form>;
}
