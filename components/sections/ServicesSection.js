// components/sections/ServicesSection.js
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, MessageSquare, Zap } from "lucide-react";

// Data untuk kartu layanan, diambil dari kode asli Anda
const servicesData = [
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Otomatisasi Alur Kerja",
    description: "Otomatisasi proses bisnis dari awal hingga akhir—input data otomatis, notifikasi real-time, dan pelaporan tanpa repot manual.",
  },
  {
    icon: <MessageSquare className="w-7 h-7" />,
    title: "Pembuatan Chatbot",
    description: "Chatbot AI untuk layanan pelanggan maupun tim internal. Integrasi WhatsApp, Instagram, dan website.",
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: "Dashboard & Laporan AI",
    description: "Dashboard analytics real-time dengan insight AI. Laporan otomatis langsung ke WhatsApp/email Anda.",
  },
];

// Konfigurasi animasi yang bisa dipakai ulang
const sectionVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.15,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesSection = () => {
  return (
    <motion.section
      id="services"
      className="py-24 px-4"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={itemVariant} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Maksimalkan{" "}
            <span className="bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent animate-gradient-pan">
              Kekuatan AI
            </span>
            <br />
            untuk Masa Depan Bisnis Anda
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white-muted">
            Kami menyediakan tiga pilar layanan utama untuk mentransformasi
            cara kerja bisnis Anda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariant}
              className="group relative bg-background-light p-8 rounded-3xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-primary/50"
            >
              {/* Efek glow saat hover */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(circle at 50% -20%, #5222E440, transparent 40%)'
                }}
              />

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-white-muted flex-grow">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="mt-6 font-semibold text-primary flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                >
                  Selengkapnya <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;