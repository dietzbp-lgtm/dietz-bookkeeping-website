import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Star, Quote } from 'lucide-react';
import Layout from '../components/Layout';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import { motion } from 'motion/react';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                Tampa's Premier Bookkeeping Service
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-8 leading-tight">
                Focus on your business. <br />
                <span className="text-blue-600">We'll handle the books.</span>
              </h1>
              
              {/* Dark Tile Card */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-blue-500/30 mx-auto max-w-3xl mb-10 relative overflow-hidden">
                {/* Subtle background effect for the tile */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -ml-16 -mb-16"></div>
                
                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Welcome to Dietz Bookkeeping Services</h2>
                  <p className="text-lg md:text-xl text-blue-50 leading-relaxed mb-8">
                    Imagine an extra $7,500 in your business's budget each year. Our comprehensive bookkeeping services are designed to do just that. We'll meticulously manage your financial records, ensuring accuracy, compliance, and identifying opportunities for cost savings. From expense tracking to reporting, we've got you covered, so you can focus on what you do best – growing your business.
                  </p>
                  
                  <Link
                    to="/contact"
                    className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-blue-50 transition-transform hover:scale-105 uppercase tracking-wide"
                  >
                    Schedule an Appointment
                  </Link>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/services"
                  className="ios-btn bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-50 transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Abstract Background Elements */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      </section>

      {/* Cleanup & Catch-Up Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] rotate-3 opacity-5 group-hover:rotate-6 transition-transform duration-500"></div>
                <img
                  src="https://i.postimg.cc/9MzF84FH/Dietzbookeepingabout.jpg"
                  alt="Bryan Dietz"
                  className="relative rounded-[2.5rem] shadow-2xl w-full max-w-md mx-auto object-cover transform group-hover:-translate-y-2 transition-transform duration-500"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Bookkeeping, Cleanup & Catch-Up Services
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Our bookkeeping cleanup and catch-up services are specialized offering designed to help businesses bring their financial records up to date, resolve discrepancies, and establish a solid foundation for accurate and organized bookkeeping moving forward. These services are ideal for businesses that have fallen behind on their bookkeeping, have disorganized records, or are transitioning to a new bookkeeping system.
                </p>
                <p>
                  At <span className="font-bold text-slate-900">Dietz Bookkeeping</span>, we understand that life as a business owner can be hectic, and bookkeeping often takes a backseat to day-to-day operations. That's why we offer comprehensive cleanup and catch-up services to help you regain control of your finances and ensure compliance with tax regulations.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to="/services"
                  className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-transform hover:scale-105"
                >
                  Discover More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Accuracy Guaranteed', desc: 'We double-check every transaction so you never have to worry about errors.' },
              { title: 'Tax-Ready Financials', desc: 'Your books will be clean and organized, making tax season a breeze for your CPA.' },
              { title: 'Local Tampa Experts', desc: 'We understand the local business landscape and are just a phone call away.' }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-8 rounded-3xl bg-slate-50 border border-slate-100"
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Financial Solutions</h2>
            <p className="text-lg text-slate-600">Everything you need to keep your business financially healthy.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={<service.icon className="h-6 w-6" />}
                  link={service.slug}
                  color={idx % 2 === 0 ? "bg-blue-500" : "bg-indigo-500"}
                />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Client Feedback & Reviews</h2>
            <p className="text-xl text-slate-600">
              Discover How Our Expert Bookkeeping Services Have Helped Clients Streamline Their Finances and Achieve Greater Success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Lissandra P.', 
                role: 'Dazzle by Lis (Cleaning Service)', 
                image: 'https://i.postimg.cc/C1dLPZL0/Lissandra_P.jpg',
                text: "Working with Dietz Bookkeeping has been an absolute game-changer for my cleaning service, Dazzle by Lis! As a small business owner, managing my books was always a challenge, but thanks to their personalized QuickBooks training, I now feel confident and empowered to handle my finances. The team took the time to explain everything in detail, walking me through the system step-by-step. I can now efficiently track expenses, invoicing, and payments, which has freed up more time to focus on growing my business. I can't recommend their services enough – they truly care about your success!" 
              },
              { 
                name: 'Jordan Matthews', 
                role: 'MJ Realty (Realtor)', 
                image: 'https://picsum.photos/seed/jordan/200/200',
                text: "I've been working with Dietz Bookkeeping for several months now, and their monthly bookkeeping service has been invaluable for my real estate business, Skyline Realty. As a busy realtor, keeping track of commissions, expenses, and taxes was overwhelming before they stepped in. Their team is incredibly professional, and they always ensure my books are up-to-date and accurate. They've saved me so much time, allowing me to focus on what I do best – helping my clients find their dream homes. I couldn't run my business without them!" 
              },
              { 
                name: 'Nelson Silva', 
                role: 'Nsilva Construction Inc. (Construction Company)', 
                image: 'https://i.postimg.cc/TwhY7yY6/Nelson_Silva.jpg',
                text: "We hired Dietz Bookkeeping for a much-needed cleanup of our company's financial records, and I am beyond impressed with the results. As a construction business, we deal with numerous invoices, contractors, and projects, so our books were a bit of a mess. The team at Dietz Bookkeeping took the time to carefully go through everything, correct discrepancies, and organize our financials in a way that makes sense. Their attention to detail was incredible, and I now feel much more confident about the state of our finances. Highly recommend their services for any business in need of bookkeeping help!" 
              }
            ].map((testimonial, idx) => (
              <div key={idx} className={`bg-white p-8 rounded-3xl relative flex flex-col ${idx === 1 ? 'shadow-2xl scale-105 z-10 border-t-4 border-blue-500' : 'shadow-lg border border-slate-100'}`}>
                <div className="flex gap-1 text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
                <p className="text-slate-600 mb-8 text-sm leading-relaxed flex-grow">{testimonial.text}</p>
                <div className="flex items-center gap-4 mt-auto">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-slate-100"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 text-blue-100">
                  <Quote className="h-10 w-10 fill-current" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to take control of your finances?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Schedule a free consultation today and see how we can help your business thrive.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-blue-50 transition-transform hover:scale-105"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
