import { useState, type FormEvent } from 'react';

type Kind = 'contact' | 'estimate';

const labelClass = 'block text-sm font-medium text-slate-700 mb-2';
const controlClass = 'block w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3.5 text-base text-slate-900 shadow-sm transition-colors placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20';
const options = (values: string[]) => values.map(value => <option key={value} value={value}>{value}</option>);

const bookkeepingServices = [
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
];

export default function InquiryForm({ kind }: { kind: Kind }) {
  const [sending, setSending] = useState(false);
  const [complete, setComplete] = useState(false);
  const [error, setError] = useState('');
  const [serviceError, setServiceError] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const estimate = kind === 'estimate';

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;
    const form = event.currentTarget;
    const formData = new FormData(form);
    const values: Record<string, unknown> = Object.fromEntries(formData.entries());
    if (estimate) {
      const services = formData.getAll('services').map(String);
      if (services.length === 0) {
        setServiceError('Please select at least one service.');
        return;
      }
      values.services = services;
      setServiceError('');
    }
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

  if (complete) return <div role="status" className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 sm:p-12 text-center shadow-sm">
    <h2 className="text-2xl font-bold text-slate-900 mb-3">Thank you! Your request was sent.</h2>
    <p className="text-slate-700">We'll review your information and get back to you. Please check your inbox for a confirmation email.</p>
  </div>;

  return <form onSubmit={submit} className="rounded-3xl border border-slate-200/90 bg-white shadow-[0_18px_60px_-35px_rgba(15,23,42,0.22)] p-5 sm:p-9 lg:p-10 space-y-7">
    <div className="border-b border-slate-100 pb-6"><p className="text-xs font-bold tracking-[0.14em] uppercase text-blue-700 mb-2">{estimate ? "Business information" : "Contact details"}</p><h2 className="text-xl sm:text-2xl font-bold text-slate-900">{estimate ? "Tell us about your business" : "Send us a message"}</h2><p className="text-sm text-slate-500 mt-2">Fields marked * are required.</p></div>
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
      <div className="border-t border-slate-100 pt-6"><p className="text-xs font-bold tracking-[0.14em] uppercase text-blue-700 mb-2">Your bookkeeping needs</p><h3 className="text-lg font-bold text-slate-900 mb-5">Help us understand your workload</h3>
      <fieldset aria-describedby={serviceError ? 'estimate-services-help estimate-services-error' : 'estimate-services-help'}>
        <legend className={labelClass}>Which bookkeeping services do you need? *</legend>
        <p id="estimate-services-help" className="text-sm text-slate-500 mb-4">Select all that apply.</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {bookkeepingServices.map(service => {
            const checked = selectedServices.includes(service);
            return <label key={service} className={`flex items-start gap-3 rounded-xl border p-4 cursor-pointer transition-colors ${checked ? 'border-blue-300 bg-blue-50/80' : 'border-slate-200 bg-slate-50/60 hover:border-slate-300 hover:bg-slate-50'}`}>
              <input
                type="checkbox"
                name="services"
                value={service}
                checked={checked}
                onChange={event => {
                  setSelectedServices(previous => event.target.checked ? [...previous, service] : previous.filter(value => value !== service));
                  setServiceError('');
                }}
                className="mt-0.5 h-4 w-4 shrink-0 accent-blue-600"
              />
              <span className="text-sm font-medium leading-5 text-slate-800">{service}</span>
            </label>;
          })}
        </div>
        <p className="text-sm text-slate-500 mt-3" aria-live="polite">{selectedServices.length} {selectedServices.length === 1 ? 'service' : 'services'} selected</p>
        {serviceError && <p id="estimate-services-error" role="alert" className="mt-2 text-sm font-medium text-red-700">{serviceError}</p>}
      </fieldset>
      <div className="grid sm:grid-cols-3 gap-5">
        <div><label htmlFor="estimate-transactions" className={labelClass}>Monthly transactions</label><select id="estimate-transactions" name="transactions" className={controlClass}>{options(['Not sure', 'Under 50', '50–100', '101–250', '251–500', 'Over 500'])}</select></div>
        <div><label htmlFor="estimate-accounts" className={labelClass}>Bank / card accounts</label><select id="estimate-accounts" name="accounts" className={controlClass}>{options(['Not sure', '1', '2–3', '4–5', '6 or more'])}</select></div>
        <div><label htmlFor="estimate-software" className={labelClass}>Accounting software</label><select id="estimate-software" name="software" className={controlClass}>{options(['Not sure', 'QuickBooks Online', 'QuickBooks Desktop', 'Xero', 'Spreadsheets', 'Other', 'None yet'])}</select></div>
      </div>
      </div>
    </>}
    <div><label htmlFor={kind + '-message'} className={labelClass}>{estimate ? 'Additional details (optional)' : 'How can we help? *'}</label>
      <textarea id={kind + '-message'} name="message" rows={5} required={!estimate} minLength={estimate ? undefined : 10} maxLength={3000} className={controlClass} placeholder={estimate ? 'Tell us about your bookkeeping needs or any cleanup backlog.' : 'Tell us a little about your question.'} /></div>
    <div className="hidden" aria-hidden="true"><label htmlFor={kind + '-website'}>Leave this blank</label><input id={kind + '-website'} name="website" tabIndex={-1} autoComplete="off" /></div>
    <p className="rounded-xl border border-blue-100 bg-blue-50/60 px-4 py-3 text-sm leading-relaxed text-slate-600">For your security, please do not include passwords, Social Security numbers, bank account details or financial documents.</p>
    {error && <div role="alert" className="rounded-xl bg-red-50 border border-red-200 text-red-800 p-4">{error} <a href="mailto:bryand@dietzbookkeeping.com" className="underline">Email us instead.</a></div>}
    <button type="submit" disabled={sending} className="rounded-xl bg-blue-600 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 text-white font-semibold px-8 py-4 w-full sm:w-auto shadow-lg shadow-blue-600/15 transition-colors">
      {sending ? 'Sending your request…' : estimate ? 'Send estimate request' : 'Send message'}
    </button>
    <p className="text-xs text-slate-500">By sending, you agree that we may contact you about your inquiry.</p>
  </form>;
}
