// components/HeroSection.tsx
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-[#62929A]">Modern Design</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Create beautiful and minimalist websites with our modern design system
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#62929A] text-white px-8 py-3 rounded-full 
                     flex items-center gap-2 mx-auto hover:bg-[#4A7279] 
                     transition-colors shadow-md"
          >
            Get Started
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
