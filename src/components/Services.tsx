import React from 'react'
import { Bot, Brain, Cloud, Cpu, Settings, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: <Bot size={36} className="text-cyan-400" />,
    title: 'AI Development',
    desc: 'Custom AI models, vision systems, and predictive analytics for industrial needs.',
  },
  {
    icon: <Brain size={36} className="text-cyan-400" />,
    title: 'Gen AI Integration',
    desc: 'Utilize Large Language Models for automation, insights, and enterprise transformation.',
  },
  {
    icon: <Cloud size={36} className="text-cyan-400" />,
    title: 'Cloud & Edge AI',
    desc: 'Deploy AI to cloud-native platforms or edge devices for real-time inference.',
  },
  {
    icon: <Cpu size={36} className="text-cyan-400" />,
    title: 'Embedded Systems',
    desc: 'Run optimized AI on Jetson, Coral, Raspberry Pi, and other hardware devices.',
  },
  {
    icon: <Settings size={36} className="text-cyan-400" />,
    title: 'Automation & Control',
    desc: 'Integrate AI with PLCs, robotics, and industrial automation systems.',
  },
  {
    icon: <ShieldCheck size={36} className="text-cyan-400" />,
    title: 'Security & Surveillance',
    desc: 'Use AI for threat detection, access control, and compliance in smart environments.',
  },
]

const Services: React.FC = () => {
  return (
    <motion.section
      id="solutions"
      className="bg-black/40 py-24 px-6 mx-auto w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          We build intelligent computer vision and AI systems tailored for global industry.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            className="p-6 border border-white/10 bg-white/5 rounded-2xl backdrop-blur-xl hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{s.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-white/70 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Services