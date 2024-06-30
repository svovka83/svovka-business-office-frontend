import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import Button from "./Button";

const Filter = ({ data }) => {
  const [cards, setCards] = useState(
    data.filter((el) => el.category === "frontend")
  );

  const buttons = data.reduce((acc, el) => {
    if (acc.includes(el.category)) {
      return acc;
    } else {
      return [...acc, el.category];
    }
  }, []);
  console.log(cards, buttons);

  const handleFilter = (selector) => {
    setCards(data.filter((el) => el.category === selector));
  };

  return (
    <div>
      <div>
        {buttons.map((btn) => (
          <Button
            key={btn}
            text={btn}
            handleClick={() => {
              handleFilter(btn);
            }}
          />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", }}>
        <AnimatePresence initial={false} mode='wait'>
          {cards.map((el) => (
            <motion.div
              key={el.title}
              style={boxStyle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 2,
              }}
            >
              {el.title}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Filter;

const boxStyle = {
  backgroundColor: "#2196F3",
  color: "#ffffff",
  width: "150px",
  height: "50px",
  textAlign: "center",
  padding: "15px 0px",
  margin: "10px 5px",
};
