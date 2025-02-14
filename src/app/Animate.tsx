"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

interface ViewportState {
  inViewport: boolean;
  below: boolean;
}

const AnimatedItem = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  // Use a ref to store the previous viewport state
  const prevState = useRef<ViewportState>({
    inViewport: false,
    below: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      // Get the element's bounding rectangle
      const rect = ref.current.getBoundingClientRect();

      // Determine if the element is in the viewport:
      // (here we say it's "in viewport" if any part of it is visible)
      const inViewport = rect.top < window.innerHeight && rect.bottom > 0;

      // Determine if the element is entirely below the viewport
      const below = rect.top >= window.innerHeight;

      /*  
        Now, we want to trigger animation only when the element is coming
        into view (or leaving) from below:
        - Entering from below: previously it was "below" (i.e. not visible)
          and now some part is visible.
        - Leaving from below: previously it was visible and now it’s fully
          below the viewport.
      */
      if (prevState.current.below && inViewport) {
        // Element is entering from below
        controls.start("visible");
      } else if (prevState.current.inViewport && below) {
        // Element is leaving from below
        controls.start("hidden");
      }
      
      // Update previous state for the next scroll event
      prevState.current = { inViewport, below };
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);
    // Also run once to initialize the state correctly
    handleScroll();

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
      className="opacity-0"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedItem;
