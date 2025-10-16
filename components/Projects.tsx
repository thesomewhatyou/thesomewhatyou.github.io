'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, Users, ExternalLink, ArrowUpRight } from 'lucide-react';

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
    <section id="projects" className="py-32 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-[#00ffff] rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-20 font-['Space_Grotesk'] text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured <span className="text-[#00ff88]">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`
                group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 
                hover:border-[#00ff88]/50 transition-all duration-300 relative overflow-hidden
                flex flex-col
                ${project.featured ? 'md:col-span-2 lg:col-span-3' : ''}
              `}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00ff88] to-[#00ffff] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1 font-['Space_Grotesk']">{project.title}</h3>
                  {project.subtitle && (
                    <p className="text-sm text-gray-500 font-mono">{project.subtitle}</p>
                  )}
                </div>
                <span
                  className={`
                    px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap font-mono border
                    ${
                      project.status === 'Active'
                        ? 'bg-[#00ff88]/10 text-[#00ff88] border-[#00ff88]/30'
                        : 'bg-gray-500/10 text-gray-400 border-gray-500/30'
                    }
                  `}
                >
                  {project.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-4 flex-grow leading-relaxed">
                {project.description}
              </p>

              {/* Stats (if available) */}
              {project.stats && (
                <div className="flex gap-4 mb-4">
                  {project.stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                      <stat.icon size={16} />
                      <span className="font-mono">{stat.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-400 rounded-full border border-white/10 font-mono"
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
                className="inline-flex items-center gap-2 text-sm font-medium text-[#00ff88] hover:text-[#00ffff] transition-colors mt-auto group/link"
                whileHover={{ x: 5 }}
              >
                View Project
                <ArrowUpRight size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </motion.a>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-[#00ff88]/0 group-hover:bg-[#00ff88]/5 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
