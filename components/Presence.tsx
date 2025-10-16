'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Package, Twitter, ExternalLink } from 'lucide-react';

const platforms = [
  {
    icon: Github,
    name: 'GitHub',
    description: 'Open source projects, automation tooling, and community contributions.',
    stats: '4 followers • 4 following',
    link: 'https://github.com/thesomewhatyou',
    gradient: 'from-slate-900 to-slate-800',
  },
  {
    icon: Package,
    name: 'Modrinth',
    description: 'Minecraft modpacks optimized for performance on older hardware.',
    stats: '2 projects • 254 downloads',
    link: 'https://modrinth.com/user/gabrielpolikerpaul',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Twitter,
    name: 'Twitter',
    description: 'Updates, project insights, and behind-the-scenes development threads.',
    stats: '@thesomewhatyou',
    link: 'https://x.com/thesomewhatyou',
    gradient: 'from-sky-500 to-blue-500',
  },
];

export default function Presence() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="presence" className="relative overflow-hidden bg-background py-32">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/3 top-16 h-80 w-80 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.h2
          className="mb-16 text-center font-['Poppins'] text-5xl font-semibold text-foreground md:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Online <span className="text-primary">Presence</span>
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card/75 p-8 backdrop-blur-xl transition-all duration-300 hover:border-primary/50"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className={`absolute -right-24 -top-24 h-48 w-48 rounded-full bg-gradient-to-br ${platform.gradient} opacity-60 blur-[100px] transition-opacity duration-300 group-hover:opacity-80`} />

              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <platform.icon size={26} />
              </div>

              <h3 className="relative mt-6 font-['Poppins'] text-2xl font-semibold text-foreground">
                {platform.name}
              </h3>

              <p className="relative mt-4 text-sm leading-relaxed text-muted">
                {platform.description}
              </p>

              <p className="relative mt-6 font-mono text-xs uppercase tracking-[0.3em] text-muted">
                {platform.stats}
              </p>

              <motion.a
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-8 inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-2 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/60 hover:text-primary"
                whileHover={{ x: 6 }}
              >
                Visit profile
                <ExternalLink size={16} />
              </motion.a>

              <div className="absolute inset-0 rounded-3xl bg-primary/0 transition-all duration-300 group-hover:bg-primary/5" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
