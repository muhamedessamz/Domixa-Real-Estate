import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag, Share2, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { news } from '../data/mockData';

const NewsDetail = () => {
    const { id } = useParams();
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const article = news.find(n => n.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!article) {
        return (
            <div className="pt-40 pb-20 text-center min-h-screen">
                <h1 className="text-4xl font-serif text-domixa-dark italic mb-8">Article Not Found</h1>
                <Link to="/news" className="btn-elite px-12">Back to News</Link>
            </div>
        );
    }

    const isRtl = i18n.language === 'ar';

    return (
        <div className="bg-white min-h-screen">
            {/* Editorial Hero Header */}
            <section className="relative h-[70vh] w-full overflow-hidden">
                <img
                    src={article.image}
                    alt=""
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-domixa-dark via-domixa-dark/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-domixa-dark/40 via-transparent to-transparent opacity-60"></div>

                <div className="absolute inset-x-0 bottom-0 py-20">
                    <div className="max-w-[1000px] mx-auto px-6 md:px-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-8"
                        >
                            <div className="flex items-center gap-4 text-domixa-gold text-[10px] font-black uppercase tracking-[0.4em]">
                                <Tag size={14} />
                                <span>{article.category[i18n.language]}</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white italic leading-[1.1] font-black">
                                {article.title[i18n.language]}
                            </h1>
                            <div className="flex flex-wrap items-center gap-8 pt-4 text-white/60 text-xs font-bold uppercase tracking-widest">
                                <div className="flex items-center gap-3">
                                    <User size={16} className="text-domixa-gold" />
                                    <span>{article.author[i18n.language]}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Calendar size={16} className="text-domixa-gold" />
                                    <span>{article.date}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock size={16} className="text-domixa-gold" />
                                    <span>{article.readingTime[i18n.language]}</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <article className="py-24 max-w-[1000px] mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Main Content */}
                    <div className="flex-1 space-y-12">
                        <div className="flex items-center gap-6 pb-8 border-b border-gray-100">
                            <button
                                onClick={() => navigate('/news')}
                                className="group flex items-center gap-3 text-domixa-dark font-black text-[10px] uppercase tracking-widest hover:text-domixa-gold transition-all"
                            >
                                {isRtl ? <ChevronRight size={18} className="translate-x-0 group-hover:translate-x-1 transition-transform" /> : <ChevronLeft size={18} className="translate-x-0 group-hover:-translate-x-1 transition-transform" />}
                                <span>{isRtl ? 'العودة للأخبار' : 'Back to News'}</span>
                            </button>
                            <div className="h-4 w-px bg-gray-200"></div>
                            <button className="flex items-center gap-3 text-gray-400 font-black text-[10px] uppercase tracking-widest hover:text-domixa-gold transition-all">
                                <Share2 size={16} />
                                <span>{isRtl ? 'مشاركة' : 'Share Story'}</span>
                            </button>
                        </div>

                        <div className="prose prose-2xl prose-domixa max-w-none">
                            <p className={`text-2xl md:text-3xl font-light italic text-domixa-dark/80 leading-relaxed ${!isRtl ? 'first-letter:text-7xl first-letter:font-serif first-letter:text-domixa-gold first-letter:mr-3 first-letter:float-left' : ''}`}>
                                {article.content[i18n.language]}
                            </p>

                            {/* Dummy additional paragraphs to simulate a longer story */}
                            <p className="text-xl text-gray-400 font-light italic leading-relaxed mt-12">
                                {isRtl
                                    ? "كما أكدت دوميكسا التزامها الراسخ بخلق مساحات حضرية ليست فقط سكنية، بل تمثل وجهات استثمارية عالمية. يتم اختيار كل مشروع بعناية فائقة لضمان أعلى عائد استثماري (ROI) لعملائنا، مع الحفاظ على أعلى معايير الجودة والتميز المعماري التي أصبحت رديفاً لاسم دوميكسا في سوق العقارات العالمي."
                                    : "Domixa further emphasizes its unwavering commitment to creating urban spaces that are not just residential, but serve as global investment destinations. Each project is meticulously selected to ensure the highest yield for our clients, while maintaining the peak standards of architectural excellence that have become synonymous with the Domixa name in the global real estate market."
                                }
                            </p>
                        </div>
                    </div>

                    {/* Sidebar / Reading Progress or Related (Optional) */}
                    <aside className="lg:w-1/4">
                        <div className="sticky top-32 space-y-12">
                            <div className="bg-domixa-gray p-8 rounded-[2rem] border border-gray-100">
                                <h4 className="text-xs font-black uppercase tracking-widest text-domixa-dark mb-6">{isRtl ? 'عن الكاتب' : 'About Author'}</h4>
                                <div className="space-y-4">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border border-domixa-gold text-domixa-gold font-serif text-2xl italic font-black shadow-sm">
                                        {article.author[i18n.language].charAt(0)}
                                    </div>
                                    <p className="font-serif text-lg font-black italic text-domixa-dark">{article.author[i18n.language]}</p>
                                    <p className="text-xs text-gray-400 font-light italic leading-relaxed">
                                        {isRtl ? "محلل عقاري ومعماري متخصص في الأسواق الخليجية الناشئة." : "Real estate analyst and architectural consultant specializing in emerging Gulf markets."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </article>

            {/* Newsletter Integration */}
            <section className="bg-domixa-gray py-24 px-6 md:px-12 text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h3 className="text-3xl font-serif text-domixa-dark italic">{isRtl ? 'هل أعجبك ما قرأت؟' : 'Enjoyed this story?'}</h3>
                    <p className="text-gray-400 italic">{isRtl ? 'انضم إلى نشرتنا الإخبارية للحصول على أحدث التحليلات والفرص الحصرية.' : 'Join our inner circle for exclusive updates and early investment opportunities.'}</p>
                    <Link to="/contact" className="btn-elite inline-block">{isRtl ? 'تواصل معنا' : 'Contact Advisory'}</Link>
                </div>
            </section>
        </div>
    );
};

export default NewsDetail;
