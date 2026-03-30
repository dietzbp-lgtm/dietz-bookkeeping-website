import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { FileText, Download, ExternalLink, Video, FileCheck, ArrowRight, X } from 'lucide-react';

const Resources = () => {
  const [activeForm, setActiveForm] = useState<{title: string, jotformId: string} | null>(null);

  const resources = [
    { 
      title: 'Tax Readiness & Documentation Guide', 
      type: 'PDF Guide', 
      size: 'Strategic Financial Organization',
      description: 'Prepare organized, audit-ready documentation before meeting with your tax professional. This guide helps ensure your income, expenses, and financial records are properly structured to support accurate filing and minimize delays.',
      features: [
        'Improve documentation accuracy',
        'Reduce compliance risk',
        'Support strategic tax planning'
      ],
      downloadUrl: 'https://drive.google.com/uc?export=download&id=1Vm9n9Jt6VpP4yXcU6wME2M8ahjb_VesB'
    },
    { 
      title: 'Smart Business Expense Guide', 
      type: 'PDF Guide', 
      size: 'Expense Categorization Framework',
      description: 'Understand how to properly categorize business expenses to maintain clean financial records and improve reporting clarity. Designed to reduce errors and improve year-round bookkeeping organization.',
      features: [
        'Clear expense classifications',
        'Improved Profit & Loss accuracy',
        'Better financial visibility'
      ]
    },
    { 
      title: 'Cash Flow Visibility Template', 
      type: 'Excel Template', 
      size: 'Financial Planning Tool',
      description: 'Track incoming revenue and outgoing expenses to maintain strong cash position awareness. This structured template helps business owners anticipate shortfalls and plan with confidence.',
      features: [
        'Monitor cash movement',
        'Prevent liquidity surprises',
        'Support smarter decisions'
      ]
    },
    { 
      title: 'Employee Financial Onboarding Checklist', 
      type: 'PDF Guide', 
      size: 'Payroll & Compliance Readiness',
      description: 'Ensure new hires are financially documented and properly structured before payroll begins. A practical checklist to reduce compliance risk and improve internal organization.',
      features: [
        'Organized onboarding process',
        'Reduced payroll errors',
        'Clear documentation trail'
      ]
    }
  ];

  const videos = [
    { 
      title: 'How to Add Your Accountant in QuickBooks Online', 
      duration: '1:45', 
      thumbnail: 'https://img.youtube.com/vi/0x_fWYYCgF4/maxresdefault.jpg',
      url: 'https://www.youtube.com/watch?v=0x_fWYYCgF4'
    }
  ];

  const forms = [
    { 
      title: 'New Client Intake Form', 
      type: 'Online Form', 
      size: 'Fill Now',
      jotformId: '260538313079054'
    },
    { title: 'W-9 Request Form', type: 'PDF Form', size: '0.8 MB' },
    { 
      title: 'Direct Deposit Authorization', 
      type: 'Online Form', 
      size: 'Fill Now',
      jotformId: '260538446299065'
    }
  ];

  return (
    <Layout>
      <section className="pt-24 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Resources</h1>
            <p className="text-xl text-slate-600">
              Professional tools and guides designed to help business owners maintain organized, audit-ready financial records.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Financial Resource Library */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Download className="h-6 w-6 text-blue-600" /> Financial Resource Library
              </h2>
              <div className="space-y-4">
                {resources.map((res, idx) => {
                  const CardContent = (
                    <div className="flex justify-between items-start">
                      <div className="flex items-start gap-4">
                        <div className="bg-white p-3 rounded-xl shadow-sm text-blue-500 shrink-0">
                          <FileText className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors text-lg">{res.title}</h3>
                          <p className="text-sm text-slate-500 font-medium">{res.type} • {res.size}</p>
                          
                          {'description' in res && (
                            <div className="mt-4 text-slate-600 text-sm leading-relaxed">
                              <p className="mb-3">{(res as any).description}</p>
                              {'features' in res && (
                                <ul className="space-y-2 mt-3">
                                  {(res as any).features.map((feature: string, fIdx: number) => (
                                    <li key={fIdx} className="flex items-start gap-2 text-slate-700">
                                      <span className="text-blue-500 font-bold shrink-0">✔</span> 
                                      <span>{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                      <Download className="h-5 w-5 text-slate-400 group-hover:text-blue-600 transition-colors mt-1 shrink-0" />
                    </div>
                  );

                  const className = "bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors group cursor-pointer block text-left w-full";

                  return 'downloadUrl' in res ? (
                    <a key={idx} href={(res as any).downloadUrl} target="_blank" rel="noopener noreferrer" className={className}>
                      {CardContent}
                    </a>
                  ) : (
                    <button key={idx} className={className}>
                      {CardContent}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Videos and Forms */}
            <div className="space-y-12">
              {/* Instruction Videos */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Video className="h-6 w-6 text-blue-600" /> Instruction Videos
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  {videos.map((video, idx) => (
                    <a 
                      key={idx} 
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group cursor-pointer block"
                    >
                      <div className="relative rounded-2xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-all">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title} 
                          className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform">
                            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-blue-600 border-b-[8px] border-b-transparent ml-1"></div>
                          </div>
                        </div>
                        <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md font-medium">
                          {video.duration}
                        </span>
                      </div>
                      <h3 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors mb-1">{video.title}</h3>
                      <p className="text-slate-500 text-sm">Watch Tutorial</p>
                    </a>
                  ))}
                </div>
              </div>

              {/* Forms */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <FileCheck className="h-6 w-6 text-blue-600" /> Forms
                </h2>
                <div className="space-y-4">
                  {forms.map((form, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => 'jotformId' in form ? setActiveForm({title: form.title, jotformId: form.jotformId as string}) : null}
                      className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all flex items-start gap-4 group cursor-pointer"
                    >
                      <div className="bg-white p-3 rounded-xl shadow-sm text-blue-500 shrink-0">
                        <FileCheck className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">{form.title}</h3>
                        <p className="text-sm text-slate-500 mb-3">{form.type} • {form.size}</p>
                        <span className="text-sm font-medium text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                          {'jotformId' in form ? 'Fill Form' : 'Download Form'} <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <p className="text-lg text-slate-700 font-medium">
              Need assistance implementing these tools? <Link to="/contact" className="text-blue-600 hover:text-blue-700 underline decoration-2 underline-offset-2">Schedule a consultation</Link> to ensure your books are organized correctly year-round.
            </p>
          </div>
        </div>
      </section>

      {/* Form Modal */}
      {activeForm && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-4xl h-[90vh] flex flex-col shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center p-4 border-b border-slate-100">
              <h3 className="font-bold text-lg">{activeForm.title}</h3>
              <button 
                onClick={() => setActiveForm(null)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-slate-500" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-0 bg-slate-50 rounded-b-2xl">
              <iframe
                src={`https://form.jotform.com/${activeForm.jotformId}`}
                className="w-full h-full min-h-[800px] border-none"
                title="JotForm"
              />
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Resources;
