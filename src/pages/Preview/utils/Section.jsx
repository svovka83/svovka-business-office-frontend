import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const Section = ({ children }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  return (
    <section ref={ref}>
      <motion.div style={{ scale: scrollYProgress, opacity: scrollYProgress }}>
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
