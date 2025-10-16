'use client';

import { motion } from 'framer-motion';
import { Github, Package, Twitter, ChevronDown, Code2, Zap } from 'lucide-react';
import { TypeScriptLogo, ReactLogo, NextLogo } from './brand-icons';

const techHighlights = [
  { name: 'TypeScript', icon: TypeScriptLogo },
  { name: 'React', icon: ReactLogo },
  { name: 'Next.js', icon: NextLogo },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 pt-32 pb-32"
    >
      <div className="absolute inset-0 grid-bg opacity-40" />

      <motion.div
        className="absolute left-10 top-32 h-72 w-72 rounded-full bg-primary/20 blur-[100px]"
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-accent/15 blur-[120px]"
        animate={{
          x: [0, -50, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {[...Array(16)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-primary/60"
          style={{
            left: `${5 + Math.random() * 90}%`,
            top: `${5 + Math.random() * 90}%`,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1.6, 0],
          }}
          transition={{
            duration: 2.5 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3.5,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/70 px-5 py-2.5 text-sm font-medium text-muted backdrop-blur-sm"
        >
          <Zap size={16} className="text-accent" />
          <span>Available for collaboration</span>
        </motion.div>

        <motion.h1
          className="mb-8 font-['Poppins'] text-6xl font-extrabold leading-tight tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-9xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <span className="block">GABRIEL</span>
        </motion.h1>

        <motion.div
          className="mb-10 inline-flex items-center gap-2.5 rounded-2xl bg-card/60 px-6 py-3 backdrop-blur-md"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Code2 size={22} className="text-primary" />
          <span className="font-mono text-xl font-semibold tracking-wide text-primary sm:text-2xl">
            @thesomewhatyou
          </span>
        </motion.div>

        <motion.p
          className="mx-auto mb-6 max-w-3xl text-xl leading-relaxed text-muted sm:text-2xl md:mb-7"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          Minecraft Modpack Developer • Content Creator • Open Source Enthusiast
        </motion.p>

        <motion.p
          className="mb-14 font-mono text-lg text-muted/80 md:text-xl"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          {'>'} Making Minecraft things_
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-5"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
        >
          {[
            {
              icon: Github,
              href: 'https://github.com/thesomewhatyou',
              label: 'GitHub',
              color: 'hover:bg-[#333]/80',
            },
            {
              icon: Package,
              href: 'https://modrinth.com/user/gabrielpolikerpaul',
              label: 'Modrinth',
              color: 'hover:bg-emerald-600/80',
            },
            {
              icon: Twitter,
              href: 'https://x.com/thesomewhatyou',
              label: 'Twitter',
              color: 'hover:bg-sky-500/80',
            },
          ].map(({ icon: Icon, href, label, color }, index) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex h-14 w-14 items-center justify-center rounded-2xl border border-border/60 bg-card/70 text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/70 hover:scale-110 hover:-translate-y-1 ${color}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.95 + index * 0.08 }}
              whileTap={{ scale: 0.92 }}
              aria-label={label}
            >
              <Icon size={22} className="relative z-10 transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-accent/0 opacity-0 transition-opacity duration-300 group-hover:from-primary/10 group-hover:to-accent/5 group-hover:opacity-100" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="mx-auto mt-14 flex max-w-4xl flex-wrap items-center justify-center gap-6 border-y border-border/50 py-10"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
        >
          {techHighlights.map(({ name, icon: Icon }, index) => (
            <motion.div
              key={name}
              className="group relative flex items-center gap-3 rounded-2xl border border-border/60 bg-card/70 px-4 py-3 pr-6 text-left backdrop-blur-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.15 + index * 0.05 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-background/60 shadow-inner">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-medium text-muted">Specialized in</p>
                <p className="text-base font-semibold text-foreground">{name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
      >
        <span className="text-sm font-medium text-muted">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ChevronDown size={28} className="text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
