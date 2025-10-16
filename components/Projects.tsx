'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, Users, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 'toscr',
    title: 'TOSCR Project',
    subtitle: "thesomewhatyou's Old Computer MC Revival",
    description: 'A Minecraft modpack designed to help revive old PCs with integrated graphics for optimal gameplay.',
    stats: [
      { icon: Download, label: '254 downloads' },
      { icon: Users, label: '1 follower' },
    ],
    tags: ['Optimization', 'Minecraft', 'Modrinth'],
    status: 'Active',
    featured: true,
    link: 'https://modrinth.com/user/gabrielpolikerpaul',
  },
  {
    id: 'horror',
    title: 'Horror Hell',
    subtitle: '1.19.2 Forge',
    description: 'A horror-themed Minecraft modpack featuring scaries and creepypastas with shader support.',
    tags: ['Horror', 'Survival', 'Modrinth'],
    status: 'Released',
    link: 'https://modrinth.com/user/gabrielpolikerpaul',
  },
  {
    id: 'gabeos',
    title: 'GabeOS',
    subtitle: 'Open Source OS',
    description: 'The core OS project—pushing boundaries in open-source systems.',
    tags: ['OS Development', 'Open Source', 'GitHub'],
    status: 'Active',
    link: 'https://github.com/thesomewhatyou',
  },
  {
    id: 'gabeos-workflow',
    title: 'GabeOS-Workflow-Dev',
    subtitle: 'Development Tools',
    description: 'Development tools and automated workflows for the GabeOS ecosystem.',
    tags: ['CI/CD', 'Automation', 'GitHub'],
    status: 'Active',
    link: 'https://github.com/thesomewhatyou',
  },
  {
    id: 'p2installer',
    title: 'P2Installer',
    subtitle: 'Linux Installer',
    description: 'Streamlining installing for Player2 on a Linux distro.',
    tags: ['Linux', 'Installer', 'GitHub'],
    status: 'Maintained',
    link: 'https://github.com/thesomewhatyou',
  },
  {
    id: 'optimihost',
    title: 'OptimiHost',
    subtitle: 'Team Contributor',
    description: 'Contributing to hosting solutions and server optimization for improved performance.',
    tags: ['Hosting', 'Optimization', 'Team'],
    status: 'Contributor',
    link: 'https://github.com/thesomewhatyou',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative overflow-hidden bg-background-secondary py-32 px-4">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-1/3 top-1/3 h-96 w-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.h2
          className="mb-20 text-center font-['Poppins'] text-5xl font-bold text-foreground md:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured <span className="text-primary">Projects</span>
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`
                group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card/70 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/50
                ${project.featured ? 'md:col-span-2 lg:col-span-3' : ''}
              `}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute right-0 top-0 h-0.5 w-0 bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-full" />

              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="font-['Poppins'] text-2xl font-bold text-foreground">{project.title}</h3>
                  {project.subtitle && <p className="mt-1 font-mono text-sm text-muted">{project.subtitle}</p>}
                </div>
                <span
                  className={`whitespace-nowrap rounded-full border px-3 py-1 font-mono text-xs font-medium ${
                    project.status === 'Active'
                      ? 'border-primary/30 bg-primary/10 text-primary'
                      : 'border-muted/30 bg-muted/10 text-muted'
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <p className="mb-4 flex-grow leading-relaxed text-muted">{project.description}</p>

              {project.stats && (
                <div className="mb-4 flex gap-4">
                  {project.stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted">
                      <stat.icon size={16} />
                      <span className="font-mono">{stat.label}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/60 bg-background/40 px-3 py-1 font-mono text-xs font-medium text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link mt-auto inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-accent"
                whileHover={{ x: 5 }}
              >
                View Project
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                />
              </motion.a>

              <div className="absolute inset-0 rounded-3xl bg-primary/0 transition-all duration-300 group-hover:bg-primary/5 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
