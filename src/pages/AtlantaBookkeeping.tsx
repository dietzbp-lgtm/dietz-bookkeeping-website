import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle2, ChevronRight, ClipboardList, FileText,
  Layers3, ShieldCheck, TrendingUp, Truck, Wrench
} from 'lucide-react';
import Layout from '../components/Layout';

/** Atlanta-focused editorial guidance. Examples are hypothetical; no client claims. */
const businessPatterns = [
  {
    Icon: Layers3,
    title: 'Agencies, consultants and creative contractors',
    eyebrow: 'PROJECT BILLING',
    description: 'A small marketing agency or independent creative team might bill an initial retainer, milestone invoices and additional work at different times. Keeping invoice dates, deposits, subcontractor bills and software costs visible supports a useful discussion of recorded income and expenses.',
    link: '/tampa-accounts-receivable',
    linkLabel: 'How customer invoices are tracked'
  },
  {
    Icon: Truck,
    title: 'Delivery, logistics and route-service businesses',
    eyebrow: 'MOVING EXPENSES',
    description: 'A local delivery or fleet-service owner may track fuel, repairs, insurance, equipment and separate payment platforms. Comparing bank charges, vendor receipts and recurring obligations can help identify missing expenses without assuming every transaction has the same tax treatment.',
    link: '/tampa-bank-reconciliation',
    linkLabel: 'Understanding account reconciliation'
  },
  {
    Icon: Wrench,
    title: 'Home-service trades and subcontractors',
    eyebrow: 'JOBS AND MATERIALS',
    description: 'A contractor may collect a customer deposit, buy materials, receive a subcontractor bill and invoice the remaining balance after work is finished. Maintaining supporting documentation and open bill lists can help the owner review cash needs across active projects.',
    link: '/bookkeeping-for-contractors',
    linkLabel: 'Bookkeeping for contractors and handymen'
  }
];

const projectExample = [
  {
    label: 'Before a project begins',
    title: 'Retainer or advance arrives',
    text: 'A service provider receives an advance against future work. We review the invoice, payment and accounting method before deciding how the amount should be recorded.'
  },
  {
    label: 'While work is underway',
    title: 'Vendors and software are billed',
    text: 'An outside designer sends an invoice while subscription charges and other costs appear on the bank statement. Source records help identify who was paid and which bills remain open.'
  },
  {
    label: 'At the reporting date',
    title: 'A milestone invoice is still outstanding',
    text: 'The owner wants to understand recorded earnings and available cash. Those can differ, especially when customer payments and vendor obligations fall in different periods.'
  }
];

const consultChecklist = [
  'How do customers pay you: recurring invoices, project milestones, deliveries, checks or card payments?',
  'Which bookkeeping platform do you use, and when were bank and card accounts last reconciled?',
  'How many business accounts and roughly how many monthly transactions are involved?',
  'Do you have outstanding customer invoices, unpaid vendor bills or bookkeeping months that need cleanup?',
  'Does your work involve employee payroll, contractor documents, inventory or unusual reporting needs?'
];

const faqs = [
  {
    question: 'Does Dietz Bookkeeping have an office in Atlanta?',
    answer: 'No. Dietz Bookkeeping is located in Tampa, Florida. We provide remote bookkeeping support to small businesses in Atlanta and throughout the United States. Meetings in Tampa are by appointment; we do not advertise an Atlanta office or local visits.'
  },
  {
    question: 'Can you work with owners in Midtown, Buckhead, Decatur or Sandy Springs?',
    answer: 'We can discuss remote bookkeeping with owners throughout the Atlanta region. The onboarding process focuses on appropriate accounting software access, supporting documents and a defined scope rather than an in-person visit.'
  },
  {
    question: 'How are project deposits and unpaid milestone invoices recorded?',
    answer: 'Treatment depends on the facts, supporting documents and the accounting method. We review the invoice and payment records and discuss a bookkeeping approach within the agreed scope. We do not assume every advance is immediately earned revenue.'
  },
  {
    question: 'Can you manage my fleet, inventory or production accounting?',
    answer: 'We can discuss the underlying bookkeeping records, recurring expenses and reporting questions, but fleet management, inventory costing, film production accounting and industry-specific tax work are not automatically included. Any specialized requirements must be assessed first.'
  },
  {
    question: 'Can you file Georgia sales tax or prepare my business tax return?',
    answer: 'Tax filings, state-specific sales-tax determinations and tax advice are not included automatically in bookkeeping services. We can organize appropriate records for your tax professional, who determines filing and compliance obligations.'
  },
  {
    question: 'Can you take over bookkeeping when my records are behind?',
    answer: 'We start by reviewing the backlog, source statements, number of accounts and unanswered questions. Catch-up or cleanup work is usually scoped separately from recurring monthly support, and timing depends on the condition and availability of records.'
  }
];

