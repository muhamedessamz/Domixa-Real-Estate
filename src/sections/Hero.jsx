import React from 'react';
import { useTranslation } from 'react-i18next';
import { Search, MapPin, Waves, ArrowRight, Play, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="relative h-screen min-h-[900px] w-full flex items-center justify-center overflow-hidden bg-domixa-dark">
            {/* Background with multiple layering for depth */}
            <div className="absolute inset-0 z-0">
                <motion.img
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "easeOut" }}
                    src="https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&w=2000&q=90"
                    alt="Dubai Skyline"
                    className="w-full h-full object-cover opacity-60 scale-110 animate-slow-zoom"
                />
                {/* Cinematic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-domixa-dark via-domixa-dark/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-domixa-dark/20 to-domixa-dark"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            </div>

            {/* Main Content Layout */}
            <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-20 pt-52 lg:pt-24">

                {/* Primary Narrative */}
                <div className="lg:col-span-8 space-y-8 lg:space-y-12 flex flex-col items-center text-center lg:items-start lg:text-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-6 mt-12 lg:mt-0"
                    >
                        <span className="bg-domixa-gold/10 text-domixa-gold px-6 py-2 rounded-full border border-domixa-gold/20 text-[10px] font-black uppercase tracking-[0.5em] backdrop-blur-md">
                            {t('hero.title_badge')}
                        </span>
                    </motion.div>

                    <div className="space-y-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className={`text-4xl sm:text-5xl md:text-9xl ${i18n.language === 'ar' ? 'font-arabic-title font-black leading-tight' : 'font-serif italic leading-[0.8]'} text-white mb-8 lg:mb-12`}
                        >
                            {t('hero.title_part1')} <br />
                            <span className={`not-italic font-black text-domixa-gold uppercase tracking-tighter ${i18n.language === 'ar' ? 'text-5xl sm:text-6xl md:text-8xl font-black' : ''}`}>
                                {t('hero.title_part2')}
                            </span>
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-xl md:text-2xl text-white/50 max-w-2xl font-light leading-relaxed italic mx-auto lg:mx-0"
                    >
                        {t('hero.description')}
                    </motion.p>

                    {/* Elite Integrated Search */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="hidden md:flex bg-white/5 backdrop-blur-3xl p-3 rounded-[2.5rem] border border-white/10 shadow-2xl max-w-4xl group"
                    >
                        <div className="flex-1 grid grid-cols-3 divide-x rtl:divide-x-reverse divide-white/10 h-20 items-center">
                            <div className="px-8 cursor-pointer hover:bg-white/5 transition-all rounded-l-[1.5rem] rtl:rounded-r-[1.5rem] rtl:rounded-l-none h-full flex flex-col justify-center">
                                <p className="text-[10px] text-white/40 uppercase font-black tracking-widest mb-1">{t('hero.fields.region')}</p>
                                <p className="text-white font-bold flex items-center gap-2">{t('hero.fields.region_val')} <MapPin size={12} className="text-domixa-gold" /></p>
                            </div>
                            <div className="px-8 cursor-pointer hover:bg-white/5 transition-all h-full flex flex-col justify-center">
                                <p className="text-[10px] text-white/40 uppercase font-black tracking-widest mb-1">{t('hero.fields.asset_type')}</p>
                                <p className="text-white font-bold">{t('hero.fields.asset_val')}</p>
                            </div>
                            <div className="px-8 cursor-pointer hover:bg-white/5 transition-all h-full flex flex-col justify-center">
                                <p className="text-[10px] text-white/40 uppercase font-black tracking-widest mb-1">{t('hero.fields.price_range')}</p>
                                <p className="text-white font-bold">{t('hero.fields.price_val')}</p>
                            </div>
                        </div>
                        <button className="h-20 px-12 bg-domixa-gold text-domixa-dark rounded-[1.5rem] font-black uppercase text-xs tracking-widest flex items-center gap-4 shadow-2xl hover:bg-white transition-all group">
                            <Search size={20} />
                            <span>{t('hero.search_btn')}</span>
                        </button>
                    </motion.div>

                    {/* Mobile CTA */}
                    <div className="flex md:hidden flex-col gap-4">
                        <button className="btn-elite rounded-2xl w-full py-6">{t('hero.cta.view')}</button>
                        <button className="py-6 border border-white/10 text-white rounded-2xl font-bold uppercase tracking-widest text-[10px] backdrop-blur-xl">{t('hero.cta.contact')}</button>
                    </div>
                </div>

                {/* Visual Anchor / Stats Area */}
                <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center space-y-16 mt-4 lg:mt-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className="bg-white/5 backdrop-blur-2xl p-6 lg:p-10 rounded-2xl lg:rounded-[3rem] border border-white/10 shadow-2xl space-y-6 lg:space-y-8 w-full max-w-[280px] lg:max-w-sm hover-lift"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-domixa-gold/20 rounded-2xl flex items-center justify-center text-domixa-gold">
                                <Award size={20} className="lg:w-6 lg:h-6" />
                            </div>
                            <p className="text-white font-serif italic text-sm lg:text-lg">{t('hero.award')}</p>
                        </div>
                        <div className="h-px bg-white/10 w-full"></div>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <p className="text-xl lg:text-2xl font-black text-white">{t('hero.sales_vol_val')}</p>
                                <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest">{t('hero.sales_vol')}</p>
                            </div>
                            <div>
                                <p className="text-xl lg:text-2xl font-black text-white">{t('hero.asset_units_val')}</p>
                                <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest">{t('hero.asset_units')}</p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="hidden lg:flex flex-col items-center gap-6">
                        <button className="w-20 h-20 bg-white/5 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/10 hover:bg-domixa-gold hover:text-domixa-dark transition-all duration-500 shadow-2xl group">
                            <Play size={28} fill="currentColor" />
                        </button>
                        <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">{t('hero.watch_film')}</p>
                    </div>
                </div>
            </div>

            {/* Floating Indicators */}
            <div className="absolute left-12 rtl:right-12 rtl:left-auto bottom-12 hidden lg:flex flex-col space-y-8 text-white/20">
                <span className={`${i18n.language === 'ar' ? '-rotate-90' : 'rotate-90'} origin-left text-[10px] font-black uppercase tracking-[0.5em] whitespace-nowrap`}>
                    {t('hero.follow')} ——
                </span>
                <div className="h-12 w-px bg-white/10 mx-auto"></div>
            </div>

            {/* Sophisticated Scroll Guide */}
            <div className="absolute bottom-16 right-12 rtl:left-12 rtl:right-auto hidden lg:flex flex-col items-center space-y-4">
                <div className="h-20 w-[1px] bg-gradient-to-b from-transparent via-domixa-gold to-transparent relative">
                    <motion.div
                        animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                        className="absolute left-[-2px] w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_#fff]"
                    ></motion.div>
                </div>
                <span className={`text-white/40 text-[9px] font-black uppercase tracking-[0.3em] ${i18n.language === 'ar' ? 'rotate-180 [writing-mode:vertical-lr]' : 'vertical-rl'}`}>
                    {t('hero.discovery')}
                </span>
            </div>
        </div>
    );
};

export default Hero;
