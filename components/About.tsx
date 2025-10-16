'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { TrendingUp, Users, Star } from 'lucide-react';

const stats = [
  { value: 254, label: 'Total Downloads', icon: TrendingUp },
  { value: 145, label: 'YouTube Subscribers', icon: Users },
  { value: 4, label: 'GitHub Followers', icon: Star },
];

function AnimatedCounter({ value, inView }: { value: number; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, value]);

  return <span>{count}</span>;
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative overflow-hidden bg-background-secondary py-32 px-4">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.h2
          className="mb-20 text-center font-['Poppins'] text-5xl font-bold text-foreground md:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-primary">Me</span>
        </motion.h2>

        <div className="mb-16 grid gap-8 md:grid-cols-3">
          <motion.div
            className="space-y-6 md:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg leading-relaxed text-muted">
              I'm Gabriel, a passionate student developer known online as "thesomewhatyou". I specialize in
              creating Minecraft optimization solutions and building tools that make a difference in the
              community.
            </p>
            <p className="text-lg leading-relaxed text-muted">
              My work focuses on open source development, automation, and helping people get the most out of
              their gaming experience, especially on older hardware. I believe in the power of optimization and
              making technology accessible to everyone.
            </p>
            <p className="text-lg leading-relaxed text-muted">
              When I'm not coding, you'll find me creating content, working on animations, or contributing to
              various open source projects like OptimiHost.
            </p>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50"
                whileHover={{ scale: 1.03, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <div className="relative z-10 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <stat.icon size={24} />
                  </div>
                  <div>
                    <div className="font-['Poppins'] text-5xl font-bold text-primary">
                      <AnimatedCounter value={stat.value} inView={isInView} />
                    </div>
                    <div className="mt-1 font-mono text-xs uppercase tracking-wider text-muted">
                      {stat.label}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-primary/0 transition-all duration-300 group-hover:bg-primary/5" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
