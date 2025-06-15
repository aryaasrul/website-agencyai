// components/layout/Header.js
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react'; // Ganti dengan logo Anda jika ada
import React from 'react';

const Header = () => {
  return (
    <motion.header 
      className="fixed top-0 left-0 w-full z-40"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="mx-auto mt-6 max-w-7xl px-4">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 p-2 pl-6 pr-2 shadow-lg backdrop-blur-lg">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-lg font-bold">Archon Agency</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white-muted">
            <a href="#features" className="hover:text-white transition-colors">Fitur</a>
            <a href="#services" className="hover:text-white transition-colors">Layanan</a>
            <a href="#benefits" className="hover:text-white transition-colors">Keunggulan</a>
          </nav>
          <button className="h-10 rounded-full bg-white/10 px-6 font-medium text-white transition-colors hover:bg-white/20">
            Konsultasi Gratis
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;