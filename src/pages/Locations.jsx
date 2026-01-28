import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPinned, Building2, TrendingUp, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Locations = () => {
    const { t } = useTranslation();

    const cities = [
        {
            name: "Dubai",
            desc: "An unparalleled epicenter of luxury, innovation, and global landmark living.",
            img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80",
            projects: 28,
            yield: "7.5%"
        },
        {
            name: "Abu Dhabi",
            desc: "The capital of institutional stability, cultural heritage, and sustainable vision.",
            img: "https://images.unsplash.com/photo-1544922114-610129cf77ba?auto=format&fit=crop&w=1000&q=80",
            projects: 14,
            yield: "6.8%"
        },
        {
            name: "Sharjah",
            desc: "The intellectual soul of the Emirates, blending tradition with family-centric investment.",
            img: "https://images.unsplash.com/photo-1541339907198-e08756edd81f?auto=format&fit=crop&w=1000&q=80",
            projects: 9,
            yield: "6.2%"
        },
        {
            name: "Ajman",
            desc: "A rapid-growth coastal hub offering exceptional value for residential portfolios.",
            img: "https://images.unsplash.com/photo-1580587771525-78b9bed301b6?auto=format&fit=crop&w=1000&q=80",
            projects: 6,
            yield: "7.0%"
        }
    ];

    return (
        <div className="pt-40 pb-32 bg-domixa-gray min-h-screen">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="text-center mb-32 max-w-4xl mx-auto space-y-8">
                    <span className="text-domixa-gold font-bold uppercase tracking-[0.4em] text-[10px] block">— Territorial Presence</span>
                    <h1 className="text-6xl md:text-8xl font-serif text-domixa-dark italic leading-none">Strategic <span className="not-italic font-black text-domixa-gold uppercase tracking-tighter">Hubs.</span></h1>
                    <p className="text-gray-400 text-xl font-light italic leading-relaxed">
                        Our operations span the most dynamic economic corridors of the United Arab Emirates, providing access to exclusive opportunities in and beyond the skylines.
                    </p>
                </div>

                <div className="editorial-grid">
                    {cities.map((city, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className="group relative h-[600px] rounded-[4rem] overflow-hidden shadow-2xl hover-lift"
                        >
                            <img src={city.img} alt={city.name} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-domixa-dark via-domixa-dark/20 to-transparent"></div>

                            <div className="absolute bottom-16 left-12 right-12 text-white space-y-6">
                                <div className="flex justify-between items-end">
                                    <h3 className="text-5xl font-serif font-black italic">{city.name}</h3>
                                    <div className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                                        <ArrowUpRight size={24} className="text-domixa-gold" />
                                    </div>
                                </div>

                                <p className="text-white/60 text-sm italic leading-relaxed max-w-xs">{city.desc}</p>

                                <div className="pt-8 flex items-center space-x-6 rtl:space-x-reverse opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 translate-y-8 group-hover:translate-y-0">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Developments</span>
                                        <span className="text-2xl font-bold font-serif text-domixa-gold">{city.projects}+</span>
                                    </div>
                                    <div className="h-10 w-px bg-white/10"></div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Avg. ROI</span>
                                        <span className="text-2xl font-bold font-serif text-domixa-gold">{city.yield}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute top-10 right-10 rtl:left-10 rtl:right-auto bg-white/5 backdrop-blur-2xl p-4 rounded-3xl border border-white/10 shadow-2xl">
                                <MapPinned size={28} className="text-white" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Locations;
