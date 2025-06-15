// components/sections/CtaSection.js
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const sectionVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CtaSection = () => {
  return (
    <motion.section
      className="py-24 px-4 relative overflow-hidden"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-3/4 w-[30rem] h-[30rem] bg-secondary/20 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          variants={itemVariant}
          className="text-4xl md:text-5xl font-bold tracking-tight"
        >
          Siap Mengubah Bisnis Anda dengan{" "}
          <span className="text-primary">Teknologi AI?</span>
        </motion.h2>
        <motion.p
          variants={itemVariant}
          className="mt-4 max-w-2xl mx-auto text-lg text-white-muted"
        >
          Bergabunglah bersama ratusan bisnis lain yang sudah merasakan manfaat
          solusi AI dari kami untuk mencapai efisiensi kerja yang luar biasa.
        </motion.p>
        <motion.div
          variants={itemVariant}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="group relative inline-flex h-12 w-full sm:w-auto items-center justify-center overflow-hidden rounded-full bg-primary px-6 font-medium text-white shadow-lg transition-all duration-300 hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
            <span>Mulai Konsultasi Gratis</span>
            <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button className="h-12 w-full sm:w-auto rounded-full border border-white/20 px-6 font-medium text-white-muted transition-colors hover:border-white/50 hover:bg-white/10">
            Lihat Demo
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CtaSection;