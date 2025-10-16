'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-background py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          className="flex flex-col items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="flex items-center gap-2 text-sm text-muted">
            © {new Date().getFullYear()} Gabriel (thesomewhatyou). Made with
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Heart size={16} className="fill-red-500 text-red-500" />
            </motion.span>
            and Next.js
          </p>
          <p className="text-xs text-muted">Open source enthusiast making Minecraft things.</p>
        </motion.div>
      </div>
    </footer>
  );
}
