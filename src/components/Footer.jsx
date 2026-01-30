import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-domixa-dark text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand & About */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold tracking-wider">
                            DOMI<span className="text-domixa-gold">XA</span>
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {t('footer.brand_desc')}
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-domixa-gold transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-domixa-gold transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-domixa-gold transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-domixa-gold transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 border-b border-domixa-gold w-fit pb-1">{t('nav.about')}</h4>
                        <ul className="space-y-4">
                            <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">{t('nav.about')}</Link></li>
                            <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors text-sm">{t('nav.projects')}</Link></li>
                            <li><Link to="/investors" className="text-gray-400 hover:text-white transition-colors text-sm">{t('nav.investors')}</Link></li>
                            <li><Link to="/developers" className="text-gray-400 hover:text-white transition-colors text-sm">{t('nav.developers')}</Link></li>
                            <li><Link to="/news" className="text-gray-400 hover:text-white transition-colors text-sm">{t('nav.media')}</Link></li>
                            <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors text-sm">{t('nav.careers')}</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 border-b border-domixa-gold w-fit pb-1">{t('footer.services_title')}</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li>{t('footer.services.prop_mgmt')}</li>
                            <li>{t('footer.services.inv_consult')}</li>
                            <li>{t('footer.services.proj_dev')}</li>
                            <li>{t('footer.services.legal')}</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 border-b border-domixa-gold w-fit pb-1">{t('nav.contact')}</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 group">
                                <MapPin size={20} className="text-domixa-gold group-hover:scale-110 transition-transform" />
                                <span className="text-gray-400 text-sm italic">{t('footer.address')}</span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <Phone size={20} className="text-domixa-gold group-hover:scale-110 transition-transform" />
                                <span className="text-gray-400 text-sm tracking-widest" dir="ltr">+971 4 000 0000</span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <Mail size={20} className="text-domixa-gold group-hover:scale-110 transition-transform" />
                                <span className="text-gray-400 text-sm">info@domixa.ae</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-gray-500 text-xs uppercase tracking-widest">
                    <p>{t('footer.copyright')}</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">{t('footer.links.privacy')}</a>
                        <a href="#" className="hover:text-white transition-colors">{t('footer.links.terms')}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
