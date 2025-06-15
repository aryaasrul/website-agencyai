// components/sections/BenefitsSection.js

import { motion } from "framer-motion";
import { Headphones, Settings, Shield } from "lucide-react";
import { SpotlightCard } from "../ui/SpotlightCard"; // Kita akan buat file ini setelah ini

// Data dari kode asli Anda
const benefitsData = [
  {
    icon: <Shield className="w-7 h-7" />,
    title: "100% Layanan White-label",
    description: "Bisnis Anda tetap menonjol, kami adalah tim teknis ahli di balik layar kesuksesan Anda.",
  },
  {
    icon: <Settings className="w-7 h-7" />,
    title: "Full Kustom, Bukan Template",
    description: "Setiap alur kerja dan chatbot kami bangun dari nol, dirancang khusus untuk kebutuhan unik bisnis Anda.",
  },
  {
    icon: <Headphones className="w-7 h-7" />,
    title: "Dukungan & Iterasi Berkelanjutan",
    description: "Bukan sistem 'sekali jadi', melainkan kemitraan jangka panjang untuk pengembangan berkelanjutan.",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Keamanan Setara Perusahaan Besar",
    description: "Data bisnis Anda terenkripsi dan dijaga dengan ketat, mengikuti standar keamanan internasional.",
  },
];

const sectionVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const BenefitsSection = () => {
  return (
    <motion.section
      id="benefits"
      className="py-24 px-4 bg-background-light"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={itemVariant} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Mengapa Memilih{" "}
            <span className="text-primary animate-pulse">Paduka AI Agency?</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white-muted">
            Kami bukan sekadar penyedia, kami adalah partner strategis Anda dalam inovasi AI.
          </p>
        </motion.div>

        <motion.div variants={itemVariant} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefitsData.map((benefit, idx) => (
            <SpotlightCard key={idx}>
              <div className="relative z-10 h-full p-8">
                <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-white-muted">{benefit.description}</p>
              </div>
            </SpotlightCard>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BenefitsSection;