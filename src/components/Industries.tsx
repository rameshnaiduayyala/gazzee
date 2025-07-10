import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Truck, Banknote, Factory } from 'lucide-react';

const industries = [
  {
    title: 'Logistics',
    description: 'Optimize supply chains, route planning, and fleet management with real-time AI-driven insights and demand prediction.',
    icon: <Truck size={36} className="text-cyan-600" />,
  },
  {
    title: 'Healthcare',
    description: 'Enhance diagnostics, automate medical imaging, and enable predictive care for better patient outcomes and hospital efficiency.',
    icon: <Banknote size={36} className="text-pink-500" />,
  },
  {
    title: 'Finance',
    description: 'Detect fraud, analyze risks, and deliver personalized banking experiences through smart data processing and real-time models.',
    icon: <Banknote size={36} className="text-green-500" />,
  },
  {
    title: 'Manufacturing',
    description: 'Automate quality checks, detect anomalies, and predict machine failures to ensure uptime and process optimization.',
    icon: <Factory size={36} className="text-yellow-500" />,
  },
];

const IndustryCard = ({ title, description, icon, index }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="group relative bg-white/70 dark:bg-white/10 border border-neutral-200 dark:border-white/10 
               rounded-2xl p-6 shadow-sm hover:shadow-md transition-transform hover:-translate-y-1 
               backdrop-blur"
  >
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-200/20 to-transparent 
                    opacity-0 group-hover:opacity-100 blur-lg z-0 transition duration-300" />
    <div className="relative z-10">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">{title}</h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const Industries = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const yTop = useSpring(
    useTransform(scrollYProgress, [0, 1], [-100, 100]),
    { stiffness: 40, damping: 20 }
  );
  const yBottom = useSpring(
    useTransform(scrollYProgress, [0, 1], [100, -100]),
    { stiffness: 40, damping: 20 }
  );

  return (
    <section
      ref={ref}
      id="industries"
      className="relative bg-white/80 dark:bg-black/70 py-24 px-6 overflow-hidden transition-colors duration-300"
    >
      {/* PARALLAX BACKGROUND BLOBS */}
      <motion.div
        style={{ y: yTop }}
        className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] 
                   bg-gradient-radial from-cyan-100/50 to-transparent rounded-full blur-3xl z-0"
      />
      <motion.div
        style={{ y: yBottom }}
        className="absolute bottom-0 right-0 w-[300px] h-[300px] 
                   bg-gradient-radial from-pink-100/50 to-transparent rounded-full blur-2xl z-0"
      />

      {/* HEADING */}
      <div className="relative z-10 max-w-7xl mx-auto text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white"
        >
          AI-Powered Solutions Across Industries
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mt-4 text-lg"
        >
          Transforming logistics, healthcare, finance, and manufacturing using intelligent systems.
        </motion.p>
      </div>

      {/* GRID */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {industries.map((industry, index) => (
          <IndustryCard key={index} {...industry} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Industries;
