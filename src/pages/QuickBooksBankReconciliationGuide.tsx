import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CheckCircle2, ClipboardList, FileWarning, ShieldCheck } from 'lucide-react';
import Layout from '../components/Layout';

const prepare = [
  'The complete bank or credit card statement for the period, including the ending date and balance.',
  'Access to the matching account in QuickBooks Online, with downloaded transactions reviewed and categorized.',
  'The prior reconciliation report, if the account has been reconciled before.',
  'Invoices, receipts and payment processor records that help explain uncertain activity.'
];

const steps = [
  {
    title: 'Check the account and opening point',
    description: 'Choose the specific bank or credit card account you intend to reconcile. If it has been reconciled before, the beginning balance should agree with the previous reconciliation. If this is your first reconciliation, verify the opening balance against the appropriate statement.'
  },
  {
    title: 'Open the Reconcile screen',
    description: 'In the current QuickBooks Online interface, go to All apps, Accounting, then Reconcile (menus can vary by product view). Select Reconcile or Get started, and choose the account from the account list.'
  },
  {
    title: 'Enter the statement ending information',
    description: 'Use the ending balance and ending date printed on the actual bank or card statement. Confirm the last statement ending date makes sense before you start reconciling.'
  },
  {
    title: 'Compare the transactions line by line',
    description: 'Check QuickBooks transactions against the statement for the same account and period. Mark only the items that cleared the account according to the statement. Review dates, amounts, deposits, withdrawals and transfer details rather than checking every imported item automatically.'
  },
  {
    title: 'Resolve any difference before finishing',
    description: 'The reconciliation difference should reach $0.00 after the correct transactions have been matched. If it does not, recheck the ending information, missing or duplicated entries, fees and transactions marked as cleared in error. Do not invent an entry merely to force a zero difference.'
  },
  {
    title: 'Finish and save the report',
    description: 'When the difference is zero and you have reviewed the matching transactions, choose Finish now and Done. QuickBooks Online saves a reconciliation report that you can later access using History by account.'
  }
];

const issues = [
  { symptom: 'Beginning balance does not match', review: 'Review the previous reconciliation or the first opening balance. A previously reconciled entry may have been edited, removed or unreconciled. Investigate before changing historical entries.' },
  { symptom: 'Difference remains after matching', review: 'Verify statement ending date and balance, then check for missing deposits, bank charges, duplicates, wrong amounts, outstanding checks and items matched to the wrong month.' },
  { symptom: 'Downloaded transactions look correct', review: 'Bank feeds are useful but do not replace the official statement. Confirm whether each entry was categorized or matched correctly and belongs to the relevant account.' },
  { symptom: 'Old months have never been reconciled', review: 'Identify the oldest incomplete period and gather statements before proceeding. A backlog may need a separate cleanup plan rather than a quick one-month fix.' }
];

const questions = [
  { question: 'Does a QuickBooks bank feed automatically reconcile my accounts?', answer: 'No. Downloaded transactions can make matching easier, but reconciliation still involves comparing the bookkeeping records with the official statement for a defined period.' },
  { question: 'What should I do if my beginning balance is wrong?', answer: 'Check whether this is the first reconciliation or a later one. For a later reconciliation, review the prior report and any changes to already reconciled transactions. Avoid deleting or changing old entries without understanding their effect.' },
  { question: 'Can I finish when QuickBooks shows a difference?', answer: 'QuickBooks may offer an adjustment, but that can create another accounting entry rather than resolve the underlying problem. Intuit advises treating adjustments as a last resort and consulting an accountant when unsure.' },
  { question: 'How often should I reconcile bank and credit card accounts?', answer: 'A monthly reconciliation for each business account after its statement closes is a practical routine for many small businesses. Your actual schedule may depend on activity and reporting needs.' },
  { question: 'Is reconciling the same as categorizing bank transactions?', answer: 'No. Categorization records what an item represents; reconciliation checks whether the recorded activity agrees with the bank or credit card statement for that period.' },
  { question: 'Can Dietz Bookkeeping help me if several months are missing?', answer: 'We can review your accounts, statements and the periods needing attention, then discuss a separate cleanup scope. Monthly bookkeeping and historical cleanup are quoted based on the work involved.' }
];

