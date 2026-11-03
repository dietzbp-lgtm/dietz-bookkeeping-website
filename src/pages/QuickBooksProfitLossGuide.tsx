import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, BookOpen, CheckCircle2, ClipboardCheck, FileWarning } from 'lucide-react';
import Layout from '../components/Layout';

const reportLines = [
  { label: 'Income from services', amount: '$25,000', detail: 'Revenue recorded for the report period' },
  { label: 'Cost of goods sold / direct job costs', amount: '($5,000)', detail: 'Direct costs that are assigned to cost of goods sold, if used' },
  { label: 'Gross profit', amount: '$20,000', detail: 'Income less cost of goods sold', important: true },
  { label: 'Operating expenses', amount: '($13,000)', detail: 'Recorded overhead such as rent, software and marketing' },
  { label: 'Net income', amount: '$7,000', detail: 'Reported profit after the illustrated costs and expenses', important: true }
];

const steps = [
  { title: 'Open the Profit and Loss report', text: 'In QuickBooks Online, open Reports and then Standard reports. Search for Profit and Loss and open the report. Some menus differ between classic and modern reporting views.' },
  { title: 'Select the dates you want to understand', text: 'Choose a month, quarter or year. Check that the start and end dates match the period you intend to discuss; an incomplete current month may be misleading compared with a fully closed prior month.' },
  { title: 'Check cash or accrual basis', text: 'Review the report’s Accounting method setting. Cash-basis reporting generally reflects income and expenses when payments occur; accrual-basis reporting generally reflects them when earned or incurred, subject to the underlying records and specific accounting rules.' },
  { title: 'Read revenue, direct costs and expenses', text: 'Look at sales or service income, cost of goods sold if your business uses it, and operating expenses. Expand the account groups when a number looks surprising. Check that transactions were classified appropriately.' },
  { title: 'Compare another period', text: 'Use the available compare or display-columns options to view months side by side, or show dollar and percentage changes when supported. A rise in revenue is most informative when you also inspect costs, margins and one-time entries.' },
  { title: 'Investigate unexpected totals before making decisions', text: 'Check for missing reconciliations, duplicate revenue, personal spending mixed with business costs, irregular expenses, uncategorized entries and date-range differences. Ask a bookkeeper or accountant before reclassifying unfamiliar transactions.' }
];

const pitfalls = [
  { title: 'Profit is not the bank balance', text: 'A profitable business can still have low cash due to outstanding receivables, loan payments, inventory or equipment purchases, tax obligations and owner withdrawals.' },
  { title: 'An owner draw is generally not an operating expense', text: 'For a sole proprietor or certain other structures, a draw is usually an equity transaction, not an expense deducted to calculate operating profit. Treatment depends on entity type and transaction facts; confirm with your tax professional.' },
  { title: 'Loan proceeds and principal are not sales or routine expenses', text: 'Borrowing generally creates a liability, and principal repayments generally reduce it. Interest costs may affect the income statement; check that loan transactions are recorded correctly.' },
  { title: 'A report reflects the records you have entered', text: 'Missing bills, duplicate deposits, incorrectly matched payments or unreconciled accounts can distort the result even if QuickBooks displays a polished-looking report.' }
];

const faqs = [
  { question: 'What does a QuickBooks Profit and Loss report show?', answer: 'A Profit and Loss report summarizes recorded income and expenses over a selected period and shows the resulting profit or loss. Depending on your chart of accounts, it may separate direct costs from operating expenses.' },
  { question: 'What is the difference between gross profit and net income?', answer: 'Gross profit is income less cost of goods sold, when those accounts are used. Net income also reflects operating and other income or expenses recorded for the period. Your account setup affects the layout.' },
  { question: 'Why does my profit change when I select cash versus accrual?', answer: 'The two methods can recognize payments, invoices and bills in different periods. For example, an unpaid invoice can affect an accrual-basis report before the cash-basis report reflects payment. Your accountant should advise which method is appropriate for your circumstances.' },
  { question: 'Why is QuickBooks showing profit when my bank account is low?', answer: 'Profit and cash are different measures. Owner draws, debt principal, equipment purchases, unpaid invoices and timing differences can all affect bank balances without appearing as the same expense on a Profit and Loss report.' },
  { question: 'Can I compare this month with last month?', answer: 'Yes. QuickBooks Online includes period and comparison options, though the available controls depend on the report view and subscription. Compare full months when possible and investigate large differences before drawing conclusions.' },
  { question: 'Do I need to reconcile accounts before trusting the report?', answer: 'Reconciliation is a useful control because it checks recorded activity against bank or card statements. It is not a guarantee that every transaction is classified properly, but unreconciled or incomplete books reduce confidence in the report.' },
  { question: 'Can Dietz Bookkeeping help me review these numbers?', answer: 'We can discuss bookkeeping cleanup, reconciliations and financial reporting within an agreed scope, remotely for small businesses across the United States. Tax advice and filing remain separate.' }
];

