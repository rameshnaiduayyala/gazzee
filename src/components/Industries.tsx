import { motion } from 'framer-motion'
import {
  Truck,
  Banknote,
  Factory,
} from 'lucide-react'

const industries = [
  {
    title: 'Logistics',
    description: 'Optimize supply chains, route planning, and fleet management with real-time AI-driven insights and demand prediction.',
    icon: <Truck size={36} className="text-cyan-400" />,
  },
  {
    title: 'Healthcare',
    description: 'Enhance diagnostics, automate medical imaging, and enable predictive care for better patient outcomes and hospital efficiency.',
    icon: <Banknote size={36} className="text-pink-400" />,
  },
  {
    title: 'Finance',
    description: 'Detect fraud, analyze risks, and deliver personalized banking experiences through smart data processing and real-time models.',
    icon: <Banknote size={36} className="text-green-400" />,
  },
  {
    title: 'Manufacturing',
    description: 'Automate quality checks, detect anomalies, and predict machine failures to ensure uptime and process optimization.',
    icon: <Factory size={36} className="text-yellow-400" />,
  },
]

const IndustryCard = ({ title, description, icon, index }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="group relative bg-white/5 border border-white/10 backdrop-blur rounded-xl p-6 shadow-xl transition-transform hover:-translate-y-2"
  >
    {/* Border glow effect */}
    <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-purple-500/30 to-cyan-400/10 opacity-0 group-hover:opacity-100 blur-lg z-0 transition duration-300" />

    <div className="relative z-10">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-neutral-400 text-sm">{description}</p>
    </div>
  </motion.div>
)

const Industries = () => {
  return (
    <section id="services" className="relative bg-black/85 py-24 px-6 overflow-hidden">
      {/* Floating particle background gradient glow */}
      <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-radial from-cyan-400/20 to-transparent rounded-full blur-2xl z-0" />

      <div className="relative z-10 max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          AI-Powered Solutions Across Industries
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-neutral-400 max-w-2xl mx-auto"
        >
          Transforming logistics, healthcare, finance, and manufacturing using intelligent systems.
        </motion.p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {industries.map((industry, index) => (
          <IndustryCard key={index} {...industry} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Industries
