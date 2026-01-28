import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { properties } from '../data/mockData';
import {
    MapPin, BedDouble, Bath, Maximize, CheckCircle2, Phone,
    Calendar, ArrowLeft, ArrowUpRight, Download, Eye, Layers,
    CreditCard, Globe, ShieldCheck, Map as MapIcon, ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PropertyDetails = () => {
    const { id } = useParams();
    const { t, i18n } = useTranslation();
    const [activeTab, setActiveTab] = useState('overview');
    const [activeFloor, setActiveFloor] = useState(0);
    const [isNavSticky, setIsNavSticky] = useState(false);

    const property = properties.find(p => p.id === parseInt(id));

    useEffect(() => {
        const handleScroll = () => setIsNavSticky(window.scrollY > 800);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!property) return <div className="pt-40 text-center font-serif italic text-2xl">Asset Not Found</div>;

    const amenities = [
        { title: "Boutique Retail", img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80" },
        { title: "Wellness Club", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80" },
        { title: "Smart Living", img: "https://images.unsplash.com/photo-1558002038-1a510526e033?auto=format&fit=crop&w=800&q=80" },
        { title: "Lush Greenery", img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80" }
    ];

    const floorPlans = [
        { type: "Executive Suite", size: "120 m²", img: "https://images.adsttc.com/media/images/5e1d/02c3/3312/fd51/9d00/0166/large_jpg/Floor_Plan_1.jpg?1578959545" },
        { type: "Family Penthouse", size: "250 m²", img: "https://images.adsttc.com/media/images/5e1d/02c3/3312/fd51/9d00/0166/large_jpg/Floor_Plan_1.jpg?1578959545" },
        { type: "Signature Villa", size: "450 m²", img: "https://images.adsttc.com/media/images/5e1d/02c3/3312/fd51/9d00/0166/large_jpg/Floor_Plan_1.jpg?1578959545" }
    ];

    return (
        <div className="bg-white min-h-screen text-domixa-dark">
            {/* 1. Cinematic Hero Section */}
            <section className="relative h-screen w-full overflow-hidden">
                <motion.img
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 15 }}
                    src={property.image}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-domixa-dark via-domixa-dark/20 to-transparent"></div>

                <div className="absolute inset-x-0 bottom-24">
                    <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-end gap-12">
                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 max-w-4xl">
                            <span className="bg-domixa-gold/20 text-domixa-gold px-6 py-2 rounded-full border border-domixa-gold/30 text-[10px] uppercase font-black tracking-[0.5em] backdrop-blur-3xl">
                                {property.type} Portfolio
                            </span>
                            <h1 className="text-64 md:text-8xl lg:text-9xl font-serif text-white italic leading-[0.8] mb-8">
                                {property.title[i18n.language]}
                            </h1>
                            <div className="flex items-center space-x-6 rtl:space-x-reverse text-white/50 text-xl font-light italic">
                                <MapPin className="text-domixa-gold" />
                                <span>{property.location[i18n.language]}</span>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white/5 backdrop-blur-3xl p-12 rounded-[4rem] border border-white/10 shadow-2xl text-center min-w-[320px]">
                            <p className="text-[10px] font-black uppercase text-white/30 tracking-[0.4em] mb-4">Starting From</p>
                            <p className="text-5xl font-serif font-black italic text-white mb-2">AED {property.price}</p>
                            <p className="text-domixa-gold text-xs font-bold tracking-widest uppercase">Investment Grade</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. Sticky Sub-Nav */}
            <nav className={`w-full z-40 transition-all duration-500 border-b border-gray-100 ${isNavSticky ? 'fixed top-0 bg-white/95 backdrop-blur-xl shadow-xl' : 'relative bg-white'}`}>
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="flex justify-between items-center h-20">
                        <div className="hidden md:flex space-x-12 rtl:space-x-reverse items-center h-full">
                            {['overview', 'floorplans', 'features', 'location', 'enquire'].map((tab) => (
                                <a
                                    key={tab}
                                    href={`#${tab}`}
                                    className={`text-[10px] font-black uppercase tracking-[0.3em] h-full flex items-center border-b-2 transition-all duration-300 ${activeTab === tab ? 'border-domixa-gold text-domixa-dark' : 'border-transparent text-gray-400 hover:text-domixa-dark'}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </a>
                            ))}
                        </div>
                        <div className="flex items-center space-x-6 rtl:space-x-reverse">
                            <button className="flex items-center space-x-3 rtl:space-x-reverse text-domixa-dark font-black text-[10px] uppercase tracking-widest hover:text-domixa-gold transition-colors">
                                <Download size={16} />
                                <span>Brochure</span>
                            </button>
                            <button className="bg-domixa-dark text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-domixa-gold transition-all shadow-xl">
                                Private Booking
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* 3. Overview */}
            <section id="overview" className="section-premium">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
                    <div className="lg:col-span-12 text-center mb-12">
                        <span className="text-domixa-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">— {t('project.narrative')}</span>
                        <h2 className="text-6xl md:text-8xl font-serif italic text-domixa-dark leading-tight">Mastering The <br /> <span className="not-italic font-black text-domixa-gold uppercase tracking-tighter">Skyline.</span></h2>
                    </div>
                    <div className="lg:col-span-5 space-y-12">
                        <p className="text-gray-400 text-xl font-light italic leading-relaxed">
                            {property.title[i18n.language]} is more than a residence; it is a declaration of modern sophistication. Designed for those who seek the extraordinary, this asset combines avant-garde architecture with functional luxury.
                        </p>
                        <div className="grid grid-cols-2 gap-12 pt-8">
                            <div className="p-10 bg-domixa-gray rounded-[2.5rem] border border-white shadow-xl">
                                <p className="text-4xl font-black text-domixa-dark mb-2">Q4 2026</p>
                                <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Handover</p>
                            </div>
                            <div className="p-10 bg-domixa-gray rounded-[2.5rem] border border-white shadow-xl">
                                <p className="text-4xl font-black text-domixa-dark mb-2">9.5%</p>
                                <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Rental ROI</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-7">
                        <div className="relative rounded-[4rem] overflow-hidden shadow-2xl aspect-video group">
                            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                            <button className="absolute inset-0 m-auto w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform">
                                <Eye size={32} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Floor Plans */}
            <section id="floorplans" className="section-premium bg-domixa-gray">
                <div className="max-w-[1400px] mx-auto">
                    <div className="text-center mb-20">
                        <span className="text-domixa-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">— Architectural Details</span>
                        <h2 className="text-5xl md:text-7xl font-serif text-domixa-dark italic">Floor <span className="not-italic font-black text-domixa-gold uppercase tracking-tighter">Blueprints.</span></h2>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-20">
                        <div className="lg:w-1/3 space-y-4">
                            {floorPlans.map((plan, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveFloor(i)}
                                    className={`w-full p-8 rounded-3xl flex justify-between items-center transition-all duration-500 ${activeFloor === i ? 'bg-domixa-dark text-white shadow-2xl translate-x-4 rtl:-translate-x-4' : 'bg-white text-gray-400 hover:text-domixa-dark border border-gray-100'}`}
                                >
                                    <div className="text-left rtl:text-right">
                                        <p className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-2">{plan.size}</p>
                                        <p className="text-xl font-serif italic">{plan.type}</p>
                                    </div>
                                    <ChevronRight size={20} className={activeFloor === i ? 'text-domixa-gold' : 'text-gray-200'} />
                                </button>
                            ))}
                        </div>
                        <div className="lg:w-2/3 bg-white rounded-[4rem] p-12 shadow-2xl relative overflow-hidden group">
                            <img src={floorPlans[activeFloor].img} alt="" className="w-full h-full object-contain mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Amenities Mosaic */}
            <section id="features" className="bg-domixa-dark py-40">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12 text-center md:text-left rtl:md:text-right">
                        <div className="max-w-xl">
                            <span className="text-domixa-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">— {t('project.beyond')}</span>
                            <h2 className="text-5xl md:text-7xl font-serif text-white italic leading-none">Curated <br /> <span className="not-italic font-black text-domixa-gold uppercase tracking-tighter">Facilities.</span></h2>
                        </div>
                        <p className="text-white/40 text-lg font-light italic max-w-xs">Every facility is a statement. Every service is an experience.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {amenities.map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className={`flex flex-col space-y-8 ${i % 2 === 1 ? 'md:mt-24' : ''}`}>
                                <div className="relative rounded-[3rem] overflow-hidden h-[500px] shadow-2xl group">
                                    <img src={item.img} alt="" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" />
                                    <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-domixa-dark to-transparent text-white">
                                        <p className="text-3xl font-serif italic mb-2">{item.title}</p>
                                        <div className="h-px w-12 bg-domixa-gold opacity-50"></div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Location Strategy */}
            <section id="location" className="section-premium">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-12">
                        <span className="text-domixa-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">— Site Strategy</span>
                        <h2 className="text-5xl md:text-7xl font-serif text-domixa-dark italic leading-tight">Elite <br /> <span className="not-italic font-black text-domixa-gold uppercase tracking-tighter">Connectivity.</span></h2>
                        <div className="space-y-8">
                            {[
                                { title: "Financial District", time: "05 Mins" },
                                { title: "International Airport", time: "15 Mins" },
                                { title: "Luxury Retail Mall", time: "08 Mins" },
                                { title: "Wellness Park", time: "02 Mins" }
                            ].map((loc, i) => (
                                <div key={i} className="flex justify-between items-center py-4 border-b border-gray-100">
                                    <p className="text-lg font-serif italic text-domixa-dark">{loc.title}</p>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-domixa-gold">{loc.time}</p>
                                </div>
                            ))}
                        </div>
                        <button className="btn-elite rounded-2xl flex items-center space-x-4 rtl:space-x-reverse">
                            <MapIcon size={18} />
                            <span>Open Interactive Map</span>
                        </button>
                    </div>
                    <div className="relative rounded-[4rem] overflow-hidden shadow-2xl h-[600px] border-8 border-white">
                        <img src="https://images.unsplash.com/photo-1541339907198-e08756edd81f?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover grayscale" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="w-8 h-8 bg-domixa-gold rounded-full animate-ping"></div>
                            <div className="absolute top-0 left-0 w-8 h-8 bg-domixa-gold rounded-full border-4 border-white shadow-2xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Grand Inquire Section */}
            <section id="enquire" className="relative h-[800px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 text-white">
                    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=90" className="w-full h-full object-cover opacity-50 grayscale" />
                    <div className="absolute inset-0 bg-domixa-dark/95"></div>
                </div>
                <div className="relative z-10 w-full max-w-5xl px-6 text-center space-y-16">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-domixa-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">— {t('project.limited')}</span>
                        <h2 className="text-6xl md:text-9xl font-serif text-white italic leading-[0.8]">Initiate <br /> <span className="not-italic font-black text-domixa-gold uppercase tracking-tighter">Engagement.</span></h2>
                        <p className="mt-12 text-white/40 text-2xl font-light italic max-w-2xl mx-auto">Qualified advisors are available for discrete consultation and portfolio strategy.</p>
                    </motion.div>
                    <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <input type="text" placeholder="Full Name" className="bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-white text-sm focus:border-domixa-gold outline-none" />
                        <input type="email" placeholder="Corporate Email" className="bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-white text-sm focus:border-domixa-gold outline-none" />
                        <button className="btn-elite rounded-2xl bg-white text-domixa-dark font-black tracking-widest">Submit Proposal</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default PropertyDetails;
