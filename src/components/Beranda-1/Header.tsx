import { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';


interface Header {}

const Header: FC<Header> = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const newYear = new Date('2025-02-14T23:59:59').getTime();
      const now = new Date().getTime();
      const difference = newYear - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-pink-300 to-red-300 relative overflow-hidden">
      <ShootingStar />
      
      <div className="container mx-auto px-4 py-20 text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white mb-12"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Valentine 2025
        </motion.h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {Object.entries(timeLeft).map(([key, value]) => (
            <motion.div
              key={key}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl md:text-6xl font-bold text-white">
                {String(value).padStart(2, '0')}
              </div>
              <div className="text-sm uppercase text-gray-300">
                {key}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ShootingStar: FC = () => {
  return (
    <div className="absolute w-full h-full">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-pink-500 transform rotate-45"
          initial={{
            top: `${Math.random() * -20}%`,
            left: `${Math.random() * 100}%`,
            opacity: 1,
          }}
          animate={{
            top: "120%",
            left: `${Math.random() * 100}%`,
            opacity: 0,
          }}
          transition={{
            duration: 2 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          {/* Using a pseudo-element style for the heart */}
          <div className="absolute w-full h-full bg-pink-500 rounded-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute w-full h-full bg-pink-500 rounded-full top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2"></div>
        </motion.div>
      ))}
    </div>
  );
};

export default Header;
