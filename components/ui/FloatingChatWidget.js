// components/ui/FloatingChatWidget.js
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const FloatingChatWidget = () => {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 group"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 2, ease: "easeOut" }} // Muncul setelah 2 detik
    >
      <div className="absolute inset-0 bg-primary rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-pulse" />
      <motion.button
        whileHover={{ scale: 1.1, rotate: 12 }}
        whileTap={{ scale: 0.9 }}
        className="relative bg-primary text-white p-4 rounded-full shadow-2xl"
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>
    </motion.div>
  );
};

export default FloatingChatWidget;