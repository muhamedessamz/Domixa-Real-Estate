import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Linkedin, Instagram, ArrowUpRight, ChevronDown, ArrowRight, Twitter, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
    const { t, i18n } = useTranslation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [interest, setInterest] = useState(t('contact.form.options.off_plan'));

    const options = [
        t('contact.form.options.off_plan'),
        t('contact.form.options.secondary'),
        t('contact.form.options.institutional'),
        t('contact.form.options.commercial')
    ];

    return (
        <div className="pt-40 pb-32 bg-domixa-gray min-h-screen">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">

                {/* Editorial Header */}
                <div className="mb-32 text-center lg:text-left rtl:lg:text-right flex flex-col lg:flex-row justify-between items-end gap-12">
                    <div className="max-w-3xl">
                        <span className="text-domixa-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">— {t('contact.hero.badge')}</span>
                        <h1 className="text-6xl md:text-8xl font-serif text-domixa-dark italic leading-none">{t('contact.hero.title')}</h1>
                    </div>
                    <p className="text-gray-400 text-xl font-light italic lg:max-w-xs leading-relaxed">
                        {t('contact.hero.desc')}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    {/* Corporate Info Card */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="bg-domixa-dark text-white p-16 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-domixa-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-domixa-gold/20 transition-all duration-1000"></div>

                            <h3 className="text-3xl font-serif font-bold italic text-white mb-12 relative z-10">{t('contact.hq.title')} <br /> <span className="text-domixa-gold not-italic font-black uppercase text-sm tracking-widest">{i18n.language === 'ar' ? 'المقر العالمي' : 'Global HQ'}</span></h3>

                            <div className="space-y-12 relative z-10">
                                <div className="flex items-start gap-6 leading-none">
                                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-domixa-gold">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg mb-2 italic">{t('contact.hq.hub')}</p>
                                        <p className="text-white/40 text-sm leading-relaxed">Vision Tower, Level 42, Business Bay <br /> Dubai, UAE</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 leading-none">
                                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-domixa-gold">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg mb-2 italic">{t('contact.hq.line')}</p>
                                        <p className="text-white/40 text-sm tracking-[0.2em]">+971 4 000 0000</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 leading-none">
                                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-domixa-gold">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg mb-2 italic">{t('contact.hq.email')}</p>
                                        <p className="text-white/40 text-sm">private-sales@domixa.ae</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-20 pt-12 border-t border-white/5 flex gap-8 relative z-10">
                                <a href="#" className="text-white/30 hover:text-domixa-gold transition-colors"><Linkedin size={24} /></a>
                                <a href="#" className="text-white/30 hover:text-domixa-gold transition-colors"><Instagram size={24} /></a>
                            </div>
                        </div>

                        {/* Minimalist Map Marker */}
                        <div className="h-48 bg-white rounded-[3rem] shadow-xl flex items-center justify-center border border-white p-8 relative overflow-hidden group cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1541339907198-e08756edd81f?auto=format&fit=crop&w=600&q=80" className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale group-hover:scale-110 transition-transform duration-[2s]" />
                            <div className="relative z-10 flex items-center gap-4">
                                <div className="w-3 h-3 bg-domixa-gold rounded-full animate-ping"></div>
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-domixa-dark">{t('contact.hq.locate')}</span>
                            </div>
                        </div>
                    </div>

                    {/* Precision Inquiry Form */}
                    <div className="lg:col-span-7 bg-white p-16 rounded-[4rem] shadow-2xl border border-white">
                        <h3 className="text-3xl font-serif font-bold text-domixa-dark mb-16 italic">{t('contact.form.title')}</h3>
                        <form className="space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="group border-b border-gray-100 pb-4 focus-within:border-domixa-gold transition-all">
                                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300 block mb-4">{t('contact.form.name')}</label>
                                    <input type="text" placeholder={t('contact.form.name_placeholder')} className="w-full bg-transparent border-none outline-none text-domixa-dark font-medium placeholder:text-gray-200" />
                                </div>
                                <div className="group border-b border-gray-100 pb-4 focus-within:border-domixa-gold transition-all">
                                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300 block mb-4">{t('contact.form.email')}</label>
                                    <input type="email" placeholder={t('contact.form.email_placeholder')} className="w-full bg-transparent border-none outline-none text-domixa-dark font-medium placeholder:text-gray-200" />
                                </div>
                            </div>

                            {/* Custom Dropdown Portfolio Interest */}
                            <div className="relative">
                                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300 block mb-4">{t('contact.form.interest')}</label>
                                <div
                                    className="group border-b border-gray-100 pb-4 cursor-pointer flex justify-between items-center hover:border-domixa-gold transition-all"
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                >
                                    <span className="text-domixa-dark font-medium">{interest}</span>
                                    <ChevronDown
                                        size={16}
                                        className={`text-gray-300 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                                    />
                                </div>

                                <AnimatePresence>
                                    {isDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute z-20 top-full left-0 w-full bg-white shadow-2xl rounded-2xl mt-4 overflow-hidden border border-gray-100"
                                        >
                                            {options.map((opt, i) => (
                                                <div
                                                    key={i}
                                                    onClick={() => {
                                                        setInterest(opt);
                                                        setIsDropdownOpen(false);
                                                    }}
                                                    className="p-6 hover:bg-domixa-gray cursor-pointer flex justify-between items-center group/opt border-b border-gray-50 last:border-none transition-colors"
                                                >
                                                    <span className={`text-sm tracking-tight ${interest === opt ? 'text-domixa-gold font-bold' : 'text-domixa-dark font-medium'}`}>{opt}</span>
                                                    <ArrowRight
                                                        size={14}
                                                        className={`text-domixa-gold opacity-0 -translate-x-4 group-hover/opt:opacity-100 group-hover/opt:translate-x-0 transition-all rtl:rotate-180 rtl:group-hover/opt:-translate-x-0`}
                                                    />
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="group border-b border-gray-100 pb-4 focus-within:border-domixa-gold transition-all">
                                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300 block mb-4">{t('contact.form.message')}</label>
                                <textarea rows="4" placeholder={t('contact.form.message_placeholder')} className="w-full bg-transparent border-none outline-none text-domixa-dark font-medium placeholder:text-gray-200 resize-none"></textarea>
                            </div>

                            <div className="pt-8">
                                <button className="btn-elite w-full rounded-2xl flex items-center justify-center gap-4">
                                    <span>{t('contact.form.cta')}</span>
                                    <ArrowUpRight size={18} />
                                </button>
                                <p className="text-center text-[10px] font-bold text-gray-300 tracking-widest mt-8 uppercase">{t('contact.form.confidential')}</p>

                                {/* Social Media Integration */}
                                <div className="mt-12 pt-8 border-t border-gray-50 flex justify-center gap-8">
                                    <a href="#" className="text-gray-300 hover:text-domixa-gold transition-colors"><Facebook size={20} /></a>
                                    <a href="#" className="text-gray-300 hover:text-domixa-gold transition-colors"><Twitter size={20} /></a>
                                    <a href="#" className="text-gray-300 hover:text-domixa-gold transition-colors"><Instagram size={20} /></a>
                                    <a href="#" className="text-gray-300 hover:text-domixa-gold transition-colors"><Linkedin size={20} /></a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
