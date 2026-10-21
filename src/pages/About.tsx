import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      <section className="pt-24 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Image and Badges */}
            <div
              className="lg:col-span-5 flex flex-col gap-8"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200">
                <img
                  src="/images/dietzbookeepingabout.webp"
                  alt="Bryan Dietz"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Badges */}
              <div className="grid grid-cols-4 gap-4">
                <img src="/images/level-1.webp" alt="QuickBooks Level 1" className="w-full h-auto object-contain" />
                <img src="/images/level-2.webp" alt="QuickBooks Level 2" className="w-full h-auto object-contain" />
                <img src="/images/payroll.webp" alt="QuickBooks Payroll" className="w-full h-auto object-contain" />
                <img src="/images/gold-tier-badge.webp" alt="QuickBooks Gold ProAdvisor" className="w-full h-auto object-contain" />
              </div>
            </div>

            {/* Right Column: Bio Text */}
            <div
              className="lg:col-span-7 space-y-6"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Meet Bryan Dietz <br />
                <span className="text-blue-600">Founder of Dietz Bookkeeping</span>
              </h1>

              <div className="prose prose-lg text-slate-600 space-y-6">
                <p>
                  With over 20 years of hands-on entrepreneurial experience, Bryan Dietz is the founder and driving force behind <strong>Dietz Bookkeeping</strong>, a professional bookkeeping service dedicated to helping small businesses and entrepreneurs manage their finances with precision and care.
                </p>
                <p>
                  Bryan's journey began with 15 successful years as the owner of a thriving cleaning company, where he mastered the art of managing operations, budgets, and client relationships. He later expanded his expertise by running a handyman business for 5 years, further honing his skills in project management, cost tracking, and financial oversight. These experiences gave Bryan a deep understanding of the challenges small business owners face, particularly when it comes to maintaining accurate financial records while juggling the demands of day-to-day operations.
                </p>
                <p>
                  Now, Bryan is channeling his passion for organization and numbers into <strong>Dietz Bookkeeping</strong>, where he provides tailored bookkeeping solutions designed to simplify financial management for businesses. His firsthand experience as a business owner allows him to approach bookkeeping with a unique perspective, ensuring that his clients receive not only accurate and reliable services but also practical insights to help their businesses thrive.
                </p>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-7">
                <h2 className="text-xl font-bold text-slate-900 mb-3">Bookkeeping informed by real small-business experience</h2>
                <p className="text-slate-700 leading-relaxed mb-4">Explore how Bryan's background running service businesses informs conversations about the records and reporting needs of different owners.</p>
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  <Link to="/bookkeeping-for-cleaning-businesses" className="font-semibold text-blue-700 underline underline-offset-4 hover:text-blue-900">Bookkeeping for cleaning businesses</Link>
                  <Link to="/bookkeeping-for-contractors" className="font-semibold text-blue-700 underline underline-offset-4 hover:text-blue-900">Bookkeeping for contractors and handymen</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
