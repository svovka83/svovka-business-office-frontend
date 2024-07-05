import { Routes, Route } from "react-router-dom";
import MotionNull from "./MotionNull";
import MotionOne from "./MotionOne/MotionOne";
import MotionTwo from "./MotionTwo/MotionTwo";
import MotionTree from "./MotionTree/MotionTree";
import MotionFour from "./MotionFour/MotionFour";

const FramerMotion = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MotionNull />} />
        <Route path="/AnimatePresence" element={<MotionOne />} />
        <Route path="/layoutId" element={<MotionTwo />} />
        <Route path="/whileInView" element={<MotionTree />} />
        <Route path="/Reorder" element={<MotionFour />} />
      </Routes>
    </div>
  );
};

export default FramerMotion;
