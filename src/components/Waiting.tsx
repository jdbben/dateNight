"use client";
import { RefObject, useEffect, useRef } from "react";

const Waiting = () => {
  const ref = useRef<HTMLDivElement>(null);
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const func = (
    radius: number,
    speedControll: number,
    ref: RefObject<HTMLDivElement>
  ) => {
    useEffect(() => {
      let angle = 0;

      const animate = () => {
        if (ref.current) {
          angle += 0.2;
          const x = radius * Math.cos((angle * Math.PI) / speedControll);
          const y = radius * Math.sin((angle * Math.PI) / speedControll);
          ref.current.style.transform = `rotate(${angle}deg) translate(${x}px , ${y}px) rotate(-${angle}deg)`;
        }
        animationIdRef.current = requestAnimationFrame(animate);
      };
      animate();

      return () => {
        if (animationIdRef.current !== null) {
          cancelAnimationFrame(animationIdRef.current);
        }
      };
    }, []);
  };

  func(120, 60, ref);
  func(140, 25, ref1);
  func(100, 18, ref2);
  return (
    <div className="flex justify-center items-center h-screen mx-auto">
      <div
        ref={ref}
        className="h-8 w-8 rounded-full bg-black animate-[] absolute "
      />
      <div
        ref={ref1}
        className="h-11 w-11 rounded-full bg-black animate-[] absolute ease-in-out "
      />
      <div
        ref={ref2}
        className="h-4 w-4 rounded-full bg-black animate-[] absolute ease-out "
      />
      <div className="h-[120px] w-[120px] rounded-full bg-black absolute  ease-in" />
    </div>
  );
};

export default Waiting;
