'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Package, Twitter, Mail } from 'lucide-react';

const contactLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/thesomewhatyou',
    color: 'from-gray-400 to-gray-600',
  },
  {
    icon: Package,
    label: 'Modrinth',
    href: 'https://modrinth.com/user/gabrielpolikerpaul',
    color: 'from-green-400 to-emerald-600',
  },
  {
    icon: Twitter,
    label: 'Twitter',
    href: 'https://x.com/thesomewhatyou',
    color: 'from-blue-400 to-blue-600',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#0a0a0f] to-[#050508] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center" ref={ref}>
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Mail size={48} className="mx-auto mb-4 text-purple-400" />
        </motion.div>

        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 leading-relaxed mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Interested in collaborating, have questions about my projects, or just want to chat about Minecraft optimization? I'm always open to connecting with fellow developers and creators!
        </motion.p>

        {/* Contact Links */}
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center group-hover:shadow-lg transition-shadow`}>
                <link.icon size={24} className="text-white" />
              </div>
              <span className="text-lg font-medium text-white">{link.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
