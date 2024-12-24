// src/pages/Login.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Lock } from 'lucide-react';

const UserLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implementasi axios login disini
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#62929A] to-[#3d5c61]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-600 mt-2">Please login to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <motion.div
              whileFocus={{ scale: 1.02 }}
              className="relative"
            >
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Username"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#62929A] focus:ring-2 focus:ring-[#62929A]/20 transition-all outline-none"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              />
            </motion.div>

            <motion.div
              whileFocus={{ scale: 1.02 }}
              className="relative"
            >
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#62929A] focus:ring-2 focus:ring-[#62929A]/20 transition-all outline-none"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </motion.div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2 text-gray-600">
              <input type="checkbox" className="rounded text-[#62929A] focus:ring-[#62929A]" />
              <span>Remember me</span>
            </label>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/forgot-password"
              className="text-gray-600 hover:text-[#62929A] transition-colors"
            >
              Forgot Password?
            </motion.a>
          </div>

          <motion.button
            whileHover={{ opacity: 0.9 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-[#62929A] text-white py-3 rounded-xl font-medium shadow-lg shadow-[#62929A]/30 hover:shadow-xl transition-all"
          >
            Sign In
          </motion.button>

          <p className="text-center text-gray-600">
            Don't have an account?{' '}
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/register"
              className="text-[#62929A] font-medium hover:underline"
            >
              Sign Up
            </motion.a>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default UserLogin;
