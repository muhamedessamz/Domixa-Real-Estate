import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Phone } from 'lucide-react';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const isHome = location.pathname === '/';
    const isPropertyDetail = location.pathname.startsWith('/property/');
    const isInvestors = location.pathname === '/investors';
    const isDevelopers = location.pathname === '/developers';
    const isNewsDetail = location.pathname.startsWith('/news/');

    // Pages that have a dark hero and need light text when not scrolled
    const hasDarkHero = isHome || isPropertyDetail || isInvestors || isDevelopers || isNewsDetail;

    // Force light items when menu is open
    const forceLight = !isScrolled || isOpen;
    const useDarkText = !hasDarkHero || (isScrolled && !isOpen);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    const toggleLanguage = () => {
        const nextLng = i18n.language === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(nextLng);
    };

    const navLinks = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.about'), path: '/about' },
        { name: t('nav.properties'), path: '/properties' },
        { name: t('nav.projects'), path: '/projects' },
        { name: t('nav.contact'), path: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-[padding,background-color,border-color,shadow] duration-500 ${isOpen ? 'bg-transparent py-6' : (isScrolled ? 'bg-white/90 shadow-xl py-3 border-b border-gray-100' : 'bg-transparent py-6')}`}>
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-50">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group">
                        <span className={`text-2xl font-black tracking-[0.15em] transition-colors duration-400 ${useDarkText ? 'text-domixa-dark' : 'text-white'}`}>
                            DOMI<span className="text-domixa-gold group-hover:text-domixa-gold-light transition-colors">XA</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`nav-link text-[10px] sm:text-xs uppercase font-bold tracking-[0.2em] transition-colors duration-400 ${useDarkText ? 'text-domixa-dark/70 hover:text-domixa-dark' : 'text-white/80 hover:text-white'}`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className={`h-8 w-[1px] ${useDarkText ? 'bg-gray-200' : 'bg-white/20'}`}></div>

                        <button
                            onClick={toggleLanguage}
                            className={`flex items-center gap-2 px-5 py-2 border rounded-full transition-all duration-400 ${useDarkText ? 'border-domixa-dark/10 text-domixa-dark hover:bg-domixa-dark hover:text-white' : 'border-white/20 text-white hover:bg-white hover:text-domixa-dark'}`}
                        >
                            <Globe size={14} />
                            <span className="text-[10px] font-black tracking-widest uppercase">{i18n.language === 'en' ? 'AR' : 'EN'}</span>
                        </button>
                    </div>

                    {/* Mobile UI */}
                    <div className="lg:hidden flex items-center gap-6">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 transition-colors duration-400 ${isOpen ? 'text-white' : (useDarkText ? 'text-domixa-dark' : 'text-white')}`}
                        >
                            {isOpen ? <X size={32} strokeWidth={1.5} /> : <Menu size={32} strokeWidth={1.5} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Full Screen Mobile Overlay */}
            <div
                className={`lg:hidden fixed inset-0 bg-domixa-dark z-40 transition-all duration-400 ease-in-out will-change-transform ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible pointer-events-none'}`}
                style={{ willChange: 'transform, opacity' }}
            >
                <div className="flex flex-col items-center justify-center h-full space-y-8 px-8 text-center pt-20">
                    {navLinks.map((link, idx) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-3xl font-serif text-white/50 hover:text-domixa-gold transition-all duration-300 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            style={{ transitionDelay: isOpen ? `${idx * 50}ms` : '0ms' }}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className={`pt-12 flex flex-col items-center space-y-4 transition-all duration-400 delay-200 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-3 px-8 py-3 border border-white/20 rounded-full text-white hover:bg-white hover:text-domixa-dark transition-all duration-300"
                        >
                            <Globe size={18} className="text-domixa-gold" />
                            <span className="text-sm font-black uppercase tracking-[0.2em]">
                                {i18n.language === 'en' ? 'Arabic' : 'English'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
