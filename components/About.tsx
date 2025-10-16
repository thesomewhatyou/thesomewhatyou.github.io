'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { value: 254, label: 'Total Downloads' },
  { value: 145, label: 'YouTube Subscribers' },
  { value: 4, label: 'GitHub Followers' },
];

function AnimatedCounter({ value, inView }: { value: number; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span>{count}</span>;
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ff88] rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00ffff] rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-20 font-['Space_Grotesk'] text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-[#00ff88]">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* About Text */}
          <motion.div
            className="md:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-gray-400 leading-relaxed">
              I'm Gabriel, a passionate student developer known online as "thesomewhatyou". I specialize in creating Minecraft optimization solutions and building tools that make a difference in the community.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              My work focuses on open source development, automation, and helping people get the most out of their gaming experience, especially on older hardware. I believe in the power of optimization and making technology accessible to everyone.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              When I'm not coding, you'll find me creating content, working on animations, or contributing to various open source projects like OptimiHost.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#00ff88]/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <div className="text-5xl font-bold text-[#00ff88] font-['Space_Grotesk']">
                  <AnimatedCounter value={stat.value} inView={isInView} />
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider mt-2 font-mono">
                  {stat.label}
                </div>
                <div className="absolute inset-0 rounded-xl bg-[#00ff88]/0 group-hover:bg-[#00ff88]/5 transition-all duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
