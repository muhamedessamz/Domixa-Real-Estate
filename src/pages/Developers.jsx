import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Handshake, Building2, Globe2 } from 'lucide-react';
import { developers } from '../data/mockData';

const Developers = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-white min-h-screen">
            {/* Alliance Hero */}
            <section className="pt-40 pb-32 bg-domixa-dark relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-l from-domixa-gold/30 to-transparent"></div>
                </div>

                <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="max-w-4xl"
                    >
                        <span className="text-domixa-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">— {t('developers.subtitle')}</span>
                        <h1 className="text-6xl md:text-9xl font-serif text-white italic leading-[0.8] mb-12">
                            Architectural <br /> <span className="not-italic font-black text-domixa-gold uppercase tracking-tighter">Alliances.</span>
                        </h1>
                        <p className="text-white/40 text-2xl font-light italic leading-relaxed max-w-2xl">
                            "{t('developers.description')}"
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Strategic Partners Grid */}
            <section className="section-premium">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {developers.map((dev, idx) => (
                            <motion.div
                                key={dev.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group h-48 bg-domixa-gray rounded-[3rem] p-12 flex items-center justify-center grayscale hover:grayscale-0 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                            >
                                <img src={dev.logo} alt={dev.name} className="max-h-full max-w-full object-contain opacity-40 group-hover:opacity-100 transition-all" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Collaboration Narrative */}
            <section className="bg-domixa-gray py-40">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
                        {[
                            { icon: Building2, title: "Infrastructure", desc: "Collaborating on Tier-1 infrastructure developments." },
                            { icon: Handshake, title: "Joint Ventures", desc: "Strategic co-investments in emerging luxury markets." },
                            { icon: Globe2, title: "Global Standards", desc: "Importing international expertise to UAE real estate." }
                        ].map((item, i) => (
                            <div key={i} className="text-center space-y-8">
                                <div className="w-20 h-20 bg-white shadow-xl rounded-[2rem] mx-auto flex items-center justify-center text-domixa-gold group-hover:bg-domixa-dark group-hover:text-white transition-all">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-serif font-black italic text-domixa-dark">{item.title}</h3>
                                <p className="text-gray-400 font-light italic leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Developers;
