'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Video, Package, Film, Code } from 'lucide-react';

const contentCategories = [
  {
    icon: Video,
    title: 'YouTube Videos',
    items: [
      'Out In Space v1 Episode 3',
      'How To Use ChatClef',
      'thesomewhatyou reviews: Elefant AI',
      'Minecraft mod tutorials and reviews',
    ],
  },
  {
    icon: Package,
    title: 'Minecraft Modpacks',
    items: [
      'TOSCR Project (Old Computer MC Revival)',
      'Horror Hell',
      'Various optimization modpack versions',
    ],
  },
  {
    icon: Film,
    title: 'Animation',
    items: [
      'Out In Space series',
      'ROBLOX animations',
      'Short film projects',
    ],
  },
];

const skills = [
  'Open Source Development',
  'Minecraft Modding & Optimization',
  'Automation & CI/CD',
  'Systems Programming',
  'Privacy & Security',
  'Content Creation',
  'Animation',
  'Server Administration',
  'ReactJS Development',
];

export default function Content() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="content" className="py-24 bg-gradient-to-b from-[#0f0f14] to-[#0a0a0f] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Content Creation
        </motion.h2>

        {/* Content Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contentCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <motion.li
                    key={item}
                    className="text-gray-300 pl-4 border-l-2 border-purple-500/30 hover:border-purple-500 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Code size={32} className="text-purple-400" />
            <h3 className="text-3xl font-bold text-white">Skills & Interests</h3>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-sm font-medium text-gray-200 hover:border-purple-500 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
