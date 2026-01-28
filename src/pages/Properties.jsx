import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { properties } from '../data/mockData';
import { Search, SlidersHorizontal, MapPin, BedDouble, Bath, Maximize, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Properties = () => {
    const { t, i18n } = useTranslation();
    const [filterCity, setFilterCity] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProperties = properties.filter(p => {
        const matchesCity = filterCity === 'All' || p.city === filterCity;
        const matchesSearch = p.title[i18n.language].toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.location[i18n.language].toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCity && matchesSearch;
    });

    const cities = ['All', 'Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman'];

    return (
        <div className="pt-40 pb-32 bg-domixa-gray min-h-screen">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                {/* Editorial Header */}
                <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
                    <div className="max-w-3xl">
                        <span className="text-domixa-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">— {t('properties.header.badge')}</span>
                        <h1 className="text-6xl md:text-8xl font-serif text-domixa-dark italic leading-none">{i18n.language === 'ar' ? 'مخزون' : 'Global'} <span className="not-italic font-black text-domixa-gold uppercase tracking-tighter">{i18n.language === 'ar' ? 'عالمي' : 'Inventory'}</span></h1>
                        <p className="mt-8 text-gray-400 text-xl font-light italic leading-relaxed">
                            {t('properties.header.desc')}
                        </p>
                    </div>
                    <div className="flex items-center space-x-4 rtl:space-x-reverse text-domixa-dark/30 font-black text-xs uppercase tracking-widest">
                        <span>{t('properties.header.sort')}</span>
                        <button className="text-domixa-dark border-b border-domixa-gold underline-offset-4">{t('properties.header.sort_opt')}</button>
                    </div>
                </div>

                {/* Sophisticated Search & Filters */}
                <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl border border-gray-100 flex flex-col lg:flex-row gap-4 items-center mb-24">
                    <div className="flex-1 w-full relative group">
                        <Search className="absolute left-6 rtl:right-6 top-1/2 -translate-y-1/2 text-gray-300 group-hover:text-domixa-gold transition-colors" size={20} />
                        <input
                            type="text"
                            placeholder={t('properties.search.placeholder')}
                            className="w-full pl-16 pr-6 rtl:pr-16 rtl:pl-6 py-5 bg-gray-50/50 rounded-2xl border-none focus:ring-1 focus:ring-domixa-gold/30 outline-none text-sm transition-all font-medium"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center space-x-3 rtl:space-x-reverse w-full lg:w-auto overflow-x-auto py-2 lg:py-0 scrollbar-hide">
                        {[
                            { key: 'All', label: t('properties.cities.all') },
                            { key: 'Dubai', label: t('properties.cities.dubai') },
                            { key: 'Abu Dhabi', label: t('properties.cities.abu_dhabi') },
                            { key: 'Sharjah', label: t('properties.cities.sharjah') },
                            { key: 'Ajman', label: t('properties.cities.ajman') }
                        ].map(city => (
                            <button
                                key={city.key}
                                onClick={() => setFilterCity(city.key)}
                                className={`px-8 py-4 rounded-2xl text-[10px] uppercase font-black tracking-widest whitespace-nowrap transition-all duration-500 ${filterCity === city.key ? 'bg-domixa-dark text-white shadow-xl' : 'bg-white text-gray-400 hover:text-domixa-dark border border-gray-100'}`}
                            >
                                {city.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Dynamic Grid */}
                <div className="editorial-grid">
                    <AnimatePresence mode="popLayout">
                        {filteredProperties.map((property) => (
                            <motion.div
                                layout
                                key={property.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="group flex flex-col"
                            >
                                <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] mb-8">
                                    <img src={property.image} alt="" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-domixa-dark/10 to-transparent"></div>
                                    <div className="absolute top-8 left-8 rtl:right-8 rtl:left-auto bg-white px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-domixa-dark shadow-sm">
                                        {property.type}
                                    </div>
                                    <div className="absolute bottom-10 right-10 rtl:left-10 rtl:right-auto opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                        <Link to={`/property/${property.id}`} className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-domixa-dark shadow-xl hover:bg-domixa-gold hover:text-white transition-all">
                                            <ArrowUpRight size={24} />
                                        </Link>
                                    </div>
                                </div>

                                <div className="px-4 space-y-3">
                                    <div className="flex items-center text-domixa-gold text-[10px] font-black uppercase tracking-[0.2em]">
                                        <MapPin size={14} className="mr-2 rtl:ml-2" />
                                        <span>{property.location[i18n.language]}</span>
                                    </div>
                                    <h3 className="text-3xl font-serif font-black text-domixa-dark leading-tight group-hover:text-domixa-gold transition-colors truncate">
                                        {property.title[i18n.language]}
                                    </h3>

                                    <div className="flex justify-between items-center pt-6 pb-2 border-t border-gray-100 text-gray-400">
                                        <div className="flex items-center space-x-2">
                                            <BedDouble size={16} className="text-gray-300" />
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-domixa-dark">{property.beds} {t('common.beds')}</span>
                                        </div>
                                        <p className="text-xl font-serif font-black italic text-domixa-dark">AED {property.price}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Properties;
