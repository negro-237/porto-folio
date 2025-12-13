"use client";

import { motion } from "framer-motion";
import { Facebook, Linkedin, Twitter, X } from "lucide-react"; 
// Note: J'utilise toujours Instagram ici, comme dans la correction précédente.

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
    
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          // La couleur de texte du h1 est changée en dark:text-red-500
          className="text-6xl font-extrabold"
        >
          Coming Soon, Negro Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          // La couleur de texte du p est changée en dark:text-gray-300
          className="mt-4 text-xl opacity-80 dark:text-gray-300"
        >
          A new digital experience is in construction...
        </motion.p>
      </section>

      {/* FOOTER */}
      <footer className="w-full py-8 border-t border-gray-300 dark:border-gray-700 flex flex-col items-center space-y-4">
        {/* Le texte du footer est correct */}
        <p className="text-gray-600 dark:text-gray-400 text-sm">© 2025 - Tous droits réservés</p>
        <div className="flex space-x-6">
          <a href="#" className=""><Facebook /></a>
          <a href="https://x.com/negro_237" className=""><X /></a> 
          <a href="https://www.linkedin.com/in/petito-tapondjou-consulting" className=""><Linkedin /></a>
        </div>
      </footer>
    </main>
  );
}