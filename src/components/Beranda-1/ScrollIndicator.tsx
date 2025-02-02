// components/ScrollIndicator.tsx

import { motion } from "framer-motion";
import { FaAnglesUp } from "react-icons/fa6";

const ScrollIndicator = () => {
  return (
    <motion.div
      className="absolute -top-16 flex flex-col items-center text-white"
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      <FaAnglesUp className="text-3xl" />
      <span className="text-sm font-medium mt-2">Scroll Me</span>
    </motion.div>
  );
};

export default ScrollIndicator;
