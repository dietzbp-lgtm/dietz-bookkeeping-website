import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CheckCircle2, ClipboardCheck, FileCheck2, MessagesSquare, ShieldCheck } from 'lucide-react';
import Layout from '../components/Layout';

const workflows = [
  { title: 'Review how transactions are recorded', detail: 'Look at your existing QuickBooks Online setup, connected accounts and available source records. We discuss unclear categories, transfers and uncategorized activity instead of assuming bank-feed suggestions are correct.' },
  { title: 'Reconcile bank and credit card accounts', detail: 'Compare agreed QuickBooks balances and transactions against bank and card statements for each period. Identify unmatched items and request supporting information as needed.' },
  { title: 'Prepare useful monthly reports', detail: 'Review profit-and-loss and balance-sheet reports using the records included in your scope. We highlight missing information or unresolved balances before discussing what the reports mean.' },
  { title: 'Catch up on older bookkeeping', detail: 'If past periods are incomplete, we first assess the months, accounts and documents involved. Historical cleanup is proposed separately from ongoing monthly support.' },
];

const steps = [
  { number: '01', title: 'Tell us how you use QuickBooks', detail: 'We discuss your business, bookkeeping challenges, transaction volume, connected accounts and the condition of your records.' },
  { number: '02', title: 'Agree on access and scope', detail: 'We discuss a written scope and price. When applicable, you can invite the firm through QuickBooks Online accountant access rather than sharing a password.' },
  { number: '03', title: 'Work through the records', detail: 'We review agreed transactions, statements and questions, then share reports or next steps at the frequency included in your engagement.' },
];

const faqs = [
  { question: 'Can Dietz Bookkeeping work with my business outside Florida?', answer: 'Yes. We are based in Tampa and provide remote bookkeeping support to businesses throughout the United States. Tampa meetings are available by appointment.' },
  { question: 'Do I need to share my QuickBooks password?', answer: 'No. We discuss the appropriate invited-user or accountant-access process and confirm the invitation details directly. Please do not submit passwords, bank credentials or sensitive records through a public website form.' },
  { question: 'Can you help if several months of QuickBooks bookkeeping are behind?', answer: 'Yes, we can assess the backlog and propose a separate cleanup scope based on the accounts, months, missing documents and unresolved transactions involved.' },
  { question: 'Do you offer QuickBooks training or setup?', answer: 'We can discuss QuickBooks Online guidance and training as a separate service, based on your current file and goals. Software setup, migration and integrations are not assumed to be included in monthly bookkeeping.' },
  { question: 'Does bookkeeping include tax filing or payroll processing?', answer: 'No. We can organize bookkeeping records for your tax professional and discuss payroll-related bookkeeping coordination if needed. Tax advice, return preparation, payroll processing and filing are separate responsibilities unless expressly agreed with the appropriate professional or provider.' },
  { question: 'How much does QuickBooks Online bookkeeping cost?', answer: 'Pricing depends on the transaction volume, number of accounts, condition of the books and additional support you need. We review those details and provide a scope-based estimate before work begins. QuickBooks software subscriptions are separate.' },
];

