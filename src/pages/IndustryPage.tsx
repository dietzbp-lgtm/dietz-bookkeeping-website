import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Layout from '../components/Layout';

type Industry = 'cleaning' | 'contractors' | 'realEstate';
type Topic = { heading: string; text: string };
type IndustryContent = {
  label: string;
  heading: string;
  introduction: string;
  industryContext: string;
  image: { src: string; alt: string; width: number; height: number };
  situations: Topic[];
  records: Topic[];
  faqs: { question: string; answer: string }[];
  related: { to: string; label: string }[];
};

const industries: Record<Industry, IndustryContent> = {
  cleaning: {
    image: { src: '/images/industry-cleaning.webp', alt: 'Illustrative scene of a professional cleaner wiping a kitchen counter', width: 217, height: 275 },
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
    image: { src: '/images/industry-contractors.webp', alt: 'Illustrative scene of a contractor marking measurements on a woodworking project', width: 204, height: 276 },
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
  },
  realEstate: {
    image: { src: '/images/industry-real-estate.webp', alt: 'Illustrative scene of a real estate professional reviewing papers with a laptop and a model house', width: 203, height: 275 },
    label: 'BOOKKEEPING FOR REAL ESTATE AGENTS · AVAILABLE NATIONWIDE',
    heading: 'Bookkeeping for Real Estate Agents',
    introduction: 'Keep commission deposits, brokerage statements and business expenses organized between closings. Dietz Bookkeeping offers remote bookkeeping support for independent real estate agents and small real estate teams throughout the United States.',
    industryContext: 'Real estate income does not always arrive on a monthly schedule, and the expenses behind a closing can add up over time. Whether you work independently or as part of a brokerage, we begin by reviewing your accounts, commission documentation and accounting setup. We tailor the bookkeeping scope to the records your business actually maintains.',
    situations: [
      { heading: 'Commission income and brokerage statements', text: 'Organize recorded commission payments and compare deposits with settlement or brokerage statements. Flag differences, splits and fees needing your review; the accounting treatment depends on your records.' },
      { heading: 'Marketing, subscriptions and lead generation', text: 'Keep business expenses such as website fees, advertising, listing photography, professional dues and software subscriptions organized in sensible categories.' },
      { heading: 'Driving, showings and travel records', text: 'Organize documented business-related vehicle and travel expenses. Mileage logs and tax deduction eligibility are your responsibility to discuss with your tax professional.' },
      { heading: 'Income between closings', text: 'Review monthly expenses and recorded revenue even when closing schedules vary. Financial reports can support planning discussions but do not replace financial or tax advice.' }
    ],
    records: [
      { heading: 'Monthly income and expense organization', text: 'Categorize the commissions and business expenses reflected in the records you provide and ask about missing or unclear transactions.' },
      { heading: 'Bank and card account reconciliation', text: 'Compare included business bank and credit card accounts with monthly statements and investigate discrepancies.' },
      { heading: 'Clear reports for your business', text: 'Review agreed profit-and-loss and balance-sheet reports to understand recorded income, spending and balances.' }
    ],
    faqs: [
      { question: 'Can you work with real estate agents outside Florida?', answer: 'Yes. We provide bookkeeping support remotely across the United States. Tampa appointments can be arranged in advance. The initial consultation covers software, accounts and how we communicate securely.' },
      { question: 'Can you track commissions when a brokerage deducts fees or splits?', answer: 'We can review the commission statements and bank deposits available to you, then discuss an appropriate bookkeeping workflow. Your engagement scope and the completeness of brokerage records determine what can be tracked.' },
      { question: 'Do you handle mileage deductions and quarterly estimated taxes?', answer: 'We can organize records you provide for business-related expenses. Mileage tax treatment, estimated-tax calculations, tax return filing and tax advice should be addressed with your qualified tax professional.' },
      { question: 'What if my business has several months of unreconciled activity?', answer: 'We can review the backlog and propose a separate cleanup project. The monthly service scope and start date are discussed after we assess your existing records.' },
      { question: 'Do I need special real estate accounting software?', answer: 'Tell us which accounting tools you already use and how you receive brokerage statements. We review whether the available records support the work requested before recommending an agreed bookkeeping process.' }
    ],
    related: [
      { to: '/monthly-bookkeeping', label: 'Online monthly bookkeeping' },
      { to: '/tampa-bank-reconciliation', label: 'Bank and credit card reconciliation' },
      { to: '/tampa-cleanup-bookkeeping', label: 'Bookkeeping cleanup and catch-up' }
    ]
  }
};

export default function IndustryPage({ industry }: { industry: Industry }) {
  const page = industries[industry];
  return (
    <Layout>
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[minmax(0,1fr)_minmax(245px,370px)] gap-8 lg:gap-14 items-center">
          <div>
            <p className="text-xs sm:text-sm font-bold tracking-wider text-blue-700 mb-5">{page.label}</p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-slate-900 mb-6">{page.heading}</h1>
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-3xl mb-8">{page.introduction}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/schedule" className="bg-blue-600 text-white text-center font-semibold px-6 py-3.5 rounded-xl hover:bg-blue-700 transition-colors">Book a Free Consultation</Link>
              <Link to="/estimate" className="bg-white border border-slate-300 text-slate-900 text-center font-semibold px-6 py-3.5 rounded-xl hover:border-blue-500 transition-colors">Request an Estimate</Link>
            </div>
            <p className="mt-5 text-sm text-slate-600">Based in Tampa, Florida · Remote bookkeeping services across the United States</p>
          </div>
          <figure className="max-w-[340px] sm:max-w-[370px] w-full mx-auto lg:mr-0 lg:ml-auto">
            <div className="rounded-3xl overflow-hidden shadow-xl shadow-slate-200/70 border border-slate-200 bg-blue-100">
              <img
                src={page.image.src}
                alt={page.image.alt}
                width={page.image.width}
                height={page.image.height}
                loading="eager"
                decoding="async"
                className="w-full h-auto aspect-[4/5] object-cover"
              />
            </div>
            <figcaption className="mt-2 text-xs text-slate-500 text-center">Illustrative industry image, not a customer photograph</figcaption>
          </figure>
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
