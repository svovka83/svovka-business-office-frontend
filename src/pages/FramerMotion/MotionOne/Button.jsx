import { motion } from "framer-motion";

const Button = (props) => {
  const { text, handleClick } = props;

  return (
    <span>
      <motion.button
        style={btnStyle}
        whileHover={{ backgroundColor: "#ddd" }}
        whileTap={{ backgroundColor: "#ccc" }}
        onClick={handleClick}
      >
        {text}
      </motion.button>
    </span>
  );
};

export default Button;

const btnStyle = {
  border: "none",
  outline: "none",
  padding: "12px 16px",
  backgroundColor: "#f1f1f1",
  cursor: "pointer",
};
