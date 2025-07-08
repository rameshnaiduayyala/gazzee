import React from 'react'
import { motion } from 'framer-motion'
import Bot from "../assets/ai bot.png"
import { PlayCircle, Mail } from 'lucide-react'


const Hero: React.FC = () => {
  return (
    <section className="relative bg-black/50 h-[100vh] overflow-hidden text-white">

      <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-7xl px-6 mx-auto">
        <motion.div
          className="flex items-center w-full max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, -12, 0, -6, 0] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img src={Bot} alt="AI Bot" className="w-12 h-12" />
          </motion.div>
          <h1 className="text-xl font-bold uppercase underline decoration-pink-500 underline-offset-8">
            AI Powered
          </h1>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Empowering Industry with AI Vision
        </motion.h1>

        <motion.p
          className="text-lg text-blue-200 max-w-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Real-time object detection and counting powered by intelligent machine vision.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a
            href="#demo"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg"
          >
            <PlayCircle className="w-5 h-5" />
            Watch Demo
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white border border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all shadow-sm"
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
