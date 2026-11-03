import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CheckCircle2, ClipboardList, FileWarning, ShieldCheck } from 'lucide-react';
import Layout from '../components/Layout';

const documents = [
  'Bank and credit card statements for every affected month and account',
  'Loan statements, if loans or credit lines appear in the books',
  'Customer invoices, deposits, payment processor reports and vendor bills',
  'Payroll summaries and relevant supporting records, shared securely when needed',
  'The last completed reconciliation reports and any known unresolved questions'
];

const cleanupSteps = [
  { title: 'Identify the starting point', text: 'List every bank, credit card and loan account used by the business. Check the last month that was actually reconciled and identify the oldest incomplete period. A bank connection alone is not proof that bookkeeping is finished.' },
  { title: 'Preserve records and review existing work', text: 'Gather statements and save existing reconciliation reports before making historical changes. Look at the chart of accounts, opening balances and previously reconciled months. If a past reconciled entry looks wrong, investigate first rather than immediately editing or undoing it.' },
  { title: 'Review downloaded and manually entered transactions', text: 'In QuickBooks Online, review transactions under All apps → Accounting → Bank transactions (labels can vary). Match downloaded activity to existing invoices, payments or bills when appropriate; categorize only transactions not already entered. Review suggestions rather than accepting every category automatically.' },
  { title: 'Investigate duplicates, transfers and exceptions', text: 'Compare suspicious entries against the official bank or card statement. Common issues include an invoice payment counted again as new income, overlapping manual imports, transfers entered as income, and missing bank fees. Confirm the underlying facts before changing entries.' },
  { title: 'Reconcile each account month by month', text: 'Start with the oldest statement period needing reconciliation and work forward, checking beginning and ending balances. Resolve differences against actual records before finishing. If the beginning balance is wrong because of a historical change, review Intuit’s discrepancy guidance or consult an accountant.' },
  { title: 'Review reports and record open questions', text: 'After reconciliation, review the profit-and-loss report and balance sheet for unusual balances or missing activity. Also examine outstanding invoices, vendor bills and loan balances when relevant. Document uncertain classifications and questions for the owner or tax professional.' },
  { title: 'Move into an ongoing monthly routine', text: 'Once the historical periods are supported by records and unresolved items are documented, set a repeatable routine for collecting statements, reviewing transactions, reconciling accounts and checking reports each month.' }
];

const problems = [
  { title: 'Payments recorded twice', text: 'A bank-feed deposit may have been added as new income even though an invoice payment already exists. Verify the source and use matching where appropriate; never delete an entry solely because the amounts look similar.' },
  { title: 'Missing bank statements', text: 'Ask the bank or card issuer for complete statement periods. A current online balance is not a substitute for the historical month-end statement.' },
  { title: 'Personal and business purchases mixed together', text: 'Flag the items and ask the owner to identify their purpose. Avoid guessing tax deductibility or changing owner transactions without supporting information.' },
  { title: 'Older reconciliations were modified', text: 'Review prior reconciliation and discrepancy reports. Undoing a full reconciliation can affect later periods and permanently delete its report and attachments, so involve the appropriate accountant before proceeding.' }
];

const faqs = [
  { question: 'How far back should I go when cleaning up QuickBooks?', answer: 'Begin by locating the last reliable, completed period and identifying the earliest month that needs attention. How far back the review must go depends on the missing records, the bookkeeping file and any advice from your tax professional.' },
  { question: 'Can I just categorize every transaction in the bank feed?', answer: 'No. An item may already be recorded as an invoice payment, bill payment or transfer. Matching an existing record is different from creating a new transaction. Review source documents and duplicates before posting.' },
  { question: 'Should I undo old reconciliations to start over?', answer: 'Not automatically. Undoing reconciliations can affect multiple later periods and delete reconciliation reports and attachments. First investigate the actual error, preserve reports, and consult your accountant when historical corrections are necessary.' },
  { question: 'Does a cleanup project include filing old tax returns?', answer: 'No. Bookkeeping cleanup focuses on the accounting records, transactions and reconciliations in the agreed scope. Tax return preparation, amended returns and tax advice are handled separately by your qualified tax professional.' },
  { question: 'How much does QuickBooks cleanup cost?', answer: 'Pricing varies with the number of months, bank and card accounts, transaction volume, missing statements, complexity and condition of the file. Dietz Bookkeeping reviews those factors before preparing a scope-based estimate.' },
  { question: 'Can Dietz Bookkeeping help my business outside Tampa?', answer: 'Yes. We are based in Tampa and discuss remote QuickBooks Online cleanup and ongoing bookkeeping services with small businesses across the United States.' }
];

