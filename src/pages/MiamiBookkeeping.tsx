import { Link } from 'react-router-dom';
import {
  ArrowRight, BarChart3, Building2, CheckCircle2, ChevronRight, ClipboardList,
  CreditCard, FileCheck2, Landmark, ReceiptText, ShieldCheck, WalletCards
} from 'lucide-react';
import Layout from '../components/Layout';

/*
 * Standalone editorial page: Miami's content and structure differ intentionally
 * from Orlando's. Examples describe possibilities, not existing clients.
 */
const recordQuestions = [
  {
    icon: Landmark,
    title: 'Real estate commissions and brokerage deposits',
    detail: 'An agent may have commission income that arrives in a different month from the marketing, licensing or travel expenses related to the work. Organizing brokerage statements, deposits and operating costs makes it easier to review what has actually been recorded.',
    href: '/bookkeeping-for-real-estate-agents',
    linkText: 'Explore real estate agent bookkeeping'
  },
  {
    icon: CreditCard,
    title: 'Hospitality and service-company payment settlements',
    detail: 'A cleaning service or other small business may receive card batches and online payments net of platform fees, refunds or adjustments. Matching gross activity to processor records and bank deposits can prevent double-counted income and unexplained differences.',
    href: '/bookkeeping-for-cleaning-businesses',
    linkText: 'Explore cleaning business bookkeeping'
  },
  {
    icon: Building2,
    title: 'Contractor purchases and vendor obligations',
    detail: 'Repair and contracting businesses often buy materials before the customer makes a final payment. Keeping customer deposits, vendor invoices, transfers and material purchases organized helps an owner review outstanding bills and cash timing.',
    href: '/bookkeeping-for-contractors',
    linkText: 'Explore contractor bookkeeping'
  }
];

const settlementSteps = [
  {
    title: 'Identify how customers pay',
    text: 'List the bank accounts and payment services actually used: for example, invoices settled by ACH, credit-card processing or checks. Confirm where each settlement report can be found.'
  },
  {
    title: 'Compare gross activity, fees and deposits',
    text: 'A processor might deposit several customer payments together after withholding a fee or processing a refund. We discuss the supporting records needed to compare those amounts with the bookkeeping entries.'
  },
  {
    title: 'Flag unmatched amounts rather than guessing',
    text: 'A transfer, disputed payment or missing settlement report can cause a difference. Questions are documented for the owner, and adjustments depend on available records and agreed responsibilities.'
  }
];

const checklist = [
  'The accounting software or spreadsheet you currently use, plus when books were last reconciled',
  'The number of business bank, credit card and payment processor accounts',
  'Typical transaction volume and whether customer invoices or vendor bills are tracked',
  'Missing months, unclear transfers, commission records or other known bookkeeping concerns'
];

const faqs = [
  {
    question: 'Is Dietz Bookkeeping physically located in Miami?',
    answer: 'No. Dietz Bookkeeping operates from Tampa, Florida, and works with small businesses in Miami-Dade remotely. Tampa meetings may be scheduled by appointment. We do not advertise a Miami office or staff.'
  },
  {
    question: 'Can you work with companies based in Brickell, Doral, Coral Gables or Miami Beach?',
    answer: 'Yes, small businesses throughout the Miami area can discuss remote bookkeeping with us. An office visit in those locations is not part of the service. We establish software access, communication and document-handling arrangements remotely.'
  },
  {
    question: 'Can you help if payments arrive through several platforms?',
    answer: 'We can review the accounts, available processor statements and transaction volumes to determine an appropriate bookkeeping scope. Matching net deposits to gross activity, fees and refunds depends on receiving complete source records.'
  },
  {
    question: 'What if my business has invoices in different languages or foreign currencies?',
    answer: 'Please tell us about those records during the consultation so we can assess the tools, reporting requirements and complexity. We do not promise foreign-currency accounting, translation, import/export compliance or international tax advice without a specifically agreed and suitable scope.'
  },
  {
    question: 'Do I need a local Miami bookkeeper or can everything be done online?',
    answer: 'For many record-keeping tasks, remote communication and approved accounting-system access can work well. We discuss the documents required, the frequency of questions and any responsibilities that need local licensed professionals before agreeing on a service.'
  },
  {
    question: 'How are pricing and bookkeeping cleanup handled?',
    answer: 'We consider transaction volume, accounts, existing software, services requested and the condition of the books. Historical catch-up or cleanup is evaluated separately from recurring monthly work, and there is no promised flat price for every Miami business.'
  }
];

