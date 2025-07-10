import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const BackgroundParticles = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      <Particles
        id="tsparticles-light"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: { color: "#ffffff" },
          fpsLimit: 60,
          particles: {
            number: {
              value: 50,
              density: { enable: true, area: 900 },
            },
            color: { value: "#94a3b8" }, // slate-400
            links: {
              enable: true,
              color: "#cbd5e1", // slate-300
              distance: 120,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              outModes: { default: "out" },
            },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2 } },
            opacity: { value: 0.3 },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default BackgroundParticles;
