import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function ServiceAreas() {
  return <Layout>
    <section className="bg-blue-50 py-20"><div className="max-w-4xl mx-auto px-6"><p className="text-blue-600 font-semibold mb-4">BASED IN TAMPA · WORKING NATIONWIDE</p><h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Your bookkeeper can be nearby—or a call away.</h1><p className="text-xl text-slate-600 mb-8">Dietz Bookkeeping helps small businesses in Tampa Bay, throughout Florida and across the United States. Work directly with Bryan Dietz through remote bookkeeping support, with Tampa meetings available by appointment.</p><Link to="/schedule" className="inline-block bg-blue-600 text-white px-6 py-4 rounded-xl font-semibold">Book a Free Consultation</Link></div></section>
    <section className="py-16"><div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10"><article className="rounded-3xl bg-slate-50 p-8"><h2 className="text-2xl font-bold mb-4">Tampa Bay & Florida</h2><p className="text-slate-600 mb-4">From Tampa, Brandon and Riverview to St. Petersburg, Clearwater, Wesley Chapel and beyond, we can support your business remotely. Tampa appointments are arranged in advance; please contact us before visiting.</p><p className="text-slate-600">Businesses in Orlando, Jacksonville, Miami and other Florida communities can use the same remote process. These are service locations, not additional offices.</p></article><article className="rounded-3xl bg-slate-50 p-8"><h2 className="text-2xl font-bold mb-4">Across the United States</h2><p className="text-slate-600 mb-4">You do not need to be in Florida. We discuss your accounting setup, arrange appropriate software access and coordinate the documents needed for your agreed scope.</p><p className="text-slate-600">Consultations are scheduled using the booking calendar. We confirm communication preferences and any timing needs before work starts.</p></article></div></section>
    <section className="pb-16 bg-white" aria-labelledby="city-guides">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-sm font-bold tracking-wider text-blue-700 mb-3">NATIONWIDE SERVICE-AREA GUIDES</p>
        <h2 id="city-guides" className="text-3xl font-bold text-slate-900 mb-4">Explore our city-specific bookkeeping guidance</h2>
        <p className="text-slate-600 leading-relaxed mb-7 max-w-3xl">Dietz Bookkeeping is based in Tampa and works remotely with businesses in these cities. Our city guides address different bookkeeping situations. These are remote service locations—not additional physical offices.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="rounded-2xl bg-slate-50 border border-slate-200 p-7">
            <p className="text-sm font-bold text-blue-700 mb-3">CENTRAL FLORIDA</p>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Orlando bookkeeping</h3>
            <p className="text-slate-600 mb-5 leading-relaxed">Recurring property services, customer deposits, seasonal business expenses and how remote bookkeeping works for Orlando-area owners.</p>
            <Link to="/orlando-bookkeeping" className="font-semibold text-blue-700 underline underline-offset-4">Read the Orlando guide →</Link>
          </article>
          <article className="rounded-2xl bg-slate-50 border border-slate-200 p-7">
            <p className="text-sm font-bold text-blue-700 mb-3">SOUTH FLORIDA</p>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Miami bookkeeping</h3>
            <p className="text-slate-600 mb-5 leading-relaxed">Commission deposits, payment-platform settlements, vendor bills and other bookkeeping questions for Miami-Dade service businesses.</p>
            <Link to="/miami-bookkeeping" className="font-semibold text-blue-700 underline underline-offset-4">Read the Miami guide →</Link>
          </article>
          <article className="rounded-2xl bg-slate-50 border border-slate-200 p-7">
            <p className="text-sm font-bold text-blue-700 mb-3">METRO ATLANTA · GEORGIA</p>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Atlanta bookkeeping</h3>
            <p className="text-slate-600 mb-5 leading-relaxed">Project invoices, delivery-business expenses and trade contractor records for Atlanta-area small business owners.</p>
            <Link to="/atlanta-bookkeeping" className="font-semibold text-blue-700 underline underline-offset-4">Read the Atlanta guide →</Link>
          </article>
        </div>
      </div>
    </section>
    <section className="pb-16"><div className="max-w-5xl mx-auto px-6"><h2 className="text-3xl font-bold mb-6">Choose support for your records</h2><div className="grid sm:grid-cols-3 gap-6">{[['/monthly-bookkeeping','Monthly bookkeeping','Keep transactions, accounts and reports organized on a recurring schedule.'],['/tampa-cleanup-bookkeeping','Cleanup & catch-up','Review a backlog and agree on a plan to bring records up to date.'],['/services','Additional services','Explore reconciliation, invoicing, bills, payroll records and reporting.']].map(([url,title,copy])=><Link key={url} to={url} className="border rounded-2xl p-6 hover:border-blue-500"><h3 className="font-bold text-xl mb-3">{title}</h3><p className="text-slate-600">{copy}</p><span className="block text-blue-600 mt-4">Learn more →</span></Link>)}</div><h2 className="text-2xl font-bold mt-12 mb-4">What to bring to your first conversation</h2><p className="text-slate-600 mb-6">Tell us what your business does, which accounting software you use, roughly how many transactions and accounts you have, and whether any months are behind. We will discuss the services that fit and prepare a scope-based estimate.</p><Link to="/estimate" className="text-blue-600 font-semibold underline">Discuss your bookkeeping needs</Link></div></section>
  </Layout>;
}
