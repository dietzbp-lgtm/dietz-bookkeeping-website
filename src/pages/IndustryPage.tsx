import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ReceiptText, BarChart3, FileText, Clock3, ClipboardList, Building2 } from 'lucide-react';
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
    image: { src: '/images/industry-cleaning-photo.webp', alt: 'Professional cleaner wiping a kitchen stove while holding a spray bottle', width: 960, height: 1200 },
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
    image: { src: '/images/industry-contractors-photo.webp', alt: 'Contractor measuring flooring during an interior renovation', width: 960, height: 1200 },
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
    image: { src: '/images/industry-real-estate-photo.webp', alt: 'Business professional reviewing documents beside a laptop', width: 960, height: 1200 },
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


const visualContent: Record<Industry, {
  overviewTitle: string;
  sectionTitle: string;
  summary: string;
  detailImage: string;
  detailAlt: string;
  highlights: [string, string, string, string];
}> = {
  cleaning: {
    overviewTitle: 'Financial support for your cleaning business',
    sectionTitle: 'How we help cleaning businesses',
    summary: 'Whether you serve recurring residential clients or commercial properties, we can help you organize the invoices, deposits and expenses behind each job. We first review your records and agree on a service scope.',
    detailImage: '/images/industry-cleaning-detail.webp',
    detailAlt: 'Cleaning sprays and supplies arranged in a bucket',
    highlights: ['Organize income & expenses', 'Review business reports', 'Keep tax records organized', 'More time for customers']
  },
  contractors: {
    overviewTitle: 'Bookkeeping built for contractors and handymen',
    sectionTitle: 'How we help contractors',
    summary: 'From customer deposits and invoices to material purchases and vendor bills, organized records can help you understand the work behind each project. Optional job-level tracking depends on your accounting software and the agreed scope.',
    detailImage: '/images/industry-contractors-detail.webp',
    detailAlt: 'Architectural plans and measurement tools on a work surface',
    highlights: ['Organize job expenses', 'Review invoices & payments', 'Understand your reports', 'Focus on the next project']
  },
  realEstate: {
    overviewTitle: 'Financial support for real estate professionals',
    sectionTitle: 'How we help real estate agents',
    summary: 'Commission deposits, brokerage statements, advertising costs and operating expenses all need accurate records. We help you establish a bookkeeping routine so you can review your numbers between closings.',
    detailImage: '/images/industry-real-estate-detail.webp',
    detailAlt: 'Residential home with a for-sale sign outside',
    highlights: ['Organize commission income', 'Review business expenses', 'Prepare records for your CPA', 'More time for clients']
  }
};

const highlightIcons = [ReceiptText, BarChart3, FileText, Clock3];
const featureIcons = [ReceiptText, BarChart3, FileText, CheckCircle2, ClipboardList, Building2];

