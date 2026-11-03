import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const checklists = [
  {title:'Monthly bookkeeping checklist',items:['Collect bank and credit card statements for each business account.','Gather receipts and note the business purpose of unclear transactions.','Review unpaid customer invoices and upcoming vendor bills.','Keep personal and business transactions separate and flag any mixed activity.','Review account balances and reports with your bookkeeper.']},
  {title:'Prepare for a cleanup review',items:['Identify the last month your books were reviewed or reconciled.','List all bank, credit card and loan accounts used by the business.','Check which statements and receipts are missing.','Note any duplicate entries, unreconciled balances or software changes.','Tell Bryan about upcoming deadlines so scope and timing can be discussed.']},
  {title:'Prepare for your tax professional',items:['Bring your bookkeeping up to date for the period being reviewed.','Organize year-end reports and supporting statements.','Flag transactions needing clarification rather than guessing a category.','Ask your tax professional which additional documents apply to your situation.','Confirm who is responsible for tax advice, returns and filing.']}
];
export default function Resources() {
 return <Layout>
  <section className="bg-blue-50 py-20"><div className="max-w-4xl mx-auto px-6"><h1 className="text-4xl md:text-5xl font-bold mb-6">A clearer starting point for your books.</h1><p className="text-xl text-slate-600">Original QuickBooks how-to guides, practical checklists, an accountant-access tutorial and existing client forms—all in one place.</p></div></section>
  <section className="py-14 sm:py-16 bg-white"><div className="max-w-6xl mx-auto px-6">
    <p className="text-sm font-bold tracking-wide text-blue-700 mb-3">ORIGINAL QUICKBOOKS GUIDE</p>
    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5">Learn how to reconcile your accounts</h2>
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-9">
      <h3 className="text-2xl font-bold text-slate-900 mb-3">How to reconcile bank accounts in QuickBooks Online</h3>
      <p className="text-slate-700 leading-relaxed max-w-3xl mb-5">Follow the statement-by-statement process, understand why the ending balance may not agree and see what to review before finishing a reconciliation.</p>
      <Link to="/quickbooks-bank-reconciliation-guide/" className="inline-flex items-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 font-semibold">Read the step-by-step guide →</Link>
      <p className="text-sm text-slate-600 mt-4">General educational guidance based on official Intuit documentation; not a substitute for reviewing your actual records.</p>
    </div>
  </div></section>
  <section className="py-10 sm:py-12 bg-white"><div className="max-w-6xl mx-auto px-6">
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-9">
      <p className="text-sm font-bold tracking-wide text-blue-700 mb-3">ORIGINAL QUICKBOOKS GUIDE</p>
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">How to clean up months of overdue bookkeeping in QuickBooks Online</h2>
      <p className="text-slate-700 leading-relaxed max-w-3xl mb-5">Find the oldest unfinished month, gather historical statements, review duplicate transactions and reconcile forward—without guessing at old adjustments.</p>
      <Link to="/quickbooks-overdue-bookkeeping-cleanup/" className="inline-flex items-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 font-semibold">Read the cleanup guide →</Link>
      <p className="text-sm text-slate-600 mt-4">Educational guidance using official Intuit references, not a promise that every file can be corrected without professional review.</p>
    </div>
  </div></section>
  <section className="py-10 sm:py-12 bg-white"><div className="max-w-6xl mx-auto px-6">
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-9">
      <p className="text-sm font-bold tracking-wide text-blue-700 mb-3">ORIGINAL QUICKBOOKS GUIDE</p>
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">How to read a Profit and Loss report in QuickBooks Online</h2>
      <p className="text-slate-700 leading-relaxed max-w-3xl mb-5">Understand revenue, direct costs, expenses, profit versus cash, and the difference between cash- and accrual-basis reporting. Includes a sample small-business report.</p>
      <Link to="/quickbooks-profit-and-loss-report/" className="inline-flex items-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 font-semibold">Read the Profit and Loss guide →</Link>
      <p className="text-sm text-slate-600 mt-4">Original educational guide based on official QuickBooks documentation; examples are illustrative.</p>
    </div>
  </div></section>
  <section className="py-16"><div className="max-w-6xl mx-auto px-6"><h2 className="text-3xl font-bold mb-8">Bookkeeping checklists</h2><div className="grid lg:grid-cols-3 gap-6">{checklists.map(list=><article key={list.title} className="bg-slate-50 p-7 rounded-3xl"><h3 className="text-xl font-bold mb-5">{list.title}</h3><ul className="space-y-4 text-slate-600">{list.items.map(item=><li key={item} className="flex gap-3"><span aria-hidden="true" className="text-blue-600">✓</span><span>{item}</span></li>)}</ul></article>)}</div><p className="mt-6"><a href="https://drive.google.com/uc?export=download&amp;id=1Vm9n9Jt6VpP4yXcU6wME2M8ahjb_VesB" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Open the existing tax documentation guide on Google Drive</a></p><p className="text-sm text-slate-500 mt-6">These checklists help organize your records. Your tax professional determines tax treatment and filing requirements for your situation.</p></div></section>
  <section className="py-10 bg-white"><div className="max-w-6xl mx-auto px-6 rounded-2xl border border-blue-100 bg-blue-50 p-7"><h2 className="text-2xl font-bold text-slate-900 mb-3">Need hands-on QuickBooks Online bookkeeping support?</h2><p className="text-slate-700 mb-4">Learn about reconciliations, monthly reporting and catch-up bookkeeping with an agreed service scope.</p><Link to="/quickbooks-online-bookkeeping/" className="text-blue-700 font-semibold underline underline-offset-4">Explore QuickBooks Online bookkeeping services</Link></div></section>
  <section className="py-16 bg-slate-50"><div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12"><div><h2 className="text-3xl font-bold mb-5">QuickBooks Online access</h2><p className="text-slate-600 mb-6">Watch the tutorial on inviting an accountant to QuickBooks Online. Confirm the invitation email with Bryan first, and use the software’s invitation feature rather than sharing your password.</p><a href="https://www.youtube.com/watch?v=0x_fWYYCgF4" target="_blank" rel="noopener noreferrer" className="block group"><img src="/images/quickbooks-accountant-access-video.webp" alt="QuickBooks Online accountant invitation video tutorial" loading="lazy" width="1000" height="563" className="rounded-2xl w-full mb-4"/><span className="text-blue-600 font-semibold underline">Watch the QuickBooks tutorial on YouTube →</span></a></div><div><h2 className="text-3xl font-bold mb-5">Existing client forms</h2><p className="text-slate-600 mb-6">Use these forms after confirming the next step with Bryan. They open on Jotform in a new tab.</p><div className="space-y-4"><a href="https://form.jotform.com/260538313079054" target="_blank" rel="noopener noreferrer" className="block bg-white border rounded-2xl p-6"><h3 className="font-bold text-lg mb-2">New client intake</h3><span className="text-blue-600">Open intake form →</span></a><a href="https://form.jotform.com/260538446299065" target="_blank" rel="noopener noreferrer" className="block bg-white border rounded-2xl p-6"><h3 className="font-bold text-lg mb-2">Direct deposit authorization</h3><p className="text-sm text-slate-600 mb-2">For an agreed payroll setup only. Confirm with Bryan before entering payment information.</p><span className="text-blue-600">Open authorization form →</span></a></div><p className="text-slate-600 mt-6">Need a W-9 or another document? <a href="mailto:bryand@dietzbookkeeping.com" className="text-blue-600 underline">Contact Bryan to arrange it.</a></p></div></div></section>
  <section className="py-16"><div className="max-w-4xl mx-auto px-6 text-center"><h2 className="text-3xl font-bold mb-5">Need help putting this into practice?</h2><p className="text-slate-600 mb-8">Discuss ongoing bookkeeping or a cleanup project, whether you are in Tampa or elsewhere in the United States.</p><Link to="/schedule" className="inline-block bg-blue-600 text-white px-7 py-4 rounded-xl font-semibold">Book a Free Consultation</Link></div></section>
 </Layout>;
}
