'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, Users, ExternalLink } from 'lucide-react';

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
    <section id="projects" className="py-24 bg-gradient-to-b from-[#0f0f14] to-[#0a0a0f] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`
                group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 
                hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden
                flex flex-col
                ${project.featured ? 'md:col-span-2 lg:col-span-3' : ''}
              `}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                  {project.subtitle && (
                    <p className="text-sm text-gray-400">{project.subtitle}</p>
                  )}
                </div>
                <span
                  className={`
                    px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap
                    ${
                      project.status === 'Active'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                    }
                  `}
                >
                  {project.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-4 flex-grow leading-relaxed">
                {project.description}
              </p>

              {/* Stats (if available) */}
              {project.stats && (
                <div className="flex gap-4 mb-4">
                  {project.stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <stat.icon size={16} />
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors mt-auto"
                whileHover={{ x: 5 }}
              >
                Learn more <ExternalLink size={16} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
