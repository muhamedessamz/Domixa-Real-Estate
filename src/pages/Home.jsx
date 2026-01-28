import React from 'react';
import Hero from '../sections/Hero';
import { useTranslation } from 'react-i18next';
import { properties } from '../data/mockData';
import { ArrowUpRight, Star, MapPin, Maximize, BedDouble, Bath, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="bg-white">
            <Hero />

            {/* Featured Properties - Editorial Grid */}
            <section className="section-premium">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                        <div className="max-w-2xl">
                            <span className="text-domixa-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">— {t('home.featured.badge')}</span>
                            <h2 className="text-6xl md:text-8xl font-serif text-domixa-dark italic leading-none">
                                Elite <span className="not-italic font-black text-domixa-gold uppercase tracking-tighter">{i18n.language === 'ar' ? 'المساكن' : 'Residences'}</span>
                            </h2>
                        </div>
                        <Link to="/properties" className="btn-elite bg-transparent border border-domixa-dark/10 text-domixa-dark hover:bg-domixa-dark hover:text-white rounded-full flex items-center group">
                            <span>{t('home.featured.explore')}</span>
                            <ArrowRight size={16} className="ml-2 rtl:mr-2 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">
                        {properties.slice(0, 3).map((property, idx) => (
                            <motion.div
                                key={property.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.2 }}
                                className="group relative flex flex-col"
                            >
                                {/* Image Wrapper */}
                                <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] mb-8">
                                    <img
                                        src={property.image}
                                        alt=""
                                        className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-domixa-dark/20 to-transparent"></div>

                                    {/* Premium Badge */}
                                    <div className="absolute top-8 left-8 rtl:right-8 rtl:left-auto">
                                        <span className="bg-white px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-domixa-dark shadow-sm">
                                            {property.type}
                                        </span>
                                    </div>

                                    {/* Action Reveal */}
                                    <Link to={`/property/${property.id}`} className="absolute bottom-10 right-10 rtl:left-10 rtl:right-auto w-14 h-14 bg-white rounded-full flex items-center justify-center text-domixa-dark opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl hover:bg-domixa-gold hover:text-white">
                                        <ArrowUpRight size={24} />
                                    </Link>
                                </div>

                                {/* Content matched to screenshot */}
                                <div className="px-4 space-y-3">
                                    <div className="flex items-center text-domixa-gold text-[10px] font-black uppercase tracking-[0.2em]">
                                        <MapPin size={14} className="mr-2 rtl:ml-2" />
                                        <span>{property.location[i18n.language]}</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-serif font-black text-domixa-dark leading-tight group-hover:text-domixa-gold transition-colors">
                                        {property.title[i18n.language]}
                                    </h3>

                                    <div className="flex items-center space-x-6 rtl:space-x-reverse pt-2 text-gray-400">
                                        <div className="flex items-center space-x-2">
                                            <BedDouble size={16} className="text-gray-300" />
                                            <span className="text-[10px] font-bold uppercase tracking-widest">{property.beds} {t('common.beds')}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Maximize size={16} className="text-gray-300" />
                                            <span className="text-[10px] font-bold uppercase tracking-widest">{property.area} {t('common.sqm')}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section - Luxury Split */}
            <section className="section-premium bg-domixa-dark overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-15deg] translate-x-1/2"></div>
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                    <div className="order-2 lg:order-1 relative group">
                        <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl scale-95 group-hover:scale-100 transition-transform duration-1000">
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                                alt="Architecture"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-10 -right-10 rtl:-left-10 rtl:-right-auto w-48 h-48 bg-domixa-gold flex flex-col items-center justify-center rounded-3xl shadow-2xl animate-float">
                            <p className="text-white text-5xl font-black">20</p>
                            <p className="text-white/70 text-[10px] uppercase font-bold tracking-widest">{t('home.about.stat_label')}</p>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 space-y-10">
                        <span className="text-domixa-gold font-bold uppercase tracking-[0.4em] text-[10px]">— {t('home.about.badge')}</span>
                        <h2 className="text-5xl md:text-7xl font-serif text-white italic leading-tight">{i18n.language === 'ar' ? 'صنع وجهات' : 'Crafting Iconic'} <br /> <span className="not-italic font-black text-domixa-gold uppercase tracking-tighter">{i18n.language === 'ar' ? 'أيقونية.' : 'Destinations.'}</span></h2>
                        <p className="text-white/50 text-xl leading-relaxed font-light italic">
                            "{t('home.about.description')}"
                        </p>
                        <div className="grid grid-cols-2 gap-12 pt-8">
                            <div>
                                <p className="text-white font-bold text-lg mb-2">{t('home.about.global_title')}</p>
                                <p className="text-white/40 text-sm">{t('home.about.global_desc')}</p>
                            </div>
                            <div>
                                <p className="text-white font-bold text-lg mb-2">{t('home.about.elite_title')}</p>
                                <p className="text-white/40 text-sm">{t('home.about.elite_desc')}</p>
                            </div>
                        </div>
                        <button className="btn-elite bg-domixa-gold text-domixa-dark rounded-full hover:bg-white transition-all">{t('home.about.cta')}</button>
                    </div>
                </div>
            </section>

            {/* CTA - Statement Section */}
            <section className="section-premium text-center">
                <div className="max-w-4xl mx-auto space-y-12">
                    <h2 className="text-4xl md:text-7xl font-serif text-domixa-dark italic">{i18n.language === 'ar' ? 'ابدأ' : 'Begin Your'} <span className="not-italic font-black text-domixa-gold uppercase tracking-tighter">{i18n.language === 'ar' ? 'رحلتك' : 'Journey'}</span></h2>
                    <p className="text-gray-400 text-xl font-light">{t('home.cta.description')}</p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <Link to="/contact" className="btn-elite rounded-full px-16">{t('home.cta.contact')}</Link>
                        <Link to="/properties" className="text-domixa-dark font-black uppercase text-xs tracking-widest hover:text-domixa-gold transition-colors">{t('home.cta.view_all')}</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
