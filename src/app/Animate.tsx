"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

interface ViewportState {
  inViewport: boolean;
  below: boolean;
  above: boolean;
}

const AnimatedItem = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  // Store the previous viewport state
  const prevState = useRef<ViewportState>({
    inViewport: false,
    below: false,
    above: false,
  });

  const checkVisibility = () => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
    const below = rect.top >= window.innerHeight;
    const above = rect.bottom <= 0;

    // Set to visible if NOT below, otherwise hidden.
    if (below) {
      controls.set("hidden");
    } else {
      controls.set("visible");
    }

    prevState.current = { inViewport, below, above };
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
      const below = rect.top >= window.innerHeight;
      const above = rect.bottom <= 0;

      // Animate only if the element is coming into view from below.
      if (prevState.current.below && inViewport) {
        controls.start("visible");
      } 
      // Animate hiding if the element was in view but then goes below.
      else if (prevState.current.inViewport && below) {
        controls.start("hidden");
      } 
      // If coming from above, set visible immediately (no animation)
      else if (prevState.current.above && inViewport) {
        controls.set("visible");
      }

      prevState.current = { inViewport, below, above };
    };

    // Check initial visibility on mount.
    checkVisibility();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 120 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedItem;