export default function QuickBooksOnlineBookkeeping() {
  return (
    <Layout>
      <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-bold tracking-wider text-blue-700 mb-5">QUICKBOOKS ONLINE BOOKKEEPING · AVAILABLE NATIONWIDE</p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight leading-tight text-slate-900 mb-6">QuickBooks Online bookkeeping for small businesses</h1>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">Using QuickBooks Online but still unsure whether your transactions, account balances and reports are organized correctly? Dietz Bookkeeping can help you review your books, reconcile accounts and build a manageable bookkeeping routine.</p>
            <p className="text-slate-600 leading-relaxed mb-8">Work directly with Bryan Dietz from Tampa, Florida. We serve small businesses remotely across the United States and define each project around your actual records and needs.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/schedule/" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-white font-semibold hover:bg-blue-700">Book a Free Consultation <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
              <Link to="/estimate/" className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-slate-900 font-semibold hover:bg-slate-50">Request an Estimate</Link>
            </div>
            <p className="text-sm text-slate-500 mt-5">Independent bookkeeping support · No software subscription included · Local Tampa appointments by arrangement</p>
          </div>
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 p-7 sm:p-9">
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-2xl bg-blue-100 p-3 text-blue-700"><ClipboardCheck className="h-7 w-7" aria-hidden="true" /></div>
              <div><p className="text-sm font-semibold text-blue-700">YOUR BOOKKEEPING ROUTINE</p><h2 className="text-2xl font-bold text-slate-900">Clearer records, month by month</h2></div>
            </div>
            <ul className="space-y-5">
              {['Review how income and expenses are categorized', 'Reconcile the agreed bank and card accounts', 'Identify missing records and unresolved differences', 'Discuss useful financial reports and next steps'].map(item => (
                <li key={item} className="flex gap-3 text-slate-700"><CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" aria-hidden="true" /><span>{item}</span></li>
              ))}
            </ul>
            <p className="mt-7 pt-5 border-t border-slate-200 text-sm text-slate-600">QuickBooks can import and organize activity, but the accuracy of your books still depends on complete records, correct classifications and reconciliation.</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-bold tracking-wide text-blue-700 mb-3">WHAT WE CAN DISCUSS</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Bookkeeping support inside your existing QuickBooks workflow</h2>
            <p className="text-lg text-slate-600">We start by understanding your current file rather than promising a one-size-fits-all package. Exact services and reporting frequency are agreed before work begins.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {workflows.map((item, index) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
                <span className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-blue-100 text-blue-700 font-bold mb-5">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.detail}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-blue-700 font-semibold">
            <Link to="/monthly-bookkeeping/" className="underline underline-offset-4">Learn about monthly bookkeeping</Link>
            <Link to="/tampa-cleanup-bookkeeping/" className="underline underline-offset-4">Explore catch-up and cleanup</Link>
            <Link to="/resources/" className="underline underline-offset-4">See bookkeeping resources</Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-sm font-bold tracking-wide text-blue-700 mb-3">WORKING TOGETHER</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5">A practical starting process</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">You do not need to be in Tampa to get personal help. The first step is a conversation about which records are ready and what needs attention.</p>
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
              <div className="flex gap-3 items-start mb-3"><ShieldCheck className="h-6 w-6 text-blue-700 shrink-0" aria-hidden="true" /><h3 className="text-lg font-bold text-slate-900">A safer way to share access</h3></div>
              <p className="text-slate-700 leading-relaxed">When invited accountant access is appropriate, QuickBooks Online provides a way to grant access without sending your password. Confirm the invitation details with us first.</p>
              <a href="https://quickbooks.intuit.com/learn-support/en-us/help-article/account-management/managing-accountant-users-quickbooks-online/L2AcdYvHw_US_en_US" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 font-semibold text-blue-700 underline underline-offset-4">Read Intuit's accountant-access instructions <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
            </div>
          </div>
          <ol className="space-y-4">
            {steps.map(step => (
              <li key={step.number} className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6">
                <span className="text-2xl font-bold text-blue-700 shrink-0">{step.number}</span>
                <div><h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3><p className="text-slate-600 leading-relaxed">{step.detail}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-3 gap-6">
          <article className="border border-slate-200 rounded-2xl p-7">
            <FileCheck2 className="h-8 w-8 text-blue-700 mb-4" aria-hidden="true" />
            <h2 className="text-xl font-bold text-slate-900 mb-3">Monthly support</h2>
            <p className="text-slate-600 mb-4">For businesses seeking consistent transaction organization, reconciliations and reports.</p>
            <Link to="/monthly-bookkeeping/" className="text-blue-700 font-semibold underline underline-offset-4">Monthly bookkeeping details</Link>
          </article>
          <article className="border border-slate-200 rounded-2xl p-7">
            <BookOpen className="h-8 w-8 text-blue-700 mb-4" aria-hidden="true" />
            <h2 className="text-xl font-bold text-slate-900 mb-3">Cleanup and catch-up</h2>
            <p className="text-slate-600 mb-4">For historical periods with missing entries, unreviewed transactions or unreconciled balances.</p>
            <Link to="/tampa-cleanup-bookkeeping/" className="text-blue-700 font-semibold underline underline-offset-4">Cleanup service details</Link>
            <p className="mt-3"><Link to="/quickbooks-overdue-bookkeeping-cleanup/" className="text-blue-700 font-semibold underline underline-offset-4">Read our overdue QuickBooks cleanup guide</Link></p>
          </article>
          <article className="border border-slate-200 rounded-2xl p-7">
            <MessagesSquare className="h-8 w-8 text-blue-700 mb-4" aria-hidden="true" />
            <h2 className="text-xl font-bold text-slate-900 mb-3">Guidance and training</h2>
            <p className="text-slate-600 mb-4">Discuss QuickBooks Online questions and whether a separate coaching or training scope fits your needs.</p>
            <Link to="/schedule/" className="text-blue-700 font-semibold underline underline-offset-4">Talk through your setup</Link>
          </article>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">QuickBooks Online bookkeeping questions</h2>
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 mb-8">
            <p className="font-semibold text-slate-900 mb-2">Trying to reconcile your accounts yourself?</p>
            <p className="text-slate-700 mb-3">Our original guide explains the monthly bank reconciliation process and what to check when QuickBooks does not match your statement.</p>
            <Link to="/quickbooks-bank-reconciliation-guide/" className="font-semibold text-blue-700 underline underline-offset-4">Read the QuickBooks Online bank reconciliation guide</Link>
            <p className="mt-3"><Link to="/quickbooks-profit-and-loss-report/" className="font-semibold text-blue-700 underline underline-offset-4">Learn how to read your QuickBooks Profit and Loss report</Link></p>
          </div>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map(item => <details key={item.question} className="py-5"><summary className="cursor-pointer font-semibold text-slate-900 pr-5">{item.question}</summary><p className="mt-3 text-slate-700 leading-relaxed">{item.answer}</p></details>)}
          </div>
          <p className="mt-6 text-sm text-slate-500">QuickBooks is a trademark of Intuit Inc. Dietz Bookkeeping is an independent bookkeeping business. Software access and subscriptions are subject to the client's QuickBooks account and terms.</p>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-5">Let's make your QuickBooks records easier to work with.</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">Tell us which QuickBooks Online tasks are taking up your time. We'll review the current situation and discuss a realistic scope before any work begins.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/schedule/" className="rounded-xl bg-blue-600 hover:bg-blue-500 px-7 py-3.5 font-semibold">Book a Free Consultation</Link>
            <Link to="/estimate/" className="rounded-xl border border-slate-500 hover:bg-slate-800 px-7 py-3.5 font-semibold">Request an Estimate</Link>
          </div>
          <p className="text-sm text-slate-400 mt-6">Work directly with Bryan Dietz · Tampa-based · Remote service nationwide · <Link to="/about/" className="underline underline-offset-4">About our firm</Link></p>
        </div>
      </section>
    </Layout>
  );
}