export default function QuickBooksProfitLossGuide() {
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
              <span aria-current="page">QuickBooks Profit and Loss report</span>
            </nav>
            <p className="text-sm font-bold tracking-wide text-blue-700 mb-4">SMALL BUSINESS BOOKKEEPING GUIDE</p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-slate-900 mb-6">How to read a Profit and Loss report in QuickBooks Online</h1>
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-3xl mb-6">
              Understand what income, direct costs, operating expenses and net profit mean—then learn how to compare reporting periods and spot questions worth investigating.
            </p>
            <p className="text-sm text-slate-600">By Bryan Dietz · Dietz Bookkeeping · Based in Tampa, serving businesses nationwide</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#example-report" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-white font-semibold hover:bg-blue-700">See a sample report <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
              <Link to="/tampa-financial-reporting/" className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-900 hover:bg-slate-50">Explore reporting support</Link>
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <section className="py-12 sm:py-14 border-b border-slate-200" aria-labelledby="answer-heading">
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-7 sm:p-9">
              <h2 id="answer-heading" className="text-2xl font-bold text-slate-900 mb-4">The short answer</h2>
              <p className="text-slate-700 leading-relaxed">
                A Profit and Loss report (also called an income statement) shows the revenue and expenses recorded during a chosen period. Revenue minus the costs and expenses recognized for that period produces the reported profit or loss. It is <strong>not</strong> a statement of how much cash you have in the bank.
              </p>
              <p className="text-sm text-slate-600 mt-4">Your result depends on complete, properly classified bookkeeping records, the date range and whether the report uses cash or accrual accounting.</p>
            </div>
          </section>

          <section className="py-12 sm:py-14 border-b border-slate-200" aria-labelledby="sections-heading">
            <div className="flex items-center gap-3 mb-5"><BarChart3 className="h-7 w-7 text-blue-700" aria-hidden="true" /><h2 id="sections-heading" className="text-3xl font-bold text-slate-900">The main sections of a P&amp;L report</h2></div>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { title: 'Income or revenue', text: 'Sales or service income recorded for the selected period. For a cleaning business, that could be customer cleaning services; for a contractor, it could be job revenue.' },
                { title: 'Cost of goods sold (when applicable)', text: 'Direct costs categorized into cost-of-sales accounts. Some service businesses use these accounts for job-specific materials or direct labor; others use a different account structure.' },
                { title: 'Gross profit', text: 'Income less cost of goods sold. If direct costs are omitted or classified inconsistently, gross profit and gross margin may not be comparable across periods.' },
                { title: 'Operating expenses and net income', text: 'Expenses such as software, rent, insurance or marketing help determine the period’s net income. Other income and expense categories may also appear depending on the business.' }
              ].map(item => <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6"><h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3><p className="text-slate-700 leading-relaxed">{item.text}</p></div>)}
            </div>
          </section>

          <section id="example-report" className="py-12 sm:py-14 border-b border-slate-200 scroll-mt-28" aria-labelledby="example-heading">
            <h2 id="example-heading" className="text-3xl font-bold text-slate-900 mb-5">Example: a small service company’s monthly P&amp;L</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Imagine a small company reviewing one complete month. It recorded $25,000 in revenue, $5,000 in direct job costs and $13,000 in operating expenses. The simplified report would look like this:
            </p>
            <div className="rounded-2xl border border-slate-200 overflow-hidden">
              <div className="bg-slate-900 px-6 py-5 text-white">
                <p className="text-xs font-bold tracking-wide text-slate-300 mb-1">ILLUSTRATIVE REPORT · NOT REAL CLIENT DATA</p>
                <h3 className="text-xl font-bold">Profit &amp; Loss — Example Month</h3>
              </div>
              <dl className="divide-y divide-slate-200">
                {reportLines.map(item => (
                  <div key={item.label} className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 justify-between p-5 sm:px-6 ${item.important ? 'bg-blue-50' : 'bg-white'}`}>
                    <div><dt className={`text-slate-900 ${item.important ? 'font-bold' : 'font-semibold'}`}>{item.label}</dt><p className="text-sm text-slate-600 mt-1">{item.detail}</p></div>
                    <dd className={`text-xl tabular-nums whitespace-nowrap ${item.important ? 'text-blue-800 font-bold' : 'text-slate-900 font-semibold'}`}>{item.amount}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <p className="text-slate-700 leading-relaxed mt-6"><strong>What the numbers suggest:</strong> The company has $20,000 of gross profit after direct job costs, and reports $7,000 net income after its illustrated operating expenses. These totals alone do not tell you what customers still owe, how much debt is due, or how much cash is available.</p>
            <p className="text-sm text-slate-600 mt-3">Simplified hypothetical example. A real Profit and Loss report may show additional categories and different account groupings. Classification and tax treatment require review of the actual records.</p>
          </section>

          <section className="py-12 sm:py-14 border-b border-slate-200" aria-labelledby="cash-heading">
            <h2 id="cash-heading" className="text-3xl font-bold text-slate-900 mb-5">Cash basis versus accrual basis</h2>
            <p className="text-slate-700 leading-relaxed mb-6">Two reports for the same month can show different results because of when income and expenses are recognized. QuickBooks Online allows cash and accrual views of many reports, but your tax professional or accountant should advise which method is appropriate for your business.</p>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl border border-slate-200 p-6"><h3 className="text-xl font-bold text-slate-900 mb-3">Cash basis</h3><p className="text-slate-700 leading-relaxed">Generally reflects amounts when money is received or paid. An outstanding customer invoice may not be reflected as income until a payment is received.</p></div>
              <div className="rounded-2xl border border-slate-200 p-6"><h3 className="text-xl font-bold text-slate-900 mb-3">Accrual basis</h3><p className="text-slate-700 leading-relaxed">Generally reflects income when earned and expenses when incurred, even if the related payment has not been received or made.</p></div>
            </div>
            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-6"><p className="text-slate-700 leading-relaxed"><strong>Simple example:</strong> A $2,000 invoice issued in September and paid in October may appear in September’s accrual-basis revenue but October’s cash-basis revenue. Exact results depend on how the invoice and payment were entered.</p></div>
            <p className="mt-4 text-sm text-slate-600">Changing the report display method does not itself change your business’s required tax accounting method.</p>
          </section>

          <section className="py-12 sm:py-14 border-b border-slate-200" aria-labelledby="how-heading">
            <div className="flex gap-3 items-center mb-5"><ClipboardCheck className="h-7 w-7 text-blue-700" aria-hidden="true" /><h2 id="how-heading" className="text-3xl font-bold text-slate-900">How to run and review the report in QuickBooks Online</h2></div>
            <p className="text-slate-700 leading-relaxed mb-8">Based on current <a href="https://quickbooks.intuit.com/learn-support/en-us/help-article/product-setup/use-reports-center-categories-insights-information/L2KcVzxB7_US_en_US" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline underline-offset-4 font-semibold">Intuit reporting instructions</a>. Reporting views and available customization controls differ by plan.</p>
            <ol className="space-y-5">{steps.map((item, i) => <li key={item.title} className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7"><span className="shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-700">{i + 1}</span><div><h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3><p className="text-slate-700 leading-relaxed">{item.text}</p></div></li>)}</ol>
          </section>

          <section className="py-12 sm:py-14 border-b border-slate-200" aria-labelledby="mistakes-heading">
            <div className="flex items-center gap-3 mb-5"><FileWarning className="h-7 w-7 text-blue-700" aria-hidden="true" /><h2 id="mistakes-heading" className="text-3xl font-bold text-slate-900">Common reasons a P&amp;L can be misleading</h2></div>
            <div className="grid md:grid-cols-2 gap-5">{pitfalls.map(item => <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6"><h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3><p className="text-slate-700 leading-relaxed">{item.text}</p></div>)}</div>
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 mt-7"><p className="text-slate-700 leading-relaxed"><strong>Before you rely on the report:</strong> Compare relevant bank and card statements, confirm the selected date range and accounting method, review unusual categories, and resolve known missing or duplicate activity. If older months are incomplete, our <Link to="/quickbooks-overdue-bookkeeping-cleanup/" className="text-blue-700 font-semibold underline underline-offset-4">overdue bookkeeping cleanup guide</Link> explains where to begin.</p></div>
          </section>

          <section className="py-12 sm:py-14 border-b border-slate-200" aria-labelledby="questions-heading">
            <h2 id="questions-heading" className="text-3xl font-bold text-slate-900 mb-6">Questions to ask when reviewing monthly results</h2>
            <ul className="space-y-4">{[
              'Did revenue change because of actual sales activity, one large project, or a timing difference?',
              'Are direct job costs and routine operating expenses categorized consistently?',
              'Are there one-time expenses or missing transactions that make this month look unusual?',
              'How does net income compare with previous complete months?',
              'What questions should the business owner, bookkeeper or tax professional review next?'
            ].map(text => <li key={text} className="flex gap-3 text-slate-700 leading-relaxed"><CheckCircle2 className="h-5 w-5 text-blue-600 mt-1 shrink-0" aria-hidden="true" /><span>{text}</span></li>)}</ul>
          </section>

          <section className="py-12 sm:py-14 border-b border-slate-200" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-3xl font-bold text-slate-900 mb-7">QuickBooks Profit and Loss FAQs</h2>
            <div className="divide-y divide-slate-200">{faqs.map(faq => <details key={faq.question} className="py-5"><summary className="cursor-pointer text-lg font-semibold text-slate-900 pr-5">{faq.question}</summary><p className="mt-3 text-slate-700 leading-relaxed">{faq.answer}</p></details>)}</div>
          </section>

          <section className="py-12 sm:py-14" aria-labelledby="sources-heading">
            <div className="flex items-center gap-3 mb-4"><BookOpen className="h-6 w-6 text-blue-700" aria-hidden="true" /><h2 id="sources-heading" className="text-2xl font-bold text-slate-900">Official QuickBooks references</h2></div>
            <p className="text-slate-700 mb-4">These instructions were checked against Intuit’s current support materials. Follow the controls shown in your account and confirm accounting-specific questions with a qualified professional.</p>
            <ul className="space-y-3 list-disc pl-6 text-blue-700">
              <li><a href="https://quickbooks.intuit.com/learn-support/en-us/help-article/product-setup/use-reports-center-categories-insights-information/L2KcVzxB7_US_en_US" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">How to run and customize reports in QuickBooks Online</a></li>
              <li><a href="https://quickbooks.intuit.com/learn-support/en-us/help-article/customize-reports/customize-reports-quickbooks-online/L0gKmSawG_US_en_US" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">Customize reports in QuickBooks Online</a></li>
              <li><a href="https://quickbooks.intuit.com/learn-support/en-us/help-article/product-preferences/choose-cash-accrual-accounting-methods-reports/L64yocn6B_US_en_US" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">Cash versus accrual accounting methods</a></li>
            </ul>
            <p className="text-sm text-slate-500 mt-6">Prepared by Dietz Bookkeeping. QuickBooks is a trademark of Intuit Inc. This independent educational resource does not imply Intuit endorsement, nor does it provide tax advice.</p>
          </section>
        </div>

        <section className="bg-slate-900 text-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-5">Want bookkeeping reports you can actually use?</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">Dietz Bookkeeping discusses monthly bookkeeping, reconciliations and Profit and Loss report review with small businesses across the United States. We’ll review your goals and records before proposing a scope.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/schedule/" className="rounded-xl bg-blue-600 px-7 py-3.5 font-semibold hover:bg-blue-500">Book a Free Consultation</Link>
              <Link to="/estimate/" className="rounded-xl border border-slate-500 px-7 py-3.5 font-semibold hover:bg-slate-800">Request a Bookkeeping Estimate</Link>
            </div>
            <p className="text-sm text-slate-400 mt-6">Based in Tampa · Remote bookkeeping support nationwide</p>
          </div>
        </section>
      </article>
    </Layout>
  );
}
