import { motion } from "framer-motion";

const Items = ({ items }) => {
  return (
    <motion.div
      className="grid_2"
      initial={{ x: -300 }}
      whileInView={{ x: 0 }}
      transition={{
        duration: 1.5,
      }}
      delay={800}
    >
      <h3>{items.title}</h3>
      <p>{items.text}</p>
    </motion.div>
  );
};

export default Items;