export default function AtlantaBookkeeping() {
  return (
    <Layout>
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
              <li><Link to="/" className="underline-offset-4 hover:underline hover:text-white">Home</Link></li>
              <li className="flex items-center gap-2"><ChevronRight className="h-4 w-4 text-slate-400" aria-hidden="true" /><Link to="/service-areas" className="underline-offset-4 hover:underline hover:text-white">Service Areas</Link></li>
              <li className="flex items-center gap-2 font-semibold text-white" aria-current="page"><ChevronRight className="h-4 w-4 text-slate-400" aria-hidden="true" />Atlanta, Georgia</li>
            </ol>
          </nav>
          <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(310px,.9fr)] gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-sky-300 font-bold uppercase tracking-widest text-sm mb-5">REMOTE BOOKKEEPING FOR ATLANTA SMALL BUSINESSES</p>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.45rem] leading-[1.1] font-bold tracking-tight mb-6">
                Atlanta Bookkeeping for <span className="text-sky-300">Busy Business Owners</span>
              </h1>
              <p className="text-xl text-slate-200 leading-relaxed mb-6">
                Running a service business with project invoices, vendor bills or multiple payment accounts? Dietz Bookkeeping offers remote monthly bookkeeping, reconciliations and catch-up discussions for Atlanta-area small businesses.
              </p>
              <p className="text-slate-300 leading-relaxed mb-8">
                Work directly with Bryan Dietz from Tampa, Florida. We first examine how your business records transactions and what work is needed, then discuss a clear, customized scope.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Link to="/schedule" className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-300 hover:bg-sky-200 text-slate-950 font-bold px-6 py-3.5">
                  Book a Free Consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link to="/estimate" className="inline-flex items-center justify-center rounded-xl border border-slate-500 hover:border-sky-200 text-white font-semibold px-6 py-3.5">
                  Request an Estimate
                </Link>
              </div>
              <p className="text-sm text-slate-300"><strong className="text-white">Service location:</strong> Based in Tampa · Atlanta support is remote · No Georgia office</p>
            </div>
            <div>
              <div className="rounded-[1.75rem] overflow-hidden border border-slate-700 shadow-2xl shadow-black/30">
                <img
                  src="/images/industry-contractors-photo.webp"
                  alt="Contractor working on a home service project; illustrative business photography, not an Atlanta location"
                  width={960}
                  height={1200}
                  className="w-full h-[355px] sm:h-[420px] lg:h-[440px] object-cover"
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="mt-4 flex gap-3 rounded-2xl bg-white/10 border border-white/15 p-5">
                <ShieldCheck className="h-6 w-6 text-sky-300 shrink-0" aria-hidden="true" />
                <p className="text-slate-200 text-sm leading-relaxed">No banking passwords in website forms. We discuss approved accountant access and secure records sharing during onboarding.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white" aria-labelledby="atlanta-context">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-[1.12fr_.88fr] gap-10 items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-blue-700 mb-3">WHY THE REGIONAL CONTEXT MATTERS</p>
              <h2 id="atlanta-context" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5">Atlanta's business mix creates more than one kind of bookkeeping challenge</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-5">
                Metro Atlanta is known for business services, logistics, technology and creative industries. Behind larger regional employers are independent contractors, delivery operators, repair teams and small professional-service providers—business models that can produce different invoice patterns, vendor costs and payment schedules.
              </p>
              <p className="text-slate-700 leading-relaxed mb-5">
                <a href="https://worksourceatlanta.org/job-seekers/in-demand-industries/" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-semibold underline underline-offset-4">WorkSource Atlanta identifies transportation and logistics, construction, business services and film/entertainment among in-demand sectors</a>.
                The <a href="https://metroatlantachamber.com/built-for-business/key-industries/supply-chain-advanced-manufacturing/" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-semibold underline underline-offset-4">Metro Atlanta Chamber describes the region's supply-chain infrastructure</a>.
              </p>
              <p className="text-slate-700 leading-relaxed">
                These are indicators of the local economy, not evidence that Dietz Bookkeeping has served any of those companies. The right bookkeeping workflow depends on your business's actual records and agreed needs.
              </p>
            </div>
            <aside className="rounded-3xl bg-blue-50 border border-blue-100 p-8">
              <TrendingUp className="h-10 w-10 text-blue-700 mb-5" aria-hidden="true" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Business records worth reviewing</h3>
              <ul className="space-y-4 text-slate-700">
                {[
                  'Which invoices remain open at month-end?',
                  'Were deposits recorded as payments or transfers?',
                  'Which subcontractor and supplier bills are still due?',
                  'Do recurring equipment and software charges match their records?'
                ].map(item => <li key={item} className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-blue-700 shrink-0 mt-0.5" aria-hidden="true" />{item}</li>)}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="atlanta-businesses">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-9">
            <p className="text-sm uppercase tracking-wider font-bold text-blue-700 mb-3">EXAMPLES BY BUSINESS MODEL</p>
            <h2 id="atlanta-businesses" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Three situations Atlanta-area owners may recognize</h2>
            <p className="text-slate-700 text-lg">These examples are illustrative, not client testimonials or promises that every specialized workflow is included.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {businessPatterns.map(({ Icon, title, eyebrow, description, link, linkLabel }) => (
              <article className="flex flex-col bg-white rounded-3xl border border-slate-200 p-7 shadow-sm" key={title}>
                <div className="flex items-center gap-3 mb-5"><span className="w-12 h-12 flex items-center justify-center rounded-xl bg-sky-100"><Icon className="h-6 w-6 text-blue-700" aria-hidden="true" /></span><span className="text-xs font-bold tracking-wider text-blue-700">{eyebrow}</span></div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
                <p className="text-slate-700 leading-relaxed mb-6 flex-1">{description}</p>
                <Link to={link} className="inline-flex items-center gap-2 text-blue-700 font-semibold underline underline-offset-4">{linkLabel} <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
              </article>
            ))}
          </div>
          <p className="text-sm text-slate-600 mt-7">Film and creative services are part of Georgia's economy, as described by the <a href="https://georgia.org/industries/film-entertainment" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline underline-offset-4">Georgia Department of Economic Development</a>; specialized production cost accounting and incentives are not assumed services.</p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white" aria-labelledby="atlanta-example">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-9">
            <p className="text-sm uppercase tracking-wider font-bold text-blue-700 mb-3">A PROJECT BILLING EXAMPLE</p>
            <h2 id="atlanta-example" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5">Why project invoices and bank cash can tell different stories</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Imagine a small Atlanta agency starts a client project, hires a subcontractor and issues invoices in stages. The owner wants to see both the money received and amounts still outstanding. Those are different questions—and the accounting method matters.
            </p>
          </div>
          <ol className="grid md:grid-cols-3 gap-5">
            {projectExample.map((step,index) => (
              <li key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white font-bold mb-5">{index + 1}</span>
                <p className="text-sm font-bold text-blue-700 mb-2">{step.label}</p>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-700 leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 rounded-2xl bg-blue-50 border border-blue-100 p-6 sm:p-8 flex flex-col sm:flex-row gap-5 sm:items-center justify-between">
            <p className="text-slate-800 leading-relaxed max-w-3xl"><strong>Practical next step:</strong> Discuss your invoice aging, payment records and available reports. We identify missing data and clarify scope before proposing ongoing monthly work.</p>
            <Link className="shrink-0 inline-flex justify-center items-center gap-2 font-semibold text-blue-700 underline underline-offset-4" to="/tampa-financial-reporting">Explore financial reporting <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-blue-50" aria-labelledby="atlanta-remote">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[.9fr_1.1fr] gap-10 lg:gap-14 items-start">
          <div>
            <p className="text-sm uppercase tracking-wider font-bold text-blue-700 mb-3">WORKING REMOTELY</p>
            <h2 id="atlanta-remote" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5">Tampa-based support for an Atlanta business</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">Owners in Atlanta, Decatur, Sandy Springs and nearby communities can schedule a remote conversation. We discuss software access, document sharing, reporting frequency and which work will remain with the owner or other professionals.</p>
            <p className="text-slate-700 leading-relaxed mb-7">Bryan is based in Florida; there is no Atlanta storefront or promised on-site visit. We confirm that our experience and available tools fit the requested work before accepting an engagement.</p>
            <Link to="/service-areas" className="inline-flex items-center gap-2 font-semibold text-blue-700 underline underline-offset-4">Read how nationwide service works <ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
          </div>
          <div className="bg-white rounded-3xl border border-blue-100 p-7 sm:p-8 shadow-sm">
            <ClipboardList className="w-9 h-9 text-blue-700 mb-4" aria-hidden="true" />
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Have these five answers ready</h3>
            <p className="text-slate-600 mb-6">A summary is enough for an initial consultation. Please do not submit account passwords, bank statements or employee identifiers through the website form.</p>
            <ul className="space-y-4">
              {consultChecklist.map(item => <li key={item} className="flex gap-3 text-slate-800 leading-relaxed"><CheckCircle2 className="w-5 h-5 mt-0.5 text-blue-700 shrink-0" aria-hidden="true" />{item}</li>)}
            </ul>
            <Link to="/estimate" className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-700 underline underline-offset-4">Request a scope-based estimate <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white" aria-labelledby="atlanta-other-services">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex gap-4 items-start mb-7">
            <FileText className="w-9 h-9 shrink-0 text-blue-700" aria-hidden="true" />
            <div><h2 id="atlanta-other-services" className="text-3xl font-bold text-slate-900 mb-3">Choose help based on the condition of your books</h2><p className="text-slate-700 max-w-3xl">The following service descriptions apply nationwide, even when some older URLs include our Tampa home city.</p></div>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {to:'/monthly-bookkeeping',name:'Monthly bookkeeping',copy:'Discuss ongoing transactions, reconciliations and recurring reports.'},
              {to:'/tampa-cleanup-bookkeeping',name:'Catch-up and cleanup',copy:'Review missing periods and plan a separate historical records project.'},
              {to:'/tampa-accounts-payable',name:'Vendor bill support',copy:'Track bill information and outstanding vendor obligations within the agreed scope.'}
            ].map(item => (
              <Link to={item.to} key={item.to} className="rounded-2xl p-6 border border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-colors">
                <h3 className="font-bold text-xl text-slate-900 mb-3">{item.name}</h3>
                <p className="text-slate-700 mb-5 leading-relaxed">{item.copy}</p>
                <span className="inline-flex items-center gap-2 text-blue-700 font-semibold">Read more <ArrowRight className="w-4 h-4" aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-50" aria-labelledby="atlanta-faqs">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <p className="text-sm uppercase tracking-wider font-bold text-blue-700 mb-3">ATLANTA BOOKKEEPING FAQ</p>
          <h2 id="atlanta-faqs" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5">Questions before getting started</h2>
          <div className="border-t border-slate-200 divide-y divide-slate-200">
            {faqs.map(item => (
              <details key={item.question} className="py-5">
                <summary className="cursor-pointer font-semibold text-slate-900">{item.question}</summary>
                <p className="text-slate-700 leading-relaxed mt-3">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <p className="text-sm uppercase font-bold tracking-wider text-sky-300 mb-3">TAKE THE NEXT STEP</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Talk about your Atlanta business's books</h2>
            <p className="text-slate-300 text-lg leading-relaxed">Share your bookkeeping questions with Bryan and discuss an appropriate remote service scope. No local Atlanta office or assumed tax, fleet or production accounting service.</p>
          </div>
          <div className="flex flex-col gap-3 min-w-[225px]">
            <Link to="/schedule" className="rounded-xl bg-sky-300 hover:bg-sky-200 text-slate-950 font-bold px-6 py-3.5 text-center">Schedule a Consultation</Link>
            <Link to="/contact" className="rounded-xl border border-slate-600 hover:border-white text-white font-semibold px-6 py-3.5 text-center">Ask a Question</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
