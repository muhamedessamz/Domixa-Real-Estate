import React from 'react';
import { useTranslation } from 'react-i18next';
import { Target, Users, Landmark, Heart, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="pt-40 pb-32 bg-white overflow-hidden">
            {/* Hero Narrative */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-40">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-domixa-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">— {t('about.hero.badge')}</span>
                        <h1 className="text-6xl md:text-8xl font-serif text-domixa-dark italic mb-12 leading-none">
                            {i18n.language === 'ar' ? 'إرث من' : 'A Legacy of'} <br /> <span className="not-italic font-black text-domixa-gold uppercase tracking-tighter">{i18n.language === 'ar' ? 'التميز.' : 'Excellence.'}</span>
                        </h1>
                        <p className="text-gray-500 text-xl font-light italic leading-relaxed mb-12">
                            {t('about.hero.description')}
                        </p>
                        <div className="flex space-x-16 rtl:space-x-reverse">
                            <div>
                                <p className="text-5xl font-black text-domixa-gold underline decoration-domixa-gold/30 underline-offset-8">25+</p>
                                <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mt-4">{t('about.hero.stats.awards')}</p>
                            </div>
                            <div>
                                <p className="text-5_xl font-black text-domixa-gold underline decoration-domixa-gold/30 underline-offset-8">12B+</p>
                                <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mt-4">{t('about.hero.stats.assets')}</p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="relative group">
                        <div className="rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] aspect-[4/5] scale-95 group-hover:scale-100 transition-transform duration-1000">
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                                alt="Corporate Tower"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-10 -left-10 rtl:-right-10 rtl:-left-auto bg-domixa-dark text-white p-12 rounded-[2.5rem] shadow-2xl hidden md:flex flex-col space-y-4 max-w-sm animate-float">
                            <Quote size={32} className="text-domixa-gold opacity-50" />
                            <p className="text-lg font-serif italic text-white/80">"{t('about.hero.quote')}"</p>
                            <div className="h-px w-12 bg-domixa-gold mt-4"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="bg-domixa-gray py-40">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                        {[
                            {
                                icon: Target,
                                title: t('about.philosophy.vision_title'),
                                desc: t('about.philosophy.vision_desc')
                            },
                            {
                                icon: Landmark,
                                title: t('about.philosophy.trust_title'),
                                desc: t('about.philosophy.trust_desc')
                            }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col space-y-6 group">
                                <div className="w-20 h-20 bg-white shadow-xl rounded-3xl flex items-center justify-center text-domixa-gold group-hover:bg-domixa-dark group-hover:text-white transition-all duration-500">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-3xl font-serif font-bold italic text-domixa-dark">{item.title}</h3>
                                <p className="text-gray-400 text-lg font-light leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Executive Leadership */}
            <section className="py-40">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="text-center mb-32">
                        <span className="text-domixa-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">— {t('about.leadership.badge')}</span>
                        <h2 className="text-6xl font-serif text-domixa-dark italic">{i18n.language === 'ar' ? 'المجلس' : 'The Global'} <span className="not-italic font-black text-domixa-gold uppercase tracking-tighter">{i18n.language === 'ar' ? 'العالمي' : 'Council'}</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        {[
                            { name: "Sultan Al Mansouri", role: "Executive Chairman", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" },
                            { name: "Sarah Williams", role: "Managing Director", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" },
                            { name: "Ahmed bin Zayed", role: "Investment Principal", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80" }
                        ].map((member, i) => (
                            <div key={i} className="group flex flex-col items-center text-center">
                                <div className="relative overflow-hidden rounded-[4rem] aspect-[3/4] mb-8 shadow-2xl w-full">
                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 grayscale group-hover:grayscale-0" />
                                    <div className="absolute inset-0 bg-domixa-dark/20 group-hover:bg-transparent transition-colors"></div>
                                </div>
                                <h4 className="text-2xl font-serif font-bold text-domixa-dark italic mb-2">{member.name}</h4>
                                <p className="text-domixa-gold text-[10px] font-black uppercase tracking-[0.3em]">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
