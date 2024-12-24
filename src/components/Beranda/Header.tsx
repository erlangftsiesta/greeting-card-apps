import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Header = ({ eventName = "Christmas 2024" }) => {  // Tambah prop eventName
  const targetDate = new Date('2024-12-25T00:00:00');

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <motion.header 
      className="bg-primary/90 backdrop-blur-sm p-8 rounded-b-2xl shadow-soft"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="container mx-auto">
        {/* Event Name */}
        <motion.h1 
          className="text-center text-white text-2xl md:text-3xl font-bold mb-6 tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {eventName}
        </motion.h1>

        {/* Countdown Timer */}
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-4 gap-6 md:gap-8">
            {Object.entries(timeLeft).map(([key, value]) => (
              <motion.div 
                key={key} 
                className="text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6">
                  <div className="text-2xl md:text-4xl font-bold text-white mb-2">
                    {String(value).padStart(2, '0')}
                  </div>
                  <div className="text-xs md:text-sm text-white/80 uppercase tracking-wider">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
