import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { TrendingUp, PieChart, ShieldCheck, Download, Users, Landmark } from 'lucide-react';
import { investorStats } from '../data/mockData';

const Investors = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="bg-white min-h-screen">
            {/* Institutional Hero */}
            <section className="relative pt-40 pb-32 bg-domixa-dark overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-domixa-gold/20 via-transparent to-transparent"></div>
                </div>

                <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="max-w-4xl"
                    >
                        <span className="text-domixa-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">— {t('investors.subtitle')}</span>
                        <h1 className="text-6xl md:text-9xl font-serif text-white italic leading-[0.8] mb-12">
                            {i18n.language === 'ar' ? 'حوكمة' : 'Institutional'} <br /> <span className="not-italic font-black text-domixa-gold uppercase tracking-tighter">{i18n.language === 'ar' ? 'مؤسسية.' : 'Governance.'}</span>
                        </h1>
                        <p className="text-white/50 text-2xl font-light italic max-w-2xl">
                            "{t('investors.narrative')}"
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Performance Metrics */}
            <section className="section-premium">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                        <div>
                            <span className="text-domixa-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">— {t('investors.performance_title')}</span>
                            <h2 className="text-5xl md:text-7xl font-serif text-domixa-dark italic">{i18n.language === 'ar' ? 'كفاءة' : 'Financial'} <span className="not-italic font-black text-domixa-gold uppercase tracking-tighter">{i18n.language === 'ar' ? 'مالية.' : 'Velocity.'}</span></h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {investorStats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-12 bg-domixa-gray rounded-[3rem] border border-transparent hover:border-domixa-gold/20 transition-all group"
                            >
                                <p className="text-gray-400 text-[10px] uppercase font-black tracking-widest mb-6">{stat.label[i18n.language]}</p>
                                <div className="flex items-baseline space-x-4 rtl:space-x-reverse">
                                    <h3 className="text-5xl font-black text-domixa-dark group-hover:text-domixa-gold transition-colors">{stat.value}</h3>
                                    {stat.trend === 'up' && <TrendingUp size={20} className="text-green-500" />}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Governance Section */}
            <section className="bg-domixa-dark py-40 overflow-hidden relative">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <span className="text-domixa-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">— {t('investors.fiduciary.title')}</span>
                        <h2 className="text-5xl md:text-7xl font-serif text-white italic leading-tight mb-12">{i18n.language === 'ar' ? 'تميز' : 'Fiduciary'} <br /> <span className="not-italic font-black text-domixa-gold uppercase tracking-tighter">{i18n.language === 'ar' ? 'ائتماني.' : 'Excellence.'}</span></h2>
                        <div className="space-y-8">
                            {[
                                { icon: ShieldCheck, title: t('investors.fiduciary.risk'), desc: t('investors.fiduciary.risk_desc') },
                                { icon: Landmark, title: t('investors.fiduciary.legal'), desc: t('investors.fiduciary.legal_desc') },
                                { icon: Users, title: t('investors.fiduciary.users'), desc: t('investors.fiduciary.users_desc') }
                            ].map((item, i) => (
                                <div key={i} className="flex space-x-6 rtl:space-x-reverse items-start">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-domixa-gold flex-shrink-0">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">{item.title}</h4>
                                        <p className="text-white/40 text-sm font-light italic">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-[4rem] bg-gradient-to-br from-domixa-gold/20 to-transparent p-1">
                            <div className="w-full h-full rounded-[4rem] overflow-hidden bg-domixa-dark flex items-center justify-center p-20 text-center">
                                <div>
                                    <h3 className="text-white text-3xl font-serif italic mb-8">{t('investors.reports.title')}</h3>
                                    <button className="btn-elite bg-domixa-gold text-domixa-dark rounded-full hover:bg-white flex items-center transition-all">
                                        <Download size={16} className="mr-3 rtl:ml-3" />
                                        <span>{t('investors.reports.cta')}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Investors;
