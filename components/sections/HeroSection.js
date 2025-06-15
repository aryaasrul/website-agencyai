// components/sections/HeroSection.js
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import TypeAnimation with SSR disabled
const TypeAnimation = dynamic(
  () => import('react-type-animation').then(mod => ({ default: mod.TypeAnimation })),
  { ssr: false }
);

const HeroSection = () => {
  return (
    <section className="min-h-screen flex w-full items-center justify-center px-4 py-20 bg-gray-100 relative">
      {/* Container utama dengan ukuran yang lebih besar */}
      <div className="w-full max-w-6xl">
        <motion.div
          className="relative bg-black text-white rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Header Navigation */}
          <div className="flex items-center justify-between px-8 py-6">
            {/* Menu kiri */}
            <div className="flex items-center gap-8">
              <span className="text-white font-medium text-sm">DEMO</span>
              <span className="text-white font-medium text-sm">INNER PAGES</span>
              <span className="text-white font-medium text-sm">FEATURES</span>
            </div>
            
            {/* Logo di tengah */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-black rounded-full" />
              </div>
            </div>
            
            {/* Tombol kanan */}
            <button className="px-6 py-2 border border-blue-500 rounded-full text-white text-sm font-medium hover:border-blue-400 transition-colors">
              Buy Neuros now
            </button>
          </div>

          {/* Main Content Area */}
          <div className="px-8 pb-8 pt-4 relative">
            {/* Logo dan Brand Name di kiri atas konten */}
            <div className="flex items-center gap-3 mb-12">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-black rounded-full" />
              </div>
              <div className="h-6">
                <TypeAnimation
                  sequence={["NEUROS", 1000, "NEUROS AI", 2000, ""]}
                  wrapper="span"
                  speed={40}
                  cursor={true}
                  repeat={Infinity}
                  className="text-lg font-bold text-white tracking-wider"
                />
              </div>
            </div>

            {/* Main Heading */}
            <motion.div 
              className="max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-16">
                Meet Powerfull of<br />
                Artificial Intelligence<br />
                WordPress Theme
              </h1>
            </motion.div>

            {/* Scroll indicator di kiri */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-90 origin-left ml-4">
              <span className="text-white/60 text-xs tracking-wider font-medium">Scroll down</span>
            </div>

            {/* Tombol See demo di kanan bawah */}
            <motion.button
              className="absolute bottom-8 right-8 bg-white text-black px-8 py-3 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;