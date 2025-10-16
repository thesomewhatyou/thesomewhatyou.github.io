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
    accent: 'from-slate-700 to-slate-900',
  },
  {
    icon: Package,
    label: 'Modrinth',
    href: 'https://modrinth.com/user/gabrielpolikerpaul',
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Twitter,
    label: 'Twitter',
    href: 'https://x.com/thesomewhatyou',
    accent: 'from-sky-500 to-blue-500',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="relative overflow-hidden bg-background py-36">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center" ref={ref}>
        <motion.div
          className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-primary/40 bg-card/80 text-primary shadow-[0_40px_90px_-45px_rgba(74,222,128,0.55)]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Mail size={32} />
        </motion.div>

        <motion.h2
          className="font-['Poppins'] text-5xl font-semibold text-foreground md:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Let's build something great together
        </motion.h2>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Interested in collaborating, have questions about my projects, or just want to chat about Minecraft
          optimization? I'm always excited to connect with other developers and creators.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 rounded-3xl border border-border/60 bg-card/80 px-7 py-4 text-left backdrop-blur-md transition-all duration-300 hover:border-primary/60"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${link.accent} text-white shadow-lg` }>
                <link.icon size={22} />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted">Connect on</p>
                <p className="text-lg font-semibold text-foreground">{link.label}</p>
              </div>
              <div className="absolute inset-0 rounded-3xl bg-primary/0 transition-all duration-300 group-hover:bg-primary/5" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
