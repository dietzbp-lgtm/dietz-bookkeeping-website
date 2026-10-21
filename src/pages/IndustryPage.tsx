import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Layout from '../components/Layout';

type Industry = 'cleaning' | 'contractors';
type Topic = { heading: string; text: string };
type IndustryContent = {
  label: string;
  heading: string;
  introduction: string;
  industryContext: string;
  situations: Topic[];
  records: Topic[];
  faqs: { question: string; answer: string }[];
  related: { to: string; label: string }[];
};

const industries: Record<Industry, IndustryContent> = {
  cleaning: {
    label: 'BOOKKEEPING FOR CLEANING BUSINESSES · AVAILABLE NATIONWIDE',
    heading: 'Bookkeeping for Cleaning Businesses',
    introduction: 'Organize recurring cleaning revenue, deposits, supply purchases and business expenses without losing track of the work behind each visit. Dietz Bookkeeping supports owners of residential cleaning services and commercial cleaning companies remotely throughout the United States.',
    industryContext: 'After running a cleaning business himself, Bryan understands the rhythm of scheduled visits, repeat customers, team coordination, supply runs and payments that arrive at different times. That perspective helps us ask useful questions about your records. We review your accounting setup before agreeing on the services you need.',
    situations: [
      { heading: 'Recurring visits and one-time jobs', text: 'Make it easier to review income from ongoing residential or commercial cleaning arrangements alongside occasional deep cleans or one-time appointments.' },
      { heading: 'Deposits and customer payments', text: 'Compare recorded invoices and payments with bank activity. Identify unmatched deposits, unpaid invoices and questions about payment timing for your review.' },
      { heading: 'Supplies, equipment and travel', text: 'Keep records for cleaning products, consumables, equipment and business travel organized in categories suited to your accounts. Your tax professional determines tax treatment.' },
      { heading: 'Crew and contractor records', text: 'Reconcile recorded payroll-related activity or independent-contractor payments when they are part of the agreed bookkeeping scope. Payroll processing and filing responsibilities are separate decisions.' }
    ],
    records: [
      { heading: 'Monthly transaction organization', text: 'Categorize the business activity shown in your source records and ask about items that are unclear.' },
      { heading: 'Bank and card reconciliation', text: 'Compare included bank and credit card accounts with their statements and flag differences for follow-up.' },
      { heading: 'Reports you can discuss', text: 'Review the agreed profit-and-loss and balance-sheet reports to understand recorded income, costs and balances.' }
    ],
    faqs: [
      { question: 'Can a cleaning business use remote bookkeeping?', answer: 'Yes. We work remotely throughout the United States. We review your current software, arrange appropriate access and discuss statements and records during onboarding.' },
      { question: 'Can you help if my cleaning company has months of unfinished books?', answer: 'We can first assess the backlog and provide a separate cleanup scope. Ongoing monthly bookkeeping is discussed once the starting records are understood.' },
      { question: 'Can you track recurring customers and unpaid invoices?', answer: 'We can review accounts receivable and invoice tracking as part of your proposed scope. The process depends on your invoicing software and the information you provide.' },
      { question: 'Do you handle cleaning staff payroll or taxes?', answer: 'We can discuss payroll-record coordination with your existing provider. Payroll processing, tax returns and tax advice are not automatically included in monthly bookkeeping; responsibilities are clarified in the proposal.' },
      { question: 'How is pricing determined?', answer: 'We review transaction volume, the number of accounts, the state of your records, and whether extra invoicing, bill or payroll support is needed before preparing an estimate.' }
    ],
    related: [
      { to: '/monthly-bookkeeping', label: 'Online monthly bookkeeping' },
      { to: '/tampa-cleanup-bookkeeping', label: 'Cleanup and catch-up bookkeeping' },
      { to: '/tampa-accounts-receivable', label: 'Accounts receivable support' }
    ]
  },
  contractors: {
    label: 'BOOKKEEPING FOR CONTRACTORS & HANDYMEN · AVAILABLE NATIONWIDE',
    heading: 'Bookkeeping for Contractors and Handyman Businesses',
    introduction: 'Organize customer invoices, material purchases, vendor bills and business expenses while managing a busy schedule of service calls and projects. Dietz Bookkeeping offers remote bookkeeping support for small contractors and handyman businesses across the United States.',
    industryContext: 'Bryan has owned and operated a handyman business. He understands estimate follow-ups, trips for materials, customer deposits, subcontractor bills and the challenge of tracking costs across multiple jobs. We use that operational perspective to review your existing books and agree on practical bookkeeping work; job-level reporting depends on your software and service scope.',
    situations: [
      { heading: 'Customer invoices and deposits', text: 'Review how estimates become invoices and how recorded deposits, progress payments and final payments are matched with the bank activity.' },
      { heading: 'Material receipts and reimbursements', text: 'Keep receipts for job materials, equipment and supply purchases organized. We can discuss separating materials you purchase for a customer from other business expenses where the records support it.' },
      { heading: 'Vendors and subcontractors', text: 'Track recorded vendor bills and subcontractor payments and identify items still awaiting review. Tax forms, payroll and payment authorization are separate responsibilities unless specifically agreed.' },
      { heading: 'Looking at costs by job', text: 'Discuss whether your accounting software and available records support tagging revenue, materials and other costs to individual jobs. Job costing is optional and requires an agreed setup and scope.' }
    ],
    records: [
      { heading: 'Clearer transaction records', text: 'Categorize recorded income and expenses and follow up on unclear business purchases or transfers.' },
      { heading: 'Reconciled business accounts', text: 'Compare the accounts included in your engagement with bank and credit card statements and investigate differences.' },
      { heading: 'Monthly reporting and review', text: 'Review agreed reports and ask useful questions about recorded expenses, outstanding invoices and account balances.' }
    ],
    faqs: [
      { question: 'Do you only work with Tampa-area contractors?', answer: 'No. We are based in Tampa, Florida, and provide remote bookkeeping support to U.S. small businesses. Local Tampa meetings can be arranged by appointment.' },
      { question: 'Can you tell which jobs were profitable?', answer: 'Potentially, if the source records and accounting software support job-level tracking. We would first discuss whether that setup is appropriate and include it only in an agreed scope.' },
      { question: 'What happens if I mix personal and business purchases?', answer: 'We discuss how those transactions were recorded, identify unclear items and ask for your review. Proper tax classification should be confirmed with your tax professional.' },
      { question: 'Can you organize months of unrecorded receipts?', answer: 'We can assess missing statements, receipts and reconciliation gaps, then propose cleanup work separately from recurring monthly bookkeeping.' },
      { question: 'Are tax returns, permits, sales tax or payroll included?', answer: 'No such services are assumed. Our bookkeeping service focuses on the agreed accounting records and reports. Your tax professional, payroll provider and other qualified professionals handle their respective responsibilities unless a specific additional service is agreed.' }
    ],
    related: [
      { to: '/monthly-bookkeeping', label: 'Online monthly bookkeeping' },
      { to: '/tampa-bank-reconciliation', label: 'Bank reconciliation' },
      { to: '/tampa-accounts-payable', label: 'Accounts payable support' }
    ]
  }
};

