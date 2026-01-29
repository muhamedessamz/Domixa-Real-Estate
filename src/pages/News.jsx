import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Tag, ChevronRight } from 'lucide-react';
import { news } from '../data/mockData';

const News = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="bg-white min-h-screen">
            {/* Editorial Hero */}
            <section className="pt-40 pb-20 bg-domixa-gray">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <span className="text-domixa-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">— {t('news.subtitle')}</span>
                    <h1 className="text-6xl md:text-9xl font-serif text-domixa-dark italic leading-[0.8] mb-20">
                        {i18n.language === 'ar' ? 'المنصة' : 'The Real Estate'} <br /> <span className="not-italic font-black text-domixa-gold uppercase tracking-tighter">{i18n.language === 'ar' ? 'الإخبارية.' : 'Dispatch.'}</span>
                    </h1>

                    {/* Featured Story */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-[4rem] overflow-hidden shadow-2xl items-center"
                    >
                        <div className="aspect-[4/3] overflow-hidden">
                            <img src={news[0].image} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-12 lg:p-20 space-y-8">
                            <div className="flex items-center gap-4 text-domixa-gold text-[10px] font-black uppercase tracking-widest">
                                <Tag size={14} />
                                <span>{t('news.featured.badge')} — {news[0].category[i18n.language]}</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-black text-domixa-dark leading-tight italic">
                                {news[0].title[i18n.language]}
                            </h2>
                            <p className="text-gray-400 text-lg font-light italic leading-relaxed">
                                {t('news.featured.description')}
                            </p>
                            <div className="flex items-center gap-6 pt-8">
                                <button className="btn-elite rounded-full px-12">{t('news.featured.cta')}</button>
                                <span className="text-gray-300 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                    <Calendar size={14} />
                                    {news[0].date}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* News Grid */}
            <section className="section-premium">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex justify-between items-end mb-24">
                        <div>
                            <span className="text-domixa-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">— {t('news.latest_title')}</span>
                            <h2 className="text-5xl font-serif text-domixa-dark italic">{i18n.language === 'ar' ? 'آخر' : 'Recent'} <span className="not-italic font-black text-domixa-gold uppercase tracking-tighter">{i18n.language === 'ar' ? 'المستجدات.' : 'Updates.'}</span></h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                        {news.slice(1).map((item, idx) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-xl mb-8 relative">
                                    <img src={item.image} alt="" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-domixa-dark/20 group-hover:bg-transparent transition-colors"></div>
                                    <div className="absolute bottom-6 left-6 rtl:right-6 rtl:left-auto flex items-center gap-3">
                                        <span className="bg-white/95 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-domixa-dark shadow-sm">
                                            {item.category[i18n.language]}
                                        </span>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-serif font-black text-domixa-dark group-hover:text-domixa-gold transition-colors leading-tight mb-4 italic">
                                    {item.title[i18n.language]}
                                </h3>
                                <div className="flex justify-between items-center text-gray-400">
                                    <span className="text-[10px] font-bold uppercase tracking-widest">{item.date}</span>
                                    <ArrowUpRight size={18} className="text-domixa-gold opacity-0 group-hover:opacity-100 transition-all" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="section-premium bg-domixa-dark text-center overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-domixa-gold/10 via-transparent to-transparent"></div>
                <div className="max-w-3xl mx-auto relative z-10 space-y-12">
                    <h2 className="text-4xl md:text-6xl font-serif text-white italic leading-tight">{i18n.language === 'ar' ? 'اشتراك' : 'Elite'} <span className="not-italic font-black text-domixa-gold uppercase tracking-tighter">{i18n.language === 'ar' ? 'النخبة.' : 'Subscription.'}</span></h2>
                    <p className="text-white/40 text-xl font-light italic">{t('news.newsletter.description')}</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <input type="email" placeholder={t('news.newsletter.placeholder')} className="bg-white/5 border border-white/10 rounded-full px-8 py-4 text-white focus:outline-none focus:border-domixa-gold transition-all min-w-[300px]" />
                        <button className="btn-elite bg-domixa-gold text-domixa-dark rounded-full hover:bg-white transition-all">{t('news.newsletter.cta')}</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default News;
