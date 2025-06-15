// components/sections/HeroSection.js
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex w-full items-center justify-center px-4 py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background dengan efek grid atau pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:50px_50px]" />
      
      {/* Container utama */}
      <div className="w-full max-w-7xl relative z-10">
        <motion.div
          className="relative bg-black text-white rounded-3xl border border-white/10 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Header Navigation */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center gap-8">
              <span className="text-white/80 font-medium">DEMO</span>
              <span className="text-white/80 font-medium">INNER PAGES</span>
              <span className="text-white/80 font-medium">FEATURES</span>
            </div>
            
            {/* Logo di tengah */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-black rounded-full" />
                </div>
              </div>
            </div>
            
            <button className="px-6 py-2 border border-white/20 rounded-full text-white/80 hover:border-white/40 transition-colors">
              Buy Neuros now
            </button>
          </div>

          {/* Main Content */}
          <div className="p-12 md:p-16 lg:p-20">
            {/* Logo dan Brand Name */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-black rounded-full" />
              </div>
              <div className="h-8">
                <TypeAnimation
                  sequence={["ARCHON", 1000, "ARCHON AI", 2000, ""]}
                  wrapper="span"
                  speed={40}
                  cursor={true}
                  repeat={Infinity}
                  className="text-2xl font-bold text-white tracking-wider"
                />
              </div>
            </div>

            {/* Main Heading */}
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Meet Powerfull of<br />
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Artificial Intelligence
              </span><br />
              Chatbot Theme
            </motion.h1>

            {/* Scroll indicator di kiri */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-90 origin-center">
              <span className="text-white/40 text-sm tracking-wider">Scroll down</span>
            </div>
          </div>

          {/* Bottom Right Button */}
          <motion.button
            className="absolute bottom-8 right-8 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;