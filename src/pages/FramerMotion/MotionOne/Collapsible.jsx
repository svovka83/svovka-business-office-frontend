import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

const Collapsible = (props) => {
  const { title = "click me", children } = props;

  const [isVisible, setVisible] = useState(false);

  const handleVisibility = () => setVisible(!isVisible);

  return (
    <div>
      <div
        onClick={handleVisibility}
        style={{
          fontSize: 32,
          fontWeight: "bold",
          color: "blue",
          cursor: "pointer",
        }}
      >
        {title}
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: "hidden" }}
            transition={{ duration: 2 }}
          >
            <div>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Collapsible;
