import React from 'react';
import Layout from '../components/Layout';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

const Services = () => {
  return (
    <Layout>
      <section className="pt-20 pb-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Services</h1>
            <p className="text-xl text-slate-600">
              Comprehensive bookkeeping solutions tailored to your business needs.
            </p>
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
        </div>
      </section>
    </Layout>
  );
};

export default Services;
