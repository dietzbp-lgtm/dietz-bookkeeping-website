import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';
import { motion } from 'motion/react';

interface ServicePageProps {
  service: {
    title: string;
    description: string;
    icon: any;
    image?: string;
    content: {
      heading: string;
      subheading: string;
      benefits: string[];
      details: string;
      cta: string;
    };
  };
}

const ServicePage: React.FC<ServicePageProps> = ({ service }) => {
  const Icon = service.icon;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={false}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-20 h-20 bg-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-blue-500/30 text-white"
            >
              <Icon className="h-10 w-10" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={false}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {service.content.heading}
              </h2>
              <p className="text-lg text-blue-600 font-medium mb-6">
                {service.content.subheading}
              </p>
              <div className="prose prose-lg text-slate-600 mb-8">
                <p>{service.content.details}</p>
              </div>

              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                <h3 className="font-semibold text-slate-900 mb-4">Key Benefits</h3>
                <ul className="space-y-4">
                  {service.content.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={false}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-[2.5rem] transform rotate-3 scale-105 opacity-50" />
              <div className="relative bg-white rounded-[2rem] shadow-2xl p-8 border border-slate-100">
                <div className="aspect-video bg-slate-100 rounded-xl mb-6 overflow-hidden">
                  <img
                    src={service.image || '/images/dietzbookeepingabout.webp'}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to get started?</h3>
                  <p className="text-slate-600 mb-8">
                    Schedule a free consultation to discuss how our {service.title} services can help your business grow.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center w-full bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-all transform hover:scale-[1.02]"
                  >
                    {service.content.cta} <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stop stressing about your books.</h2>
          <p className="text-xl text-slate-300 mb-10">
            Let us handle the numbers so you can focus on what you do best—running your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              Book Your Consultation
            </Link>
            <Link
              to="/services"
              className="bg-transparent border border-slate-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicePage;
