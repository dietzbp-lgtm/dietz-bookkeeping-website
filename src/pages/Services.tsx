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
            <Link to="/contact#schedule" className="shrink-0 bg-white text-blue-700 rounded-xl px-6 py-3 font-semibold">Book a Free Consultation</Link>
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
          <div className="mt-12 text-center"><h2 className="text-2xl font-bold mb-3">Local connection. Remote convenience.</h2><p className="text-slate-600 mb-4">Work directly with Bryan from Tampa Bay, elsewhere in Florida or another U.S. state. Your scope is based on your records and business needs.</p><Link to="/service-areas" className="text-blue-600 font-semibold underline">Explore our service areas</Link></div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
