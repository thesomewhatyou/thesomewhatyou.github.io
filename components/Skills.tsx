'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Terminal, Blocks, Cpu, Github } from 'lucide-react';
import { TypeScriptLogo, JavaScriptLogo, ReactLogo, NextLogo } from './brand-icons';

const skills = [
  {
    category: 'Languages',
    icon: Code2,
    items: [
      { name: 'TypeScript', level: 92 },
      { name: 'JavaScript', level: 95 },
      { name: 'Python', level: 76 },
      { name: 'HTML/CSS', level: 90 },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    icon: Blocks,
    items: [
      { name: 'React', level: 92 },
      { name: 'Next.js', level: 88 },
      { name: 'Node.js', level: 82 },
      { name: 'Tailwind CSS', level: 95 },
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: Terminal,
    items: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'VS Code', level: 96 },
      { name: 'Docker', level: 70 },
      { name: 'Linux', level: 86 },
    ],
  },
  {
    category: 'Specializations',
    icon: Cpu,
    items: [
      { name: 'Web Development', level: 92 },
      { name: 'Performance Optimization', level: 86 },
      { name: 'Open Source', level: 84 },
      { name: 'Automation', level: 78 },
    ],
  },
];

const techStack = [
  { name: 'TypeScript', accent: 'from-blue-500/70 to-blue-400/70', icon: TypeScriptLogo },
  { name: 'React', accent: 'from-cyan-500/70 to-cyan-400/70', icon: ReactLogo },
  { name: 'Next.js', accent: 'from-slate-900/80 to-slate-700/80', icon: NextLogo },
  { name: 'JavaScript', accent: 'from-yellow-400/70 to-amber-400/70', icon: JavaScriptLogo },
  { name: 'GitHub', accent: 'from-gray-700/80 to-gray-900/80', icon: Github },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-120px' });

  return (
    <section id="skills" className="relative overflow-hidden bg-background py-32">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-10 top-10 h-80 w-80 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-10 left-20 h-80 w-80 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          className="mx-auto mb-20 max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Poppins'] text-5xl font-semibold text-foreground md:text-6xl">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            Passionate about crafting performant experiences, shipping accessible products, and empowering open source communities.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mb-20 flex max-w-4xl flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                className="group relative flex items-center gap-3 rounded-2xl border border-border bg-card/80 px-4 py-3 pr-6 backdrop-blur-md transition-all duration-300 hover:border-primary/60"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.3 + index * 0.07 }}
                whileHover={{ y: -6, scale: 1.03 }}
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${tech.accent}`}>
                  {Icon === Github ? (
                    <Icon className="h-6 w-6 text-white" />
                  ) : (
                    <Icon className="h-6 w-6" />
                  )}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
                    Core Skill
                  </p>
                  <p className="text-base font-semibold text-foreground">{tech.name}</p>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-primary/0 transition-all duration-300 group-hover:bg-primary/5" />
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              className="group relative rounded-3xl border border-border bg-card/80 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/60"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + groupIndex * 0.12 }}
              whileHover={{ y: -8 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <skillGroup.icon size={24} />
              </div>
              <h3 className="mt-6 font-['Poppins'] text-xl font-semibold text-foreground">
                {skillGroup.category}
              </h3>
              <p className="mt-2 text-sm text-muted">
                Focused on high-quality engineering and reliable collaboration.
              </p>

              <div className="mt-6 space-y-4">
                {skillGroup.items.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs font-mono text-muted">{skill.level}%</span>
                    </div>
                    <div className="mt-2 h-1.5 rounded-full bg-border">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 0.9, delay: 0.7 + groupIndex * 0.1 + index * 0.07, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 rounded-3xl bg-primary/0 transition-all duration-300 group-hover:bg-primary/5" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
