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
            <section className="relative pt-32 pb-20 bg-domixa-dark overflow-hidden min-h-[700px] flex items-center">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-domixa-gold/20 via-transparent to-transparent"></div>
                </div>

                <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-7"
                    >
                        <span className="text-domixa-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">— {t('investors.subtitle')}</span>
                        <h1 className={`text-5xl md:text-8xl ${i18n.language === 'ar' ? 'font-arabic-title font-black leading-tight' : 'font-serif italic leading-[0.8]'} text-white mb-10`}>
                            {t('investors.hero_title.part1')} <br />
                            <span className={`not-italic font-black text-domixa-gold uppercase tracking-tighter ${i18n.language === 'ar' ? 'text-6xl md:text-7xl font-black' : ''}`}>
                                {t('investors.hero_title.part2')}
                            </span>
                        </h1>
                        <p className="text-white/50 text-xl font-light italic max-w-xl">
                            "{t('investors.narrative')}"
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative lg:col-span-5 hidden lg:block"
                    >
                        {/* Premium Architectural Image Box */}
                        <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 bg-domixa-gold/5">
                            <img
                                src="https://images.pexels.com/photos/15693277/pexels-photo-15693277/free-photo-of-dubai-downtown-at-night.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                alt="Dubai Downtown"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-domixa-dark/60 via-transparent to-transparent"></div>
                        </div>

                        {/* Floating Shield Badge */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-8 -left-8 bg-white/5 backdrop-blur-3xl p-6 rounded-[2rem] border border-white/20 shadow-2xl flex items-center gap-4"
                        >
                            <div className="w-12 h-12 rounded-xl bg-domixa-gold/20 flex items-center justify-center text-domixa-gold">
                                <ShieldCheck size={24} />
                            </div>
                            <div>
                                <p className="text-white font-black text-[9px] uppercase tracking-widest leading-none mb-1">{t('investors.fiduciary.risk')}</p>
                                <p className="text-white/40 text-[8px] uppercase font-bold tracking-widest leading-none">{t('investors.fiduciary.integrity')}</p>
                            </div>
                        </motion.div>
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
                                className="p-8 bg-domixa-gray rounded-[2.5rem] border border-transparent hover:border-domixa-gold/20 transition-all group"
                            >
                                <p className="text-gray-400 text-[10px] uppercase font-black tracking-widest mb-6">{stat.label[i18n.language]}</p>
                                <div className="flex items-baseline gap-2">
                                    <h3 className="text-4xl font-black text-domixa-dark group-hover:text-domixa-gold transition-colors">{stat.value[i18n.language]}</h3>
                                    {stat.unit && (
                                        <span className="text-[9px] text-gray-500 font-black uppercase whitespace-nowrap">{stat.unit[i18n.language]}</span>
                                    )}
                                    <div className="flex-1"></div>
                                    {stat.trend === 'up' && <TrendingUp size={18} className="text-green-500 flex-shrink-0" />}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Governance Section */}
            <section className="bg-domixa-gray py-40 overflow-hidden relative">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <span className="text-domixa-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">— {t('investors.fiduciary.title')}</span>
                        <h2 className="text-5xl md:text-7xl font-serif text-domixa-dark italic leading-tight mb-12">{i18n.language === 'ar' ? 'تميز' : 'Fiduciary'} <br /> <span className="not-italic font-black text-domixa-gold uppercase tracking-tighter">{i18n.language === 'ar' ? 'ائتماني.' : 'Excellence.'}</span></h2>
                        <div className="space-y-8">
                            {[
                                { icon: ShieldCheck, title: t('investors.fiduciary.risk'), desc: t('investors.fiduciary.risk_desc') },
                                { icon: Landmark, title: t('investors.fiduciary.legal'), desc: t('investors.fiduciary.legal_desc') },
                                { icon: Users, title: t('investors.fiduciary.users'), desc: t('investors.fiduciary.users_desc') }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-2xl bg-domixa-dark/5 flex items-center justify-center text-domixa-gold flex-shrink-0">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-domixa-dark font-bold mb-2 uppercase tracking-widest text-xs">{item.title}</h4>
                                        <p className="text-gray-500 text-sm font-light italic">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-[4rem] bg-gradient-to-br from-domixa-gold/20 to-transparent p-1">
                            <div className="w-full h-full rounded-[4rem] overflow-hidden bg-white shadow-2xl flex items-center justify-center p-20 text-center">
                                <div>
                                    <h3 className="text-domixa-dark text-3xl font-serif italic mb-8">{t('investors.reports.title')}</h3>
                                    <button className="btn-elite bg-domixa-dark text-white rounded-full hover:bg-domixa-gold flex items-center justify-center mx-auto transition-all">
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
