'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Video, Package, Film } from 'lucide-react';

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
    items: ['Out In Space series', 'ROBLOX animations', 'Short film projects'],
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
    <section id="content" className="relative overflow-hidden bg-background-secondary py-36">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6" ref={ref}>
        <motion.h2
          className="mb-20 text-center font-['Poppins'] text-5xl font-bold text-foreground md:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Content <span className="text-primary">Creation</span>
        </motion.h2>

        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {contentCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="group rounded-3xl border border-border bg-card/70 p-7 backdrop-blur-md transition-all duration-300 hover:border-primary/50"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="mb-5 flex flex-col items-center gap-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <category.icon size={24} />
                </div>
                <h3 className="font-['Poppins'] text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <motion.li
                    key={item}
                    className="border-l-2 border-border/60 py-1 pl-4 text-muted transition-colors hover:border-primary hover:text-foreground"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
              <div className="absolute inset-0 rounded-3xl bg-primary/0 transition-all duration-300 group-hover:bg-primary/5" />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="rounded-3xl border border-border bg-card/70 p-8 backdrop-blur-md"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="mb-8 text-center font-['Poppins'] text-2xl font-semibold text-foreground">
            Skills & Interests
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                className="rounded-full border border-border/60 bg-background/40 px-4 py-2 font-medium text-muted transition-all duration-300 hover:border-primary/60 hover:bg-primary/5 hover:text-primary"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.04 }}
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
