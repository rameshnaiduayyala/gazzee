import React from 'react';
import { Bot, Brain, Cloud, Cpu, Settings, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Bot size={36} className="text-cyan-500" />,
    title: 'AI Development',
    desc: 'Custom AI models, vision systems, and predictive analytics for industrial needs.',
  },
  {
    icon: <Brain size={36} className="text-cyan-500" />,
    title: 'Gen AI Integration',
    desc: 'Utilize Large Language Models for automation, insights, and enterprise transformation.',
  },
  {
    icon: <Cloud size={36} className="text-cyan-500" />,
    title: 'Cloud & Edge AI',
    desc: 'Deploy AI to cloud-native platforms or edge devices for real-time inference.',
  },
  {
    icon: <Cpu size={36} className="text-cyan-500" />,
    title: 'Embedded Systems',
    desc: 'Run optimized AI on Jetson, Coral, Raspberry Pi, and other hardware devices.',
  },
  {
    icon: <Settings size={36} className="text-cyan-500" />,
    title: 'Automation & Control',
    desc: 'Integrate AI with PLCs, robotics, and industrial automation systems.',
  },
  {
    icon: <ShieldCheck size={36} className="text-cyan-500" />,
    title: 'Security & Surveillance',
    desc: 'Use AI for threat detection, access control, and compliance in smart environments.',
  },
];

const Services: React.FC = () => {
  return (
    <motion.section
      id="services"
      className="relative w-full bg-white/70 dark:bg-zinc-950/70 py-24 px-6 transition-colors duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-400 tracking-tight">
          What We Do
        </h2>
        <p className="text-neutral-900 dark:text-neutral-300 max-w-2xl mx-auto mt-4 text-lg">
          We build intelligent computer vision and AI systems tailored for global industry.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={i}
            className="p-6 bg-white/70 dark:bg-white/5 border border-neutral-200 dark:border-white/10 
              rounded-2xl shadow-md hover:shadow-cyan-900/30 transition-transform hover:-translate-y-1 
              backdrop-blur-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{s.icon}</div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
              {s.title}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;
