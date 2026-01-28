import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingContact = () => {
    return (
        <div className="fixed bottom-10 right-10 rtl:left-10 rtl:right-auto z-[9999] group">
            {/* Label - visible on hover */}
            <div className="absolute right-full rtl:left-full rtl:right-auto top-1/2 -translate-y-1/2 mr-4 rtl:ml-4 px-6 py-2 bg-white shadow-2xl rounded-full text-[10px] font-black uppercase tracking-widest text-domixa-dark opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-100">
                Chat with an Advisor
            </div>

            {/* WhatsApp Button */}
            <a
                href="#"
                className="w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_15px_40px_-10px_rgba(37,211,102,0.4)] flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
                <MessageCircle size={32} fill="white" />
            </a>
        </div>
    );
};

export default FloatingContact;