export default function MiamiBookkeeping() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-blue-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
              <li><Link className="hover:text-blue-700 underline-offset-4 hover:underline" to="/">Home</Link></li>
              <li className="inline-flex items-center gap-2"><ChevronRight aria-hidden="true" className="w-4 h-4 text-slate-400" /><Link className="hover:text-blue-700 underline-offset-4 hover:underline" to="/service-areas">Service Areas</Link></li>
              <li aria-current="page" className="inline-flex items-center gap-2 font-semibold text-slate-900"><ChevronRight aria-hidden="true" className="w-4 h-4 text-slate-400" />Miami, Florida</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,.92fr)] gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-sm font-bold tracking-widest text-blue-700 mb-4">MIAMI-DADE SMALL BUSINESS BOOKKEEPING · REMOTE SERVICE</p>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.1] tracking-tight font-bold text-slate-900 mb-6">
                Online Bookkeeping for <span className="text-blue-700">Miami Businesses</span>
              </h1>
              <p className="text-lg sm:text-xl leading-relaxed text-slate-700 mb-6">
                Running a business with customer deposits, multiple payment methods or irregular invoices? Dietz Bookkeeping provides remote monthly bookkeeping, reconciliation and cleanup discussions for small businesses in Miami and Miami-Dade County.
              </p>
              <p className="text-slate-700 leading-relaxed mb-7">
                Work directly with Bryan Dietz, who has firsthand experience operating small service businesses. We review your records and propose work that fits your accounting setup rather than promising every service automatically.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/schedule" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 text-white hover:bg-blue-800 px-6 py-3.5 font-semibold">
                  Schedule a Free Consultation <ArrowRight aria-hidden="true" className="w-4 h-4" />
                </Link>
                <Link to="/estimate" className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-800 hover:border-blue-600 px-6 py-3.5 font-semibold">
                  Request an Estimate
                </Link>
              </div>
              <p className="mt-5 text-sm text-slate-600"><strong>Location:</strong> Based in Tampa, FL · Serving Miami remotely · No Miami office</p>
            </div>

            <div className="space-y-4">
              <div className="rounded-[1.8rem] overflow-hidden border border-slate-200 bg-slate-100 shadow-xl shadow-slate-200/60">
                <img
                  src="/images/industry-real-estate-photo.webp"
                  alt="Residential property with a real estate for-sale sign; illustrative service-business photography"
                  width={960}
                  height={1200}
                  className="w-full h-[360px] sm:h-[420px] lg:h-[405px] object-cover"
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="rounded-2xl bg-white border border-blue-100 shadow-sm p-5 flex gap-4 items-start">
                <ShieldCheck className="text-blue-700 w-8 h-8 shrink-0" aria-hidden="true" />
                <div><h2 className="text-lg font-bold text-slate-900 mb-1">Your location doesn't change the process</h2><p className="text-sm text-slate-600 leading-relaxed">Consultation, approved system access and document questions can be handled remotely. Sensitive records are shared only through agreed secure methods.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-9">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid sm:grid-cols-3 gap-6">
          {[
            ['Records first', 'Assess the file before defining the work'],
            ['Transparent scope', 'Services and responsibilities agreed upfront'],
            ['National access', 'Tampa-based support for Miami owners']
          ].map(([heading,text]) => (
            <div key={heading}>
              <p className="font-bold text-lg text-white mb-1">{heading}</p>
              <p className="text-slate-300 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white" aria-labelledby="miami-market">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(270px,.85fr)] gap-8 lg:gap-12 items-start">
            <div>
              <p className="font-bold text-sm tracking-wider text-blue-700 mb-3">UNDERSTANDING THE MARKET</p>
              <h2 id="miami-market" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5">Miami's mix of tourism, real estate and commerce affects how businesses get paid</h2>
              <p className="text-slate-700 text-lg leading-relaxed mb-5">
                A Miami-Dade company might have commission income, card settlements, professional-service invoices, vendor bills or payments spread across multiple platforms. Those situations create different bookkeeping questions: did an invoice get paid, what explains a net bank deposit, and which costs belong to the reporting period?
              </p>
              <p className="text-slate-700 leading-relaxed mb-5">
                The <a href="https://www.gmcvb.com/press/miami-press-releases/gmcvb-reports-strong-tourism" className="font-semibold text-blue-700 underline underline-offset-4" target="_blank" rel="noopener noreferrer">Greater Miami Convention &amp; Visitors Bureau reported 28.3 million visitors for 2025</a>. The <a href="https://miami-fl.eimpactv3.com/dashboards/171/miami/Industries" className="font-semibold text-blue-700 underline underline-offset-4" target="_blank" rel="noopener noreferrer">City of Miami industry dashboard</a> also identifies significant professional services, hospitality, transportation and real-estate activity. These are public market indicators, not claims that these organizations or their businesses are our clients.
              </p>
              <p className="text-slate-700 leading-relaxed">The goal is not to apply a generic Miami accounting formula. We start with the sources of income and expenses for <em>your</em> business and confirm which bookkeeping tasks we can appropriately support.</p>
            </div>
            <aside className="rounded-3xl border border-blue-100 bg-blue-50 p-7 sm:p-8">
              <BarChart3 className="w-9 h-9 text-blue-700 mb-4" aria-hidden="true" />
              <p className="text-sm font-bold uppercase tracking-wide text-blue-700 mb-2">Miami-Dade tourism context</p>
              <p className="text-4xl font-bold text-slate-900 mb-2">28.3 million</p>
              <p className="text-slate-700 mb-5">Reported visitors in 2025, according to Greater Miami Convention &amp; Visitors Bureau (June 2026).</p>
              <p className="text-sm text-slate-600 border-t border-blue-200 pt-4 leading-relaxed">Useful economic context, not an estimate of bookkeeping demand and not a promise of results.</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-50" aria-labelledby="miami-examples">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-9">
            <p className="text-sm font-bold tracking-wider text-blue-700 mb-3">THREE DIFFERENT BUSINESS RECORDS CHALLENGES</p>
            <h2 id="miami-examples" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Start with what your business needs to track</h2>
            <p className="text-lg text-slate-700">The examples below describe possible workflows, not real customers, guaranteed outcomes or services automatically included in every plan.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {recordQuestions.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="flex flex-col rounded-3xl bg-white border border-slate-200 p-7 shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex justify-center items-center mb-6"><Icon className="w-6 h-6 text-blue-700" aria-hidden="true" /></div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-700 leading-relaxed mb-6 flex-1">{item.detail}</p>
                  <Link to={item.href} className="inline-flex items-center gap-2 font-semibold text-blue-700 underline underline-offset-4">{item.linkText}<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white" aria-labelledby="settlements">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-[.95fr_1.05fr] gap-10 lg:gap-16 items-start">
            <div>
              <p className="text-sm font-bold tracking-wider text-blue-700 mb-3">A PRACTICAL EXAMPLE</p>
              <h2 id="settlements" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5">Why a $1,000 card sale may not appear as a $1,000 deposit</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-5">
                Suppose a Miami service business records customer card payments, but its payment provider deducts fees before making a bank deposit. The amount received in the bank can differ from gross sales, and several customer payments may be grouped in one settlement.
              </p>
              <p className="text-slate-700 leading-relaxed mb-6">
                Comparing the provider report with recorded invoices and bank deposits helps explain the difference. Refunds, chargebacks or timing may add complexity. This is an illustrative scenario, not a statement about any actual client or an assumed fee rate.
              </p>
              <Link to="/tampa-bank-reconciliation" className="inline-flex items-center gap-2 font-semibold text-blue-700 underline underline-offset-4">
                Understand bank reconciliation <ArrowRight aria-hidden="true" className="w-4 h-4" />
              </Link>
            </div>
            <ol className="space-y-4">
              {settlementSteps.map((step,index) => (
                <li key={step.title} className="flex items-start gap-4 rounded-2xl bg-slate-50 border border-slate-200 p-6">
                  <span className="flex justify-center items-center w-10 h-10 rounded-full bg-blue-700 text-white font-bold shrink-0">{index+1}</span>
                  <div><h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3><p className="text-slate-700 leading-relaxed">{step.text}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-blue-50" aria-labelledby="cross-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[.9fr_1.1fr] gap-10 items-start">
          <div>
            <WalletCards aria-hidden="true" className="w-10 h-10 text-blue-700 mb-4" />
            <h2 id="cross-border" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5">International transactions? Clarify the scope before bookkeeping starts</h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              Miami-Dade emphasizes international commerce among its economic strengths. If your company receives payments in foreign currencies, uses overseas vendors or has records in multiple languages, those details should be disclosed during the consultation. <a href="https://www.miamidade.gov/global/management/budget/2025-26/adopted/economic-development.page" className="font-semibold text-blue-700 underline underline-offset-4" target="_blank" rel="noopener noreferrer">See Miami-Dade's economic development priorities.</a>
            </p>
            <p className="text-slate-700 leading-relaxed">
              We assess the accounting software, source documents and reporting needs before deciding what services are appropriate. We do not automatically provide currency translation, international tax planning, import/export compliance or foreign reporting services.
            </p>
          </div>
          <div className="bg-white rounded-3xl border border-blue-100 p-7 sm:p-9">
            <h3 className="text-xl font-bold text-slate-900 mb-5">Questions to bring to a consultation</h3>
            <ul className="space-y-5">
              {[
                'Which bank, payment processor and currency accounts are involved?',
                'Are the invoices and processor reports available in the same accounting software?',
                'Are overseas payments business expenses, transfers or another type of transaction?',
                'Does your CPA or another qualified adviser already handle cross-border tax questions?'
              ].map(item => <li className="flex gap-3 text-slate-700 leading-relaxed" key={item}><CheckCircle2 className="w-5 h-5 text-blue-700 mt-1 shrink-0" aria-hidden="true" />{item}</li>)}
            </ul>
            <Link to="/estimate" className="inline-flex mt-8 font-semibold text-blue-700 underline underline-offset-4">Discuss your records and service scope <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white" aria-labelledby="getting-started">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between">
            <div className="max-w-md">
              <ClipboardList aria-hidden="true" className="w-10 h-10 text-blue-700 mb-4" />
              <h2 id="getting-started" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5">Your first Miami bookkeeping conversation</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-5">An initial conversation can begin with approximate information. Do not upload financial statements, passwords or employee records through an estimate form.</p>
              <Link className="inline-flex items-center gap-2 text-blue-700 font-semibold underline underline-offset-4" to="/schedule">Book a free consultation <ArrowRight aria-hidden="true" className="w-4 h-4" /></Link>
            </div>
            <div className="flex-1 grid sm:grid-cols-2 gap-4">
              {checklist.map((item,index) => (
                <div key={item} className="border border-slate-200 bg-slate-50 p-6 rounded-2xl">
                  <p className="text-sm font-bold text-blue-700 mb-3">QUESTION {index+1}</p>
                  <p className="text-slate-800 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 border-t border-slate-200 pt-7 flex flex-wrap gap-x-7 gap-y-4 text-sm">
            <Link to="/monthly-bookkeeping" className="text-blue-700 font-semibold underline underline-offset-4">Monthly bookkeeping</Link>
            <Link to="/tampa-cleanup-bookkeeping" className="text-blue-700 font-semibold underline underline-offset-4">Catch-up bookkeeping</Link>
            <Link to="/tampa-accounts-receivable" className="text-blue-700 font-semibold underline underline-offset-4">Customer invoice tracking</Link>
            <Link to="/service-areas" className="text-blue-700 font-semibold underline underline-offset-4">All service areas</Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-50" aria-labelledby="miami-faq">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <p className="font-bold text-sm tracking-wider text-blue-700 mb-3">REMOTE BOOKKEEPING IN MIAMI-DADE</p>
          <h2 id="miami-faq" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5">Questions Miami business owners ask</h2>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map(item => (
              <details key={item.question} className="py-5 group">
                <summary className="cursor-pointer font-semibold text-slate-900">{item.question}</summary>
                <p className="mt-3 text-slate-700 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-[1fr_auto] items-center gap-10">
          <div>
            <p className="text-sm font-bold tracking-wider text-sky-300 mb-3">BOOKKEEPING SUPPORT FROM TAMPA</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Your Miami business deserves clearer financial records</h2>
            <p className="text-slate-300 text-lg leading-relaxed">Talk with Bryan about your current records, scope and available options. Remote service is available to Miami-Dade businesses; meetings at the Tampa location are by appointment.</p>
          </div>
          <div className="flex flex-col gap-3 min-w-[230px]">
            <Link to="/schedule" className="bg-white text-slate-900 font-bold text-center rounded-xl px-6 py-3.5 hover:bg-blue-50">Schedule a Consultation</Link>
            <Link to="/contact" className="border border-slate-600 text-white font-semibold text-center rounded-xl px-6 py-3.5 hover:border-white">Contact Dietz Bookkeeping</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
