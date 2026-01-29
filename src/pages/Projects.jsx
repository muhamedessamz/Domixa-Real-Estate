import React from 'react';
import { useTranslation } from 'react-i18next';
import { projects } from '../data/mockData';
import { ArrowUpRight, MapPin, Building2, Calendar, Layout, Info, Compass, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="pt-40 pb-32 bg-white min-h-screen">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                {/* Editorial Sub-Header */}
                <div className="flex flex-col lg:flex-row justify-between items-end mb-32 border-b border-gray-100 pb-20 gap-12">
                    <div className="max-w-3xl">
                        <span className="text-domixa-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">— {t('project.masterplan')}</span>
                        <h1 className="text-6xl md:text-8xl font-serif text-domixa-dark italic leading-none">{i18n.language === 'ar' ? 'هندسة' : 'Architecting'} <br /> <span className="not-italic font-black text-domixa-gold uppercase tracking-tighter">{i18n.language === 'ar' ? 'مراكز أيقونية.' : 'Iconic Hubs.'}</span></h1>
                    </div>
                    <div className="flex space-x-12 rtl:space-x-reverse pb-4">
                        <div className="text-right rtl:text-left">
                            <p className="text-5xl font-black text-domixa-dark">11</p>
                            <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mt-2">{t('project.header.active')}</p>
                        </div>
                        <div className="text-right rtl:text-left">
                            <p className="text-5xl font-black text-domixa-dark">45</p>
                            <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mt-2">{t('project.header.delivered')}</p>
                        </div>
                    </div>
                </div>

                {/* The Masterplan Experience (Misr Italia Idea) */}
                <section className="mb-40 relative group">
                    <div className="bg-domixa-dark rounded-[4rem] overflow-hidden min-h-[700px] relative flex items-center justify-center border-8 border-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]">
                        {/* This would be an interactive SVG map in a real app */}
                        <img
                            src="https://images.unsplash.com/photo-1541339907198-e08756edd81f?auto=format&fit=crop&w=1500&q=90"
                            className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[3s]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-domixa-dark via-transparent to-transparent"></div>

                        <div className="relative z-10 text-center space-y-12 max-w-2xl px-8">
                            <Compass size={64} className="text-domixa-gold mx-auto animate-pulse" />
                            <h2 className="text-5xl md:text-7xl font-serif text-white italic leading-tight">{i18n.language === 'ar' ? 'استكشف' : 'Explore the'} <br /> <span className="not-italic font-black text-domixa-gold uppercase tracking-tighter">{i18n.language === 'ar' ? 'المخطط العام.' : 'Masterplan.'}</span></h2>
                            <p className="text-white/40 text-lg font-light italic">{t('project.experience.desc')}</p>
                            <button className="btn-elite rounded-2xl bg-white text-domixa-dark hover:bg-domixa-gold transition-all">{t('project.launch_map')}</button>
                        </div>

                        {/* Information Dots Overlay */}
                        <div className="absolute top-1/4 right-1/4 group/dot">
                            <div className="w-4 h-4 bg-domixa-gold rounded-full animate-ping"></div>
                            <div className="absolute top-0 left-0 w-4 h-4 bg-domixa-gold rounded-full"></div>
                            <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white p-4 rounded-xl shadow-2xl opacity-0 group-hover/dot:opacity-100 transition-opacity w-48 text-center border border-gray-100">
                                <p className="text-[10px] font-black uppercase tracking-widest text-domixa-dark">{t('project.experience.district')}</p>
                                <p className="text-xs text-gray-400 italic">{t('project.experience.zone')}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Project Alternating Feed */}
                <div className="space-y-40">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 lg:gap-32 items-center`}
                        >
                            {/* Grand Image Container */}
                            <div className="flex-1 w-full relative group">
                                <div className="overflow-hidden rounded-[3rem] aspect-[4/3] relative shadow-2xl">
                                    <img src={project.image} alt="" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-domixa-dark/10 group-hover:bg-transparent transition-all duration-700"></div>
                                </div>
                                {/* Floating Status Detail */}
                                <div className="absolute -bottom-10 right-12 rtl:left-12 rtl:right-auto bg-white p-8 shadow-2xl rounded-3xl flex items-center space-x-6 rtl:space-x-reverse border border-gray-50 transform group-hover:translate-y-[-10px] transition-transform duration-500">
                                    <div className="bg-domixa-gold/10 p-4 rounded-2xl text-domixa-gold">
                                        <Calendar size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase font-black text-gray-300 tracking-[0.2em] mb-1">{t('project.feed.status')}</p>
                                        <p className="text-sm font-black text-domixa-dark uppercase">{project.status[i18n.language]}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Text Area */}
                            <div className="flex-1 space-y-10">
                                <div className="flex items-center space-x-3 rtl:space-x-reverse text-domixa-gold font-bold text-xs uppercase tracking-[0.3em]">
                                    <ShieldCheck size={18} />
                                    <span>{t('project.feed.quality')}</span>
                                </div>
                                <h2 className="text-5xl md:text-6xl font-serif font-black text-domixa-dark italic leading-tight">{project.name[i18n.language]}</h2>
                                <div className="flex items-center text-gray-400 space-x-3 rtl:space-x-reverse">
                                    <MapPin size={22} className="text-domixa-gold" />
                                    <span className="text-xl font-light italic">{project.location[i18n.language]}</span>
                                </div>
                                <p className="text-gray-500 text-lg leading-relaxed font-light">
                                    {t('project.feed.desc')}
                                </p>
                                <div className="pt-4 flex items-center space-x-8">
                                    <button className="btn-elite rounded-2xl flex items-center space-x-3 rtl:space-x-reverse">
                                        <span>{t('project.feed.dossier')}</span>
                                        <ArrowUpRight size={18} />
                                    </button>
                                    <div className="hidden lg:flex flex-col">
                                        <p className="text-2xl font-black text-domixa-dark">98%</p>
                                        <p className="text-[8px] font-black uppercase text-gray-300 tracking-widest">{t('project.feed.progress')}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Strategic Partners Section */}
            <section className="mt-40 section-premium bg-domixa-gray">
                <div className="max-w-[1400px] mx-auto text-center">
                    <span className="text-domixa-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">— {t('project.alliances.badge')}</span>
                    <h2 className="text-5xl font-serif text-domixa-dark italic mb-24">{t('project.alliances.title')}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-700 items-center">
                        <div className="font-serif text-3xl font-bold italic tracking-tighter">EMAAR.</div>
                        <div className="font-serif text-3xl font-bold italic tracking-tighter">MISR ITALIA.</div>
                        <div className="font-serif text-3xl font-bold italic tracking-tighter">DAMAC.</div>
                        <div className="font-serif text-3xl font-bold italic tracking-tighter">ALDAR.</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