export default function IndustryPage({ industry }: { industry: Industry }) {
  const page = industries[industry];
  return (
    <Layout>
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <p className="text-xs sm:text-sm font-bold tracking-wider text-blue-700 mb-5">{page.label}</p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-slate-900 mb-6">{page.heading}</h1>
          <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-4xl mb-8">{page.introduction}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/schedule" className="bg-blue-600 text-white text-center font-semibold px-6 py-3.5 rounded-xl hover:bg-blue-700 transition-colors">Book a Free Consultation</Link>
            <Link to="/estimate" className="bg-white border border-slate-300 text-slate-900 text-center font-semibold px-6 py-3.5 rounded-xl hover:border-blue-500 transition-colors">Request an Estimate</Link>
          </div>
          <p className="mt-5 text-sm text-slate-600">Based in Tampa, Florida · Remote bookkeeping services across the United States</p>
        </div>
      </section>

      <section className="py-16 bg-white" aria-labelledby="industry-challenges">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 id="industry-challenges" className="text-3xl font-bold text-slate-900 mb-4">Bookkeeping challenges we can help you organize</h2>
          <p className="text-slate-600 text-lg max-w-4xl mb-9">{page.industryContext}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {page.situations.map(item => (
              <article key={item.heading} className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-7">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.heading}</h3>
                <p className="text-slate-700 leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50" aria-labelledby="industry-support">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 id="industry-support" className="text-3xl font-bold text-slate-900 mb-4">What the bookkeeping process can include</h2>
          <p className="text-slate-600 max-w-4xl mb-8">The exact accounts, reporting schedule and any extra services are defined in your personalized proposal. We do not assume your existing books are complete or that every service is included.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {page.records.map(item => (
              <article key={item.heading} className="rounded-2xl bg-white border border-slate-200 p-6">
                <CheckCircle2 aria-hidden="true" className="text-blue-700 w-7 h-7 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.heading}</h3>
                <p className="text-slate-600 leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="rounded-2xl bg-blue-50 border border-blue-100 p-7 mt-9">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Getting started remotely</h3>
            <p className="text-slate-700 leading-relaxed">Start with a consultation about your software, number of accounts, transaction volume and any backlog. We discuss invited-user access or other secure ways to coordinate records; never send passwords or banking credentials through a website inquiry form. You'll receive an agreed scope before work starts.</p>
            <Link to="/monthly-bookkeeping" className="inline-flex items-center gap-2 font-semibold text-blue-700 underline underline-offset-4 mt-5">Explore our monthly bookkeeping process <ArrowRight aria-hidden="true" className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" aria-labelledby="industry-faq">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h2 id="industry-faq" className="text-3xl font-bold text-slate-900 mb-6">Frequently asked questions</h2>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {page.faqs.map(item => (
              <details key={item.question} className="py-5">
                <summary className="cursor-pointer font-semibold text-slate-900">{item.question}</summary>
                <p className="mt-3 text-slate-700 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mt-11 mb-5">Related bookkeeping services</h2>
          <ul className="space-y-3">
            {page.related.map(item => (
              <li key={item.to}>
                <Link to={item.to} className="inline-flex gap-2 items-center text-blue-700 font-semibold underline underline-offset-4">{item.label} <ArrowRight aria-hidden="true" className="w-4 h-4" /></Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-5">A practical starting point for your books</h2>
          <p className="text-slate-200 text-lg mb-8">Tell us where your records stand and which tasks take the most time. We'll review your needs and explain the next steps before proposing work.</p>
          <Link to="/schedule" className="inline-flex items-center justify-center bg-white text-slate-900 rounded-xl font-semibold px-7 py-3.5 hover:bg-blue-50 transition-colors">Schedule a Free Consultation</Link>
        </div>
      </section>
    </Layout>
  );
}