export default function QuickBooksBankReconciliationGuide() {
  return (
    <Layout>
      <article>
        <header className="bg-gradient-to-br from-blue-50 via-white to-slate-50 py-14 sm:py-20">
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            <nav aria-label="Breadcrumb" className="text-sm text-slate-600 mb-6">
              <Link to="/" className="underline underline-offset-4 hover:text-blue-700">Home</Link>
              <span aria-hidden="true"> / </span>
              <Link to="/resources/" className="underline underline-offset-4 hover:text-blue-700">Resources</Link>
              <span aria-hidden="true"> / </span>
              <span aria-current="page">QuickBooks bank reconciliation</span>
            </nav>
            <p className="text-sm font-bold tracking-wide text-blue-700 mb-4">SMALL BUSINESS BOOKKEEPING GUIDE</p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-slate-900 mb-6">How to reconcile bank accounts in QuickBooks Online</h1>
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-3xl mb-6">
              A practical, statement-by-statement guide to matching transactions, understanding reconciliation differences and keeping your small-business books organized.
            </p>
            <p className="text-sm text-slate-600">By Bryan Dietz · Dietz Bookkeeping · Tampa-based, serving businesses nationwide</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#reconciliation-steps" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-white font-semibold hover:bg-blue-700">Follow the steps <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
              <Link to="/tampa-bank-reconciliation/" className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-900 hover:bg-slate-50">Explore reconciliation services</Link>
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <section className="py-12 sm:py-14 border-b border-slate-200" aria-labelledby="quick-answer">
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-7 sm:p-9">
              <h2 id="quick-answer" className="text-2xl font-bold text-slate-900 mb-4">The short answer</h2>
              <p className="text-slate-700 leading-relaxed">
                To reconcile an account in QuickBooks Online, select the correct account and statement period, enter the bank statement’s ending balance and date, match the cleared transactions in QuickBooks to that statement, investigate any remaining difference, and finish once the difference is $0.00. Save the reconciliation report for your records.
              </p>
              <p className="text-sm text-slate-600 mt-4">
                This is general bookkeeping education, not an audit or a recommendation to edit historical records without review. QuickBooks screens may change over time.
              </p>
            </div>
          </section>

          <section className="py-12 sm:py-14 border-b border-slate-200" aria-labelledby="why-reconcile">
            <h2 id="why-reconcile" className="text-3xl font-bold text-slate-900 mb-4">Why reconciliation matters</h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              A QuickBooks bank balance and the bank’s actual statement balance are not always the same. An outstanding check, a transaction entered twice, a processor fee or a payment still in transit can change the picture. Reconciliation helps you explain those differences for a particular statement period rather than simply trusting the bank feed.
            </p>
            <p className="text-slate-700 leading-relaxed">
              For a cleaning company, that may involve a recurring client deposit and card fees. For a handyman or contracting business, it may involve material purchases and checks that have not cleared. The records and accounting treatment depend on what actually happened in the business.
            </p>
          </section>

          <section className="py-12 sm:py-14 border-b border-slate-200" aria-labelledby="what-you-need">
            <div className="flex items-center gap-3 mb-6">
              <ClipboardList className="h-7 w-7 text-blue-700" aria-hidden="true" />
              <h2 id="what-you-need" className="text-3xl font-bold text-slate-900">Before you start: gather these records</h2>
            </div>
            <ul className="space-y-4">
              {prepare.map(item => <li key={item} className="flex gap-3 text-slate-700 leading-relaxed"><CheckCircle2 className="h-5 w-5 text-blue-600 mt-1 shrink-0" aria-hidden="true" /><span>{item}</span></li>)}
            </ul>
            <p className="text-slate-600 text-sm mt-5">
              Use your bank’s official statement, not just a screenshot of your current online balance. Never share banking passwords through a public contact or estimate form.
            </p>
          </section>

          <section id="reconciliation-steps" className="py-12 sm:py-14 border-b border-slate-200 scroll-mt-28" aria-labelledby="steps-heading">
            <h2 id="steps-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5">Step-by-step: reconcile in QuickBooks Online</h2>
            <p className="text-slate-700 leading-relaxed mb-8">
              Intuit’s current navigation starts at <strong>All apps → Accounting → Reconcile</strong>. If your QuickBooks layout differs, use its in-app search for “Reconcile.” <a className="text-blue-700 font-semibold underline underline-offset-4" href="https://quickbooks.intuit.com/learn-support/en-us/help-article/statement-reconciliation/reconcile-account-quickbooks-online/L3XzsllsK_US_en_US" target="_blank" rel="noopener noreferrer">Check Intuit’s current instructions</a>.
            </p>
            <ol className="space-y-5">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
                  <span className="shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-700">{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="py-12 sm:py-14 border-b border-slate-200" aria-labelledby="example-heading">
            <h2 id="example-heading" className="text-3xl font-bold text-slate-900 mb-5">Example: tracking down an $18 difference</h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              Imagine a small business finishes checking its statement transactions, but QuickBooks still shows an $18.00 difference. The bank statement includes a confirmed $18.00 monthly service charge, and the bookkeeper finds that no matching charge was recorded in QuickBooks.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-5">
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-5"><p className="text-sm text-slate-600 mb-2">Unresolved difference</p><p className="text-3xl font-bold text-slate-900">$18.00</p></div>
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-5"><p className="text-sm text-slate-600 mb-2">Verified missing bank fee</p><p className="text-3xl font-bold text-slate-900">$18.00</p></div>
              <div className="rounded-xl bg-blue-50 border border-blue-100 p-5"><p className="text-sm text-slate-600 mb-2">Difference after correct entry and matching</p><p className="text-3xl font-bold text-blue-800">$0.00</p></div>
            </div>
            <p className="text-sm text-slate-600">
              Illustrative example only; not a customer case. The proper entry depends on the account, source documents and existing bookkeeping. Do not post a guessed fee to make the numbers agree.
            </p>
          </section>

          <section className="py-12 sm:py-14 border-b border-slate-200" aria-labelledby="troubleshooting-heading">
            <div className="flex gap-3 items-center mb-6"><FileWarning className="h-7 w-7 text-blue-700" aria-hidden="true" /><h2 id="troubleshooting-heading" className="text-3xl font-bold text-slate-900">When your QuickBooks reconciliation does not match</h2></div>
            <div className="grid md:grid-cols-2 gap-5">
              {issues.map(item => <div key={item.symptom} className="p-6 rounded-2xl bg-slate-50 border border-slate-200"><h3 className="text-lg font-bold text-slate-900 mb-3">{item.symptom}</h3><p className="text-slate-700 leading-relaxed">{item.review}</p></div>)}
            </div>
            <div className="mt-7 rounded-xl border-l-4 border-blue-600 bg-blue-50 p-6">
              <div className="flex gap-3 items-start">
                <ShieldCheck className="h-6 w-6 text-blue-700 shrink-0" aria-hidden="true" />
                <div><h3 className="font-bold text-slate-900 mb-2">Avoid forcing a reconciliation to balance</h3><p className="text-slate-700 leading-relaxed">An adjustment may hide the actual cause of the discrepancy. If you cannot identify why the books differ from the statement, review the source records or consult an accountant rather than creating an unsupported adjusting entry.</p></div>
              </div>
            </div>
            <p className="mt-5 text-slate-700">
              Intuit has separate instructions for <a href="https://quickbooks.intuit.com/learn-support/en-us/help-article/statement-reconciliation/fix-issues-accounts-reconciled-past-quickbooks/L8lx6PQQ5_US_en_US" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 underline underline-offset-4">incorrect beginning balances</a> and <a href="https://quickbooks.intuit.com/learn-support/en-us/help-article/statement-reconciliation/fix-issues-end-reconciliation-quickbooks-online/L3mZimyAb_US_en_US" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 underline underline-offset-4">differences at the end of reconciliation</a>.
            </p>
          </section>

          <section className="py-12 sm:py-14 border-b border-slate-200" aria-labelledby="after-heading">
            <h2 id="after-heading" className="text-3xl font-bold text-slate-900 mb-5">After reconciliation: keep the process repeatable</h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              Save or retain the QuickBooks reconciliation report with the corresponding bank statement. Track outstanding or unresolved items with the person responsible for the books. For many small businesses, repeating this process when each monthly statement closes keeps discrepancies from accumulating.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Reconciliation supports accurate bookkeeping, but it does not by itself prove every transaction was correctly classified, that the financial statements are audited, or that fraud has been ruled out.
            </p>
          </section>

          <section className="py-12 sm:py-14 border-b border-slate-200" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-3xl font-bold text-slate-900 mb-7">QuickBooks reconciliation FAQs</h2>
            <div className="divide-y divide-slate-200">
              {questions.map(item => <details key={item.question} className="py-5"><summary className="cursor-pointer text-lg font-semibold text-slate-900 pr-6">{item.question}</summary><p className="mt-3 text-slate-700 leading-relaxed">{item.answer}</p></details>)}
            </div>
          </section>

          <section className="py-12 sm:py-14" aria-labelledby="sources-heading">
            <div className="flex items-center gap-3 mb-4"><BookOpen className="h-6 w-6 text-blue-700" aria-hidden="true" /><h2 id="sources-heading" className="text-2xl font-bold text-slate-900">Official QuickBooks references</h2></div>
            <p className="text-slate-700 mb-4">The product navigation and reconciliation guidance were checked against Intuit’s current help documentation. Always follow the steps shown in your own QuickBooks Online account.</p>
            <ul className="space-y-3 list-disc pl-6 text-blue-700">
              <li><a href="https://quickbooks.intuit.com/learn-support/en-us/help-article/statement-reconciliation/reconcile-account-quickbooks-online/L3XzsllsK_US_en_US" className="font-semibold underline underline-offset-4" target="_blank" rel="noopener noreferrer">Reconcile an account in QuickBooks Online — Intuit</a></li>
              <li><a href="https://quickbooks.intuit.com/learn-support/en-us/help-article/statement-reconciliation/fix-issues-accounts-reconciled-past-quickbooks/L8lx6PQQ5_US_en_US" className="font-semibold underline underline-offset-4" target="_blank" rel="noopener noreferrer">Fix beginning balance issues — Intuit</a></li>
              <li><a href="https://quickbooks.intuit.com/learn-support/en-us/help-article/statement-reconciliation/fix-issues-end-reconciliation-quickbooks-online/L3mZimyAb_US_en_US" className="font-semibold underline underline-offset-4" target="_blank" rel="noopener noreferrer">Fix an ending reconciliation difference — Intuit</a></li>
            </ul>
            <p className="text-sm text-slate-500 mt-6">Guide prepared by Dietz Bookkeeping. QuickBooks is a trademark of Intuit Inc.; Dietz Bookkeeping is an independent business and does not claim Intuit endorsement through this article.</p>
          </section>
        </div>

        <section className="bg-slate-900 text-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-5">Need help reconciling your business accounts?</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">Dietz Bookkeeping offers remote account reconciliation, monthly bookkeeping and separate catch-up discussions for small businesses across the United States. Tell us what is behind, which accounts are involved and what records you have available.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/schedule/" className="rounded-xl bg-blue-600 px-7 py-3.5 font-semibold hover:bg-blue-500">Book a Free Consultation</Link>
              <Link to="/estimate/" className="rounded-xl border border-slate-500 px-7 py-3.5 font-semibold hover:bg-slate-800">Request a Bookkeeping Estimate</Link>
            </div>
            <p className="text-sm text-slate-400 mt-6">Work directly with Bryan Dietz · Tampa-based · Available remotely nationwide</p>
          </div>
        </section>
      </article>
    </Layout>
  );
}