export default function IndustryPage({ industry }: { industry: Industry }) {
  const page = industries[industry];
  const visual = visualContent[industry];
  const featureCards = [...page.situations.slice(0, 3), ...page.records];

  return (
    <Layout>
      <section className="bg-gradient-to-r from-blue-50 via-white to-slate-50 py-10 sm:py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[minmax(0,1.2fr)_minmax(290px,.8fr)] gap-9 lg:gap-14 items-center">
          <div>
            <p className="text-xs sm:text-sm font-bold tracking-wider text-blue-700 mb-5">{page.label}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.13] font-bold tracking-tight text-slate-900 mb-6">{page.heading}</h1>
            <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mb-7">{page.introduction}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/estimate" className="bg-blue-700 text-white text-center font-semibold px-6 py-3.5 rounded-xl hover:bg-blue-800 transition-colors">Get a Free Bookkeeping Estimate</Link>
              <Link to="/schedule" className="bg-white border border-slate-300 text-slate-900 text-center font-semibold px-6 py-3.5 rounded-xl hover:border-blue-600 transition-colors">Schedule a Call</Link>
            </div>
            <p className="mt-5 text-sm text-slate-600">Based in Tampa, Florida · Remote bookkeeping services across the United States</p>
          </div>
          <figure className="w-full max-w-[430px] mx-auto lg:ml-auto lg:mr-0">
            <div className="rounded-[1.75rem] overflow-hidden shadow-lg shadow-slate-200/70 border border-slate-200 bg-slate-100">
              <img
                src={page.image.src}
                alt={page.image.alt}
                width={page.image.width}
                height={page.image.height}
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="w-full h-auto aspect-[4/5] object-cover"
              />
            </div>
            <figcaption className="mt-2 text-xs text-slate-500 text-center">Illustrative stock photography · Not an actual client or staff member</figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-white border-y border-slate-100" aria-label="Bookkeeping benefits">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-7 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {visual.highlights.map((label, index) => {
            const Icon = highlightIcons[index];
            return (
              <div key={label} className="flex flex-col items-center text-center gap-3">
                <Icon aria-hidden="true" className="w-8 h-8 text-blue-700" strokeWidth={1.8} />
                <p className="font-semibold text-sm sm:text-base text-slate-800">{label}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-white" aria-labelledby="industry-overview">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid md:grid-cols-[minmax(230px,.85fr)_minmax(0,1.15fr)] gap-8 lg:gap-12 items-center">
          <img
            src={visual.detailImage}
            alt={visual.detailAlt}
            width={440}
            height={315}
            loading="lazy"
            decoding="async"
            className="w-full h-auto aspect-[4/3] object-cover rounded-2xl shadow-md shadow-slate-200/60"
          />
          <div>
            <p className="text-sm font-bold tracking-wider text-blue-700 mb-3">BOOKKEEPING FOR YOUR INDUSTRY</p>
            <h2 id="industry-overview" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5">{visual.overviewTitle}</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">{visual.summary}</p>
            <p className="text-slate-600 leading-relaxed">{page.industryContext}</p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-slate-50" aria-labelledby="industry-services">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <p className="text-sm font-semibold tracking-widest text-blue-700 mb-3">PRACTICAL SUPPORT</p>
            <h2 id="industry-services" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{visual.sectionTitle}</h2>
            <p className="text-slate-600 text-lg">A clearer picture of your business starts with consistent records and an agreed scope.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featureCards.map((item, index) => {
              const Icon = featureIcons[index];
              return (
                <article key={item.heading} className="rounded-2xl border border-slate-200 bg-white px-6 py-7 text-center shadow-sm">
                  <div className="mx-auto mb-5 w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                    <Icon aria-hidden="true" className="w-6 h-6 text-blue-700" strokeWidth={1.8}/>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{item.heading}</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{item.text}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-2">{page.situations[3].heading}</h3>
            <p className="text-slate-700 leading-relaxed">{page.situations[3].text}</p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-white" aria-labelledby="industry-onboarding">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-[.9fr_1.1fr] gap-8 lg:gap-14 items-start">
          <div>
            <h2 id="industry-onboarding" className="text-3xl font-bold text-slate-900 mb-5">A simple way to work together</h2>
            <p className="text-slate-600 leading-relaxed mb-5">Start with a consultation about your accounting software, transaction volume, accounts and any backlog. We agree on an appropriate service scope and price before beginning work.</p>
            <Link to="/monthly-bookkeeping" className="inline-flex items-center gap-2 text-blue-700 font-semibold underline underline-offset-4">
              Learn how online bookkeeping works <ArrowRight aria-hidden="true" className="w-4 h-4"/>
            </Link>
          </div>
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-7 sm:p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">What to expect</h3>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3"><CheckCircle2 aria-hidden="true" className="w-5 h-5 mt-1 shrink-0 text-blue-700" /><span>Discuss your records and the services you need.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 aria-hidden="true" className="w-5 h-5 mt-1 shrink-0 text-blue-700" /><span>Confirm secure invited-user access where supported; never email bank passwords.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 aria-hidden="true" className="w-5 h-5 mt-1 shrink-0 text-blue-700" /><span>Receive an estimate and agree on the scope before work starts.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 aria-hidden="true" className="w-5 h-5 mt-1 shrink-0 text-blue-700" /><span>Review transactions, reconciliations and reports included in your plan.</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-slate-50" aria-labelledby="industry-faq">
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
          <h2 className="text-xl font-bold text-slate-900 mt-10 mb-5">Related bookkeeping services</h2>
          <ul className="space-y-3">
            {page.related.map(item => (
              <li key={item.to}>
                <Link to={item.to} className="inline-flex gap-2 items-center text-blue-700 font-semibold underline underline-offset-4">{item.label} <ArrowRight aria-hidden="true" className="w-4 h-4" /></Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-20 border-t border-blue-100">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-xs font-bold tracking-[.18em] text-blue-700 mb-4">LET'S GET STARTED</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5">Get a Free Bookkeeping Estimate</h2>
          <p className="text-lg text-slate-600 mb-8">Tell us about your {industry === 'cleaning' ? 'cleaning business' : industry === 'contractors' ? 'contracting or handyman business' : 'real estate business'} and the bookkeeping support you need. We'll discuss an appropriate service scope.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/estimate" className="bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-800 transition-colors">Request an Estimate</Link>
            <Link to="/schedule" className="border border-blue-200 bg-white text-blue-800 font-semibold px-8 py-4 rounded-xl hover:border-blue-600 transition-colors">Schedule a Call</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
