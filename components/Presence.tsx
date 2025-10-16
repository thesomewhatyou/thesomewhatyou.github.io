'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Package, Twitter, ExternalLink } from 'lucide-react';

const platforms = [
  {
    icon: Github,
    name: 'GitHub',
    description: 'Passionate about open source, automation, and building tools',
    stats: '4 followers • 4 following',
    link: 'https://github.com/thesomewhatyou',
    color: 'from-gray-400 to-gray-600',
  },
  {
    icon: Package,
    name: 'Modrinth',
    description: 'Minecraft modpack developer with optimization focus',
    stats: '2 projects • 254 downloads',
    link: 'https://modrinth.com/user/gabrielpolikerpaul',
    color: 'from-green-400 to-emerald-600',
  },
  {
    icon: Twitter,
    name: 'Twitter',
    description: 'Updates on projects, development insights, and tech discussions',
    stats: '@thesomewhatyou',
    link: 'https://x.com/thesomewhatyou',
    color: 'from-blue-400 to-blue-600',
  },
];

export default function Presence() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="presence" className="py-24 bg-gradient-to-b from-[#0a0a0f] to-[#0f0f14] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Online Presence
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Icon */}
              <motion.div
                className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${platform.color} flex items-center justify-center`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <platform.icon size={32} className="text-white" />
              </motion.div>

              {/* Name */}
              <h3 className="text-2xl font-bold text-white mb-3">{platform.name}</h3>

              {/* Description */}
              <p className="text-gray-300 mb-4 leading-relaxed">{platform.description}</p>

              {/* Stats */}
              <p className="text-sm text-gray-400 mb-6 font-medium">{platform.stats}</p>

              {/* Link */}
              <motion.a
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Profile <ExternalLink size={16} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
