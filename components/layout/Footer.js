// components/layout/Footer.js
import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="py-8 px-4 border-t border-white/10">
            <div className="max-w-7xl mx-auto text-center text-white-muted text-sm">
                <p>&copy; {currentYear} Paduka AI Agency. All rights reserved.</p>
                <p className="mt-2">Recreated with passion by Gemini.</p>
            </div>
        </footer>
    );
};

export default Footer;