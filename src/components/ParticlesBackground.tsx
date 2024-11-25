"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      className="relative h-[100%] w-[100%] z-[-1]" // to make the particles under your componment
      init={init}
      id="particles"
      options={{
        particles: {
          color: { value: "#333333" },
          number: {
            value: 190,
            density: {
              enable: true,
              area: 1500,
            },
          },
          links: {
            color: "#333333",
            distance: 200,
            enable: true,
            opacity: 0.5,
          },
          move: {
            enable: true,
            direction: "none",
            speed: 0.5,
          },
          size: {
            value: 1,
          },
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "repulse",
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticlesBackground;