export default function QuickBooksOverdueBookkeepingGuide() {
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
              <span aria-current="page">Overdue QuickBooks cleanup</span>
            </nav>
            <p className="text-sm font-bold tracking-wide text-blue-700 mb-4">SMALL BUSINESS BOOKKEEPING GUIDE</p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-slate-900 mb-6">How to clean up months of overdue bookkeeping in QuickBooks Online</h1>
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-3xl mb-6">
              Behind on your books? Learn how to identify the backlog, gather missing documents, review transactions and reconcile accounts without rushing into unsupported corrections.
            </p>
            <p className="text-sm text-slate-600">By Bryan Dietz · Dietz Bookkeeping · Tampa-based, serving small businesses nationwide</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cleanup-steps" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-white font-semibold hover:bg-blue-700">View the cleanup steps <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
              <Link to="/tampa-cleanup-bookkeeping/" className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-900 hover:bg-slate-50">Explore cleanup services</Link>
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <section className="py-12 sm:py-14 border-b border-slate-200" aria-labelledby="quick-answer">
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-7 sm:p-9">
              <h2 id="quick-answer" className="text-2xl font-bold text-slate-900 mb-4">The short answer</h2>
              <p className="text-slate-700 leading-relaxed">Start with the oldest incomplete month, collect every statement, compare downloaded and manually entered transactions, match or categorize transactions based on the actual records, investigate duplicates and missing activity, then reconcile each account in chronological order. Keep a written list of unresolved items and review financial reports before moving into ongoing monthly bookkeeping.</p>
              <p className="text-sm text-slate-600 mt-4">This guide is general bookkeeping education, not tax or accounting advice for a specific file. Menu names may change as QuickBooks Online is updated.</p>
            </div>
          </section>

          <section className="py-12 sm:py-14 border-b border-slate-200" aria-labelledby="catchup-vs-cleanup">
            <h2 id="catchup-vs-cleanup" className="text-3xl font-bold text-slate-900 mb-5">Catch-up bookkeeping versus cleanup bookkeeping</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6"><h3 className="text-xl font-bold text-slate-900 mb-3">Catch-up bookkeeping</h3><p className="text-slate-700 leading-relaxed">Entering, matching and reconciling transactions for months that have not yet been completed. The records may be mostly correct but unfinished.</p></div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6"><h3 className="text-xl font-bold text-slate-900 mb-3">Cleanup bookkeeping</h3><p className="text-slate-700 leading-relaxed">Investigating and correcting supported errors such as duplicates, improper matching, unexplained balances or historical reconciliation differences. Both types of work may be needed.</p></div>
            </div>
          </section>

          <section className="py-12 sm:py-14 border-b border-slate-200" aria-labelledby="records-heading">
            <div className="flex items-center gap-3 mb-6"><ClipboardList className="h-7 w-7 text-blue-700" aria-hidden="true" /><h2 id="records-heading" className="text-3xl font-bold text-slate-900">Gather the records before editing the books</h2></div>
            <ul className="space-y-4">
              {documents.map(item => <li key={item} className="flex gap-3 text-slate-700 leading-relaxed"><CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" aria-hidden="true" /><span>{item}</span></li>)}
            </ul>
            <p className="text-sm text-slate-600 mt-6">Do not send passwords, bank login credentials, payroll identifiers or sensitive customer documents through a public website form. Discuss secure access and document sharing before an engagement.</p>
          </section>

          <section id="cleanup-steps" className="py-12 sm:py-14 border-b border-slate-200 scroll-mt-28" aria-labelledby="steps-heading">
            <h2 id="steps-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5">Seven steps to review overdue QuickBooks Online bookkeeping</h2>
            <p className="text-slate-700 leading-relaxed mb-8">A safe cleanup order matters. Review what already exists before adding, excluding or changing historical transactions. QuickBooks menus and tabs vary by account and subscription; use the app’s search when the navigation differs.</p>
            <ol className="space-y-5">
              {cleanupSteps.map((step, index) => (
                <li key={step.title} className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
                  <span className="shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-700">{index + 1}</span>
                  <div><h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3><p className="text-slate-700 leading-relaxed">{step.text}</p></div>
                </li>
              ))}
            </ol>
            <div className="mt-8 rounded-2xl bg-blue-50 border border-blue-100 p-6">
              <h3 className="font-bold text-slate-900 mb-2">Related: reconciling each statement period</h3>
              <p className="text-slate-700 leading-relaxed mb-3">If you need a walkthrough of the monthly bank reconciliation screen, see our separate guide.</p>
              <Link to="/quickbooks-bank-reconciliation-guide/" className="text-blue-700 font-semibold underline underline-offset-4">How to reconcile bank accounts in QuickBooks Online</Link>
            </div>
          </section>

          <section className="py-12 sm:py-14 border-b border-slate-200" aria-labelledby="example-heading">
            <h2 id="example-heading" className="text-3xl font-bold text-slate-900 mb-5">Example: a small business with three months behind</h2>
            <p className="text-slate-700 leading-relaxed mb-6">Imagine a cleaning business that last reconciled June. July, August and September contain activity from a business bank account and credit card. The owner notices a duplicate deposit, an unrecorded card fee and a missing August statement.</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5"><p className="text-sm font-bold text-blue-700 mb-2">FIRST</p><h3 className="font-bold text-slate-900 mb-2">Find the missing source</h3><p className="text-slate-700">Request the August statement and compare it with the other months before deciding anything is missing.</p></div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5"><p className="text-sm font-bold text-blue-700 mb-2">NEXT</p><h3 className="font-bold text-slate-900 mb-2">Investigate entries</h3><p className="text-slate-700">Verify whether the deposit appears twice in QuickBooks and whether the statement supports the card fee.</p></div>
              <div className="rounded-xl border border-blue-100 bg-blue-50 p-5"><p className="text-sm font-bold text-blue-700 mb-2">THEN</p><h3 className="font-bold text-slate-900 mb-2">Reconcile forward</h3><p className="text-slate-700">Work through July, August and September by account and record any outstanding questions.</p></div>
            </div>
            <p className="text-sm text-slate-600 mt-5">Illustrative training example only, not a real client result or promise of a fixed cleanup time.</p>
          </section>

          <section className="py-12 sm:py-14 border-b border-slate-200" aria-labelledby="problems-heading">
            <div className="flex items-center gap-3 mb-5"><FileWarning className="h-7 w-7 text-blue-700" aria-hidden="true" /><h2 id="problems-heading" className="text-3xl font-bold text-slate-900">Four issues to investigate carefully</h2></div>
            <div className="grid md:grid-cols-2 gap-5">{problems.map(item => <div key={item.title} className="rounded-2xl border border-slate-200 p-6"><h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3><p className="text-slate-700 leading-relaxed">{item.text}</p></div>)}</div>
            <div className="rounded-2xl bg-blue-50 border-l-4 border-blue-600 p-6 mt-7">
              <div className="flex items-start gap-3"><ShieldCheck className="h-6 w-6 text-blue-700 shrink-0" aria-hidden="true" /><div><h3 className="font-bold text-slate-900 mb-2">Protect previously reconciled periods</h3><p className="text-slate-700 leading-relaxed">Never undo old reconciliations or post unsupported adjustments merely to make a report match. Intuit warns that undoing a reconciliation can also undo later reconciliations and permanently remove related reports and attachments. Review with the appropriate accountant first.</p></div></div>
            </div>
          </section>

          <section className="py-12 sm:py-14 border-b border-slate-200" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-3xl font-bold text-slate-900 mb-7">Overdue bookkeeping cleanup FAQs</h2>
            <div className="divide-y divide-slate-200">{faqs.map(faq => <details key={faq.question} className="py-5"><summary className="text-lg cursor-pointer font-semibold text-slate-900 pr-6">{faq.question}</summary><p className="mt-3 text-slate-700 leading-relaxed">{faq.answer}</p></details>)}</div>
          </section>

          <section className="py-12 sm:py-14" aria-labelledby="sources-heading">
            <div className="flex items-center gap-3 mb-5"><BookOpen className="h-6 w-6 text-blue-700" aria-hidden="true" /><h2 id="sources-heading" className="text-2xl font-bold text-slate-900">Official QuickBooks references</h2></div>
            <p className="text-slate-700 mb-4">These topics were checked against Intuit’s QuickBooks Online documentation. Follow the instructions appropriate for your version and business records.</p>
            <ul className="space-y-3 list-disc pl-6 text-blue-700">
              <li><a href="https://quickbooks.intuit.com/learn-support/en-us/help-article/banking/categorize-match-online-bank-transactions-online/L1bTafTz3_US_en_US" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">Categorize and match bank transactions</a></li>
              <li><a href="https://quickbooks.intuit.com/learn-support/en-us/help-article/duplicate-transactions/fix-duplicate-transactions-quickbooks-online-bank-feeds/L1fjxl88f_US_en_US" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">Review duplicate bank feed transactions</a></li>
              <li><a href="https://quickbooks.intuit.com/learn-support/en-us/help-article/statement-reconciliation/fix-issues-accounts-reconciled-past-quickbooks/L8lx6PQQ5_US_en_US" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">Fix beginning balance discrepancies</a></li>
              <li><a href="https://quickbooks.intuit.com/learn-support/en-us/help-article/balance-sheet/undo-entire-reconciliation-quickbooks-online/L8t48Iv10_US_en_US" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">Understand risks before undoing a reconciliation</a></li>
            </ul>
            <p className="text-sm text-slate-500 mt-6">Prepared by Dietz Bookkeeping. QuickBooks is a trademark of Intuit Inc. Dietz Bookkeeping is an independent business and does not claim Intuit endorsement through this article.</p>
          </section>
        </div>

        <section className="bg-slate-900 text-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-5">Behind on your bookkeeping? Start with a review.</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">Dietz Bookkeeping discusses QuickBooks Online catch-up and cleanup projects for small businesses nationwide. Share the months affected, accounts involved and general condition of the books—without submitting sensitive financial documents in a public form.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/schedule/" className="rounded-xl bg-blue-600 px-7 py-3.5 font-semibold hover:bg-blue-500">Book a Free Consultation</Link>
              <Link to="/estimate/" className="rounded-xl border border-slate-500 px-7 py-3.5 font-semibold hover:bg-slate-800">Request a Cleanup Estimate</Link>
            </div>
            <p className="text-sm text-slate-400 mt-6">Work directly with Bryan Dietz · Based in Tampa, serving U.S. small businesses remotely</p>
          </div>
        </section>
      </article>
    </Layout>
  );
}
