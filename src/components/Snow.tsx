"use client";

import { useEffect, useRef, useState } from "react";

type Dimensions = {
  height: number;
  width: number;
};

const Snow = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState<Dimensions>({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const snowflakes: {
      x: number;
      y: number;
      radius: number;
      speedY: number;
    }[] = Array.from({ length: 100 }, () => ({
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      radius: Math.random() * 3 + 2,
      speedY: Math.random() * 1 + 0.5,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      snowflakes.forEach((flake) => {
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fillStyle = getComputedStyle(document.documentElement)
          .getPropertyValue("--snow-color")
          .trim();
        ctx.fill();
        flake.y += flake.speedY;
        if (flake.y > dimensions.height) {
          flake.y = 0;
          flake.x = Math.random() * dimensions.width;
        }
      });

      requestAnimationFrame(draw);
    };

    draw();
  }, [dimensions]);

  return (
    <canvas
      ref={ref}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] "
      height={dimensions.height}
      width={dimensions.width}
    ></canvas>
  );
};

export default Snow;
