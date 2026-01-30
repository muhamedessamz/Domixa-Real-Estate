import React from 'react';
import { useTranslation } from 'react-i18next';
import { careers } from '../data/mockData';
import { Briefcase, MapPin, ArrowRight, BookOpen, Smile, Globe } from 'lucide-react';

const Careers = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="pt-32 pb-20 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mb-20 text-center md:text-start flex flex-col items-center md:items-start mx-auto md:mx-0">
                    <span className="text-domixa-gold font-bold uppercase tracking-widest text-sm mb-4 block">Join Our Team</span>
                    <h1 className="text-5xl font-black text-domixa-dark italic mb-8">Build Your Future at <span className="text-domixa-gold">Domixa</span></h1>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        We are always looking for visionary talent to join our mission in transforming the UAE real estate landscape. Explore a career where excellence is the standard.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
                    {[
                        { icon: Globe, title: "Global Environment", desc: "Work with 30+ nationalities in the heart of UAE." },
                        { icon: Smile, title: "Growth Mindset", desc: "Constant learning and professional development." },
                        { icon: BookOpen, title: "Health & Wellness", desc: "Comprehensive insurance and wellness programs." }
                    ].map((item, i) => (
                        <div key={i} className="bg-gray-50 p-10 rounded-[2.5rem] hover:bg-domixa-dark hover:text-white transition-all duration-500 group flex flex-col items-center text-center md:items-start md:text-start">
                            <item.icon size={40} className="text-domixa-gold mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold mb-4 italic">{item.title}</h3>
                            <p className="text-gray-500 group-hover:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="space-y-6">
                    <h2 className="text-3xl font-black text-domixa-dark italic mb-10 text-center md:text-start">Open Positions</h2>
                    {careers.map((job) => (
                        <div key={job.id} className="group bg-white border border-gray-100 p-8 rounded-[2rem] flex flex-col md:flex-row justify-between items-center hover:shadow-2xl transition-all duration-500 hover:border-domixa-gold gap-8">
                            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-start">
                                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-domixa-gold group-hover:bg-domixa-gold group-hover:text-white transition-all">
                                    <Briefcase size={24} />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xl font-bold text-domixa-dark">{job.title[i18n.language]}</h4>
                                    <div className="flex items-center justify-center md:justify-start gap-3 text-gray-400 text-sm">
                                        <span className="font-bold text-domixa-gold uppercase tracking-tighter">{job.department}</span>
                                        <span>•</span>
                                        <div className="flex items-center gap-1">
                                            <MapPin size={14} />
                                            <span>{job.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="flex items-center gap-3 text-domixa-dark font-black uppercase tracking-widest text-[10px] group-hover:text-domixa-gold transition-colors py-4 px-8 border border-gray-100 rounded-full md:border-none md:p-0">
                                <span>Apply Now</span>
                                <ArrowRight size={18} className="group-hover:translate-x-2 rtl:group-hover:-translate-x-2 transition-transform" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Careers;
