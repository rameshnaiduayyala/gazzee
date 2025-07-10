import React from 'react'
import { motion } from 'framer-motion'
import Bot from "../assets/ai bot.png"
import Bot2 from "../assets/home1.png"
import { PlayCircle, Mail } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen bg-white/70 dark:bg-black/70 text-neutral-800 dark:text-white overflow-hidden transition-colors duration-300 pt-15">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16 h-full">

        {/* LEFT CONTENT */}
        <div className="z-10 flex flex-col justify-center h-full w-full">
          {/* Badge with Bot */}
          <motion.div
            className="flex items-center gap-3 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-800/30 dark:to-blue-800/30 px-4 py-2 rounded-full shadow-sm max-w-fit mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.img
              src={Bot}
              alt="AI Bot"
              className="w-8 h-8"
              animate={{ y: [0, -12, 0, -6, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-sm font-semibold text-blue-900 dark:text-cyan-300 uppercase tracking-wider">
              AI Powered
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight max-w-2xl text-blue-900 dark:text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Empowering Industry with AI Vision
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-lg text-blue-800 dark:text-gray-300 max-w-lg mt-6 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Real-time object detection and counting powered by intelligent machine vision. Designed for performance and scale.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg"
            >
              <PlayCircle className="w-5 h-5" />
              Watch Demo
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-blue-700 dark:text-cyan-200 border border-blue-200 dark:border-cyan-300/40 hover:bg-blue-50 dark:hover:bg-white/10 transition-all shadow-sm"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <motion.div
            className="relative"
            animate={{ y: [0, -12, 0, -6, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={Bot2}
              alt="AI Visual"
              className="w-[400px] max-w-full drop-shadow-xl rounded-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
