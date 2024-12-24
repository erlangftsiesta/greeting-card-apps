import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
// import { v4 as uuidv4 } from 'uuid';

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    const uuid = "ysGka829";
    const link = `alenerl.com/${uuid}`;
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.footer 
      className="fixed bottom-0 w-full bg-white/80 backdrop-blur-sm p-6 shadow-soft"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
    >
      <div className="container mx-auto flex justify-center">
        <motion.button
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCopyLink}
        >
          {copied ? <Check size={20} /> : <Copy size={20} />}
          {copied ? 'Copied!' : 'Copy and Shared Your Link!'}
        </motion.button>
      </div>
    </motion.footer>
  );
};

export default Footer;
