import { motion } from 'framer-motion';

const features = [
  {
    title: "SPEED + SCALE",
    description: "Lightning-fast analytics with unlimited scale. Support your most demanding applications with real-time analytics — no matter how big your apps, user base or concurrency demands grow.",
    imageSrc: "https://images.contentstack.io/v3/assets/bltac01ee6daa3a1e14/bltf12737aaaa75f1e7/67b631d99bea6d864b491671/img_single-shot-retrieval-for-ai-apps_splitblock.png",
  },
  {
    title: "PLATFORM",
    description: "Feature rich. Future proof. Build your intelligent applications with a feature-rich platform that delivers everything you need.",
    imageSrc: "https://images.contentstack.io/v3/assets/bltac01ee6daa3a1e14/bltf12737aaaa75f1e7/67b631d99bea6d864b491671/img_single-shot-retrieval-for-ai-apps_splitblock.png",
  },
  {
    title: "REAL-TIME ANALYTICS",
    description: "Scale from one to one million customers, handling SQL, JSON, full text and vector workloads — all in one unified platform.",
    imageSrc: "https://images.contentstack.io/v3/assets/bltac01ee6daa3a1e14/bltf12737aaaa75f1e7/67b631d99bea6d864b491671/img_single-shot-retrieval-for-ai-apps_splitblock.png",
  },
];

const FeatureCard = ({ title, description, imageSrc, index }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="bg-black/60 border border-neutral-800 rounded-xl overflow-hidden hover:-translate-y-2 transition-transform"
  >
    <div className="p-6 h-full flex flex-col justify-between">
      <div>
        <h3 className="text-white text-xl font-semibold mb-4">{title}</h3>
        <p className="text-neutral-400 mb-6">{description}</p>
      </div>
      <div className="h-48 w-full overflow-hidden rounded-lg bg-neutral-900">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: index * 0.3 }}
          src={imageSrc}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  </motion.div>
);

const SplitBlock = ({
  title,
  heading,
  description,
  imgUrl,
  reverse = false,
  actions = [],
  glow = false,
}: any) => {
  return (
    <div className={`grid lg:grid-cols-2 gap-16 items-center mt-32 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      <motion.div
        initial={{ opacity: 0, x: reverse ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-neutral-400 text-sm font-semibold mb-4">{title}</p>
        <h2 className="text-white text-4xl lg:text-5xl font-bold mb-6">{heading}</h2>
        <p className="text-neutral-400 text-lg mb-8">{description}</p>
        <div className="flex gap-4 flex-wrap">
          {actions.map((a: any, i: number) => (
            <button
              key={i}
              className={`px-6 py-3 rounded-lg text-sm font-medium ${a.variant === 'glass'
                ? 'bg-white/10 text-white backdrop-blur hover:bg-white/20'
                : 'bg-white text-black hover:bg-neutral-100'
                }`}
            >
              {a.label}
            </button>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="rounded-xl overflow-hidden shadow-2xl relative">
          <img
            src={imgUrl}
            alt={heading}
            className="object-cover w-full h-auto"
          />
        </div>
        {glow && (
          <div className="absolute -top-10 -right-10 w-52 h-52 bg-purple-500/20 blur-3xl rounded-full z-[-1]" />
        )}
      </motion.div>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <section className="bg-black/90 bg-black py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} index={i} />
          ))}
        </div>

        <SplitBlock
          title="SPEED + SCALE"
          heading="Lightning-fast analytics with unlimited scale"
          description="Support your most demanding applications with real-time analytics — no matter how big your apps, user base or concurrency demands grow."
          imgUrl={features[0].imageSrc}
          actions={[{ label: 'Learn more', variant: 'glass' }]}
        />

        <SplitBlock
          title="PLATFORM"
          heading="Feature rich. Future proof."
          description="Build your intelligent applications with a feature-rich platform that delivers everything you need."
          imgUrl={features[1].imageSrc}
          reverse
          actions={[{ label: 'Learn more', variant: 'glass' }]}
        />

        <SplitBlock
          title="REAL-TIME ANALYTICS"
          heading="Unified data platform for modern applications"
          description="Handle diverse workloads including SQL, JSON, full text, and vector operations with blazing-fast performance. Perfect for AI-powered applications and real-time analytics at any scale."
          imgUrl={features[2].imageSrc}
          actions={[
            { label: 'Try it now', variant: 'solid' },
            { label: 'View documentation', variant: 'glass' },
          ]}
          glow
        />
      </div>
    </section>
  );
};

export default FeatureSection;
