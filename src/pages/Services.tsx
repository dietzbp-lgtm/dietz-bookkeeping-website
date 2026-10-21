import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

const Services = () => {
  return (
    <Layout>
      <section className="pt-20 pb-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Bookkeeping Services for Small Businesses</h1>
            <p className="text-xl text-slate-600">
              Monthly bookkeeping, cleanup and practical support for your business records. Based in Tampa, Florida, and working remotely with clients across the United States.
            </p>
          </div>

          <div className="bg-blue-600 text-white rounded-3xl p-8 mb-10 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div><h2 className="text-2xl font-bold mb-2">Need regular support or a fresh start?</h2><p>Start with monthly bookkeeping, or discuss cleanup if your records are behind.</p></div>
            <Link to="/schedule" className="shrink-0 bg-white text-blue-700 rounded-xl px-6 py-3 font-semibold">Book a Free Consultation</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={<service.icon className="h-6 w-6" />}
                link={service.slug}
                color={idx % 3 === 0 ? "bg-blue-500" : idx % 3 === 1 ? "bg-indigo-500" : "bg-sky-500"}
              />
            ))}
          </div>
          <section className="mt-14 bg-blue-50 border border-blue-100 rounded-3xl p-7 sm:p-10" aria-labelledby="industry-services">
            <h2 id="industry-services" className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Bookkeeping for service business owners</h2>
            <p className="text-slate-700 mb-7 max-w-3xl">Bryan's experience running cleaning and handyman businesses informs how we discuss the accounts, invoices and expenses common to service businesses. Explore industry-specific bookkeeping questions and available support.</p>
            <div className="grid md:grid-cols-3 gap-5">
              <Link to="/bookkeeping-for-cleaning-businesses" className="block bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-500 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Bookkeeping for cleaning businesses</h3>
                <p className="text-slate-600 mb-3">Recurring customers, deposits, supplies and team-related records.</p>
                <span className="font-semibold text-blue-700 underline underline-offset-4">See cleaning business bookkeeping →</span>
              </Link>
              <Link to="/bookkeeping-for-contractors" className="block bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-500 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Bookkeeping for contractors and handymen</h3>
                <p className="text-slate-600 mb-3">Invoices, project materials, customer payments and vendor bills.</p>
                <span className="font-semibold text-blue-700 underline underline-offset-4">See contractor bookkeeping →</span>
              </Link>
              <Link to="/bookkeeping-for-real-estate-agents" className="block bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-500 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Bookkeeping for real estate agents</h3>
                <p className="text-slate-600 mb-3">Commissions, brokerage deposits, marketing costs and reports.</p>
                <span className="font-semibold text-blue-700 underline underline-offset-4">See real estate agent bookkeeping →</span>
              </Link>
            </div>
          </section>
          <div className="mt-12 text-center"><h2 className="text-2xl font-bold mb-3">Local connection. Remote convenience.</h2><p className="text-slate-600 mb-4">Work directly with Bryan from Tampa Bay, elsewhere in Florida or another U.S. state. Your scope is based on your records and business needs.</p><Link to="/service-areas" className="text-blue-600 font-semibold underline">Explore our service areas</Link></div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
