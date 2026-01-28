import React from 'react';

const DefaultPage = ({ title }) => (
    <div className="pt-40 pb-20 text-center min-h-screen">
        <h1 className="text-4xl font-black italic text-domixa-dark mb-4">{title}</h1>
        <p className="text-gray-500 italic">This section is currently under development.</p>
        <div className="mt-12 flex justify-center">
            <div className="w-20 h-1 bg-domixa-gold"></div>
        </div>
    </div>
);

// Basic implementations for other pages
export const Investors = () => <DefaultPage title="Investor Relations" />;
export const News = () => <DefaultPage title="News & Media" />;
export const Developers = () => <DefaultPage title="Partner Developers" />;
