// components/sections/HeroSection.js
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="flex w-full items-center justify-center px-4 py-20 md:py-32">
      {/* Perubahan: Ukuran Card diperkecil ke max-w-2xl */}
      <div className="w-full max-w-2xl">
        {/*
          Perubahan:
          - Warna Card diubah menjadi hitam pekat (bg-black).
          - Padding disesuaikan untuk card yang lebih compact.
        */}
        <motion.div
          className="relative bg-black text-white rounded-t-3xl rounded-bl-3xl text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="p-8 sm:p-12 md:p-14">
            {/* Nama Brand */}
            <div className="h-8">
              <TypeAnimation
                sequence={["ARCHON AI AGENCY", 2000, ""]}
                wrapper="span"
                speed={40}
                cursor={true}
                repeat={Infinity}
                className="text-xl font-semibold text-white/80"
              />
            </div>

            {/* Perubahan: Ukuran Font disesuaikan */}
            <h2 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight">
              Chatbot AI Otomatis untuk UMKM & Sales Lapangan
            </h2>
          </div>

          {/*
            Perubahan Tombol CTA:
            - Ukuran diubah menjadi h-20 w-36.
            - Radius sudut kiri atas diubah menjadi 40px.
            - Warna diubah menjadi abu-abu muda dengan teks hitam.
            - Efek hover dihilangkan.
          */}
          <button
            className="absolute bottom-0 right-0 flex h-20 w-36 items-center justify-center bg-gray-100 text-gray-800 text-center text-sm font-semibold rounded-tl-[40px]"
          >
            Konsultasi gratis
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;