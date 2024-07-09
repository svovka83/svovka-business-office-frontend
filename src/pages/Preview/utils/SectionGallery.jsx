import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const Section = ({ children }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.8 1"],
  });

  return (
    <section ref={ref}>
      <motion.div
        style={{
          scale: scrollYProgress,
          scaleY: scrollYProgress,
          opacity: scrollYProgress,
        }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
