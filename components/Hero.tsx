'use client';

import { motion } from 'framer-motion';
import { Github, Package, Twitter, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Gradient orbs */}
      <motion.div
        className="absolute top-20 -left-20 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, #00ff88 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute bottom-20 -right-20 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, #00ffff 0%, transparent 70%)',
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#00ff88] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'easeInOut',
          }}
        />
      ))}
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Name with glow effect */}
          <motion.h1 
            className="text-7xl md:text-9xl font-bold mb-6 font-['Space_Grotesk']"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="block text-white glow-text">GABRIEL</span>
          </motion.h1>
          
          <motion.div
            className="inline-block mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="text-2xl md:text-3xl text-[#00ff88] font-mono tracking-wider">
              @thesomewhatyou
            </span>
          </motion.div>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-400 mb-4 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Minecraft Modpack Developer • Content Creator • Open Source Enthusiast
          </motion.p>
          
          <motion.p
            className="text-lg md:text-xl text-gray-500 font-mono mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {'>'} Making Minecraft things_
          </motion.p>
          
          {/* Social Links with sleek design */}
          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            {[
              { icon: Github, href: 'https://github.com/thesomewhatyou', label: 'GitHub' },
              { icon: Package, href: 'https://modrinth.com/user/gabrielpolikerpaul', label: 'Modrinth' },
              { icon: Twitter, href: 'https://x.com/thesomewhatyou', label: 'Twitter' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-14 h-14 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white hover:border-[#00ff88] transition-all duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon size={22} className="group-hover:text-[#00ff88] transition-colors duration-300" />
                <div className="absolute inset-0 rounded-lg bg-[#00ff88]/0 group-hover:bg-[#00ff88]/10 transition-all duration-300" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ChevronDown size={32} className="text-[#00ff88]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
