// components/sections/FeaturesSection.js
import { motion } from "framer-motion";
import { Code, Globe, Sparkles } from "lucide-react";

// Data untuk kartu, diambil dari kode asli Anda
const featuresData = [
  {
    type: 'large',
    title: "100+",
    subtitle: "Ratusan Komponen Otomatisasi Siap Pakai",
    description: "Tersedia berbagai template workflow, widget chatbot, dan halaman siap pakai—semua siap dibangun sesuai kebutuhan bisnismu.",
    icon: <Code className="w-full h-full text-primary/50" />
  },
  {
    type: 'default',
    title: "Tersedia Dua Mode Warna",
    description: "Dashboard & chatbot dengan tema terang maupun gelap, bisa disesuaikan dengan identitas visual perusahaan Anda.",
    badges: ["Solusi", "Skema warna"],
    icon: <Sparkles className="w-8 h-8 text-white-muted" />
  },
  {
    type: 'default',
    title: "Mendukung Multibahasa",
    description: "Chatbot siap digunakan dalam bahasa Indonesia, Inggris, hingga bahasa daerah untuk menjangkau lebih banyak pelanggan.",
    badges: ["Multibahasa", "Dukungan RTL"],
    icon: <Globe className="w-8 h-8 text-white-muted" />
  },
];

// Konfigurasi animasi
const sectionVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const cardHoverEffect = {
  scale: 1.03,
  y: -5,
  transition: { type: "spring", stiffness: 300, damping: 15 }
};

const FeaturesSection = () => {
  return (
    <motion.section
      id="features"
      className="py-24 px-4"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={itemVariant} className="text-center mb-16">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Fitur Unggulan Kami
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            Dibangun untuk Performa dan Skalabilitas
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white-muted">
            Setiap komponen dirancang untuk memberikan hasil maksimal bagi bisnis Anda.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariant}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuresData.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariant}
              whileHover={cardHoverEffect}
              className={`card-border-glow group ${feature.type === 'large' ? 'lg:col-span-1 md:col-span-2' : 'col-span-1'}`}
            >
              <div className="relative bg-background-light w-full h-full rounded-3xl p-8 flex flex-col">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-[0.02] bg-[url('/grid.svg')] [mask-image:linear-gradient(to_bottom,white_0%,transparent_80%)]"></div>
                
                {feature.type === 'large' ? (
                  <>
                    <h3 className="text-7xl font-bold text-primary mb-2">{feature.title}</h3>
                    <h4 className="text-2xl font-bold mb-4">{feature.subtitle}</h4>
                    <p className="text-white-muted flex-grow">{feature.description}</p>
                    <div className="absolute -bottom-8 -right-8 w-36 h-36 opacity-10 group-hover:rotate-12 transition-transform duration-500">
                      {feature.icon}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mb-6">{feature.icon}</div>
                    <h4 className="text-xl font-bold mb-3 flex-grow">{feature.title}</h4>
                    <div className="flex gap-2 mt-auto">
                      {feature.badges.map((badge, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs border border-white/10 text-white-muted">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeaturesSection;