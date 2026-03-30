import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'motion/react';

const About = () => {
  return (
    <Layout>
      <section className="pt-24 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Image and Badges */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col gap-8"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200">
                <img 
                  src="https://i.postimg.cc/9MzF84FH/Dietzbookeepingabout.jpg" 
                  alt="Bryan Dietz" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Badges */}
              <div className="grid grid-cols-4 gap-4">
                <img src="https://i.postimg.cc/fLkT23TT/level-1.png" alt="QuickBooks Level 1" className="w-full h-auto object-contain" />
                <img src="https://i.postimg.cc/xCqTxkTr/Level_2.png" alt="QuickBooks Level 2" className="w-full h-auto object-contain" />
                <img src="https://i.postimg.cc/d1DtH7tQ/payroll.png" alt="QuickBooks Payroll" className="w-full h-auto object-contain" />
                <img src="https://i.postimg.cc/QtVx4Bxh/Gold_Tier_Badge.png" alt="QuickBooks Gold ProAdvisor" className="w-full h-auto object-contain" />
              </div>
            </motion.div>

            {/* Right Column: Bio Text */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 space-y-6"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Professional Bio for Bryan Dietz - <br />
                <span className="text-blue-600">Dietz Bookkeeping</span>
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
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
