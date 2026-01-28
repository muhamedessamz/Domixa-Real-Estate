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
    const useDarkText = !isHome || isScrolled;

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
        <nav className={`fixed w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-white/90 backdrop-blur-2xl shadow-2xl py-3' : 'bg-transparent py-6'}`}>
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group">
                        <span className={`text-2xl font-black tracking-[0.15em] transition-colors duration-500 ${useDarkText ? 'text-domixa-dark' : 'text-white'}`}>
                            DOMI<span className="text-domixa-gold group-hover:text-domixa-gold-light transition-colors">XA</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center space-x-10 rtl:space-x-reverse">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`nav-link text-[10px] sm:text-xs uppercase font-bold tracking-[0.2em] ${useDarkText ? 'text-domixa-dark/70 hover:text-domixa-dark' : 'text-white/80 hover:text-white'}`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className={`h-8 w-[1px] ${useDarkText ? 'bg-gray-200' : 'bg-white/20'}`}></div>

                        <button
                            onClick={toggleLanguage}
                            className={`flex items-center space-x-2 rtl:space-x-reverse px-5 py-2 border rounded-full transition-all duration-500 ${useDarkText ? 'border-domixa-dark/10 text-domixa-dark hover:bg-domixa-dark hover:text-white' : 'border-white/20 text-white hover:bg-white hover:text-domixa-dark'}`}
                        >
                            <Globe size={14} />
                            <span className="text-[10px] font-black tracking-widest uppercase">{i18n.language === 'en' ? 'AR' : 'EN'}</span>
                        </button>
                    </div>

                    {/* Mobile UI */}
                    <div className="lg:hidden flex items-center space-x-6 rtl:space-x-reverse">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 transition-colors ${useDarkText ? 'text-domixa-dark' : 'text-white'}`}
                        >
                            {isOpen ? <X size={32} strokeWidth={1.5} /> : <Menu size={32} strokeWidth={1.5} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Full Screen Mobile Overlay */}
            <div className={`lg:hidden fixed inset-0 bg-domixa-dark z-[-1] transition-transform duration-700 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="flex flex-col items-center justify-center h-full space-y-8 px-8 text-center pt-20">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="text-3xl font-serif text-white/50 hover:text-domixa-gold transition-all duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-12 flex flex-col items-center space-y-4">
                        <button onClick={toggleLanguage} className="text-domixa-gold text-lg font-black uppercase tracking-widest">{i18n.language === 'en' ? t('nav.toggle.ar') : t('nav.toggle.en')}</button>
                        <div className="text-white/30 text-xs tracking-widest">+971 4 000 0000</div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
