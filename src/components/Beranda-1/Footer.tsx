import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    const uuid = "ysGka829";
    const link = `alenerl.com/${uuid}`;
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      id: 1,
      child: (
        <>
          <FaTiktok size={30} />
        </>
      ),
      href: "https://tiktok.com",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com",
    },
    {
      id: 3,
      child: (
        <>
          <FaInstagram size={30} />
        </>
      ),
      href: "https://instagram.com",
    },
  ];

  return (
    <motion.footer
      className="fixed bottom-1/3 right-0 w-auto p-4"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="flex flex-col items-center gap-6 overflow-hidden">
        <motion.button
          className="fixed bottom-0 left-1/2 transform -translate-x-1/2 px-8 py-2 min-w-[200px] flex items-center gap-7 justify-start rounded-xl bg-purple-100 bg-opacity-10 backdrop-blur-sm border border-white text-white hover:bg-opacity-20 transition-colors"
          onClick={handleCopyLink}
        >
          {copied ? (
            <>
              <Check className="w-5 h-5" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-5 h-5" />
              <span>Copy Link</span>
            </>
          )}
        </motion.button>

        <div className="flex flex-col gap-4">
          {socialLinks.map(({ id, child, href }) => (
            <motion.a
              key={id}
              href={href}
              className="text-white hover:text-white/80 transition-colors"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {child}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
