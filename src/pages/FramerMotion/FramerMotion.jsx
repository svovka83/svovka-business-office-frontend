import { Routes, Route } from "react-router-dom";
import MotionNull from "./MotionNull";
import MotionOne from "./MotionOne/MotionOne";
import MotionTwo from "./MotionTwo/MotionTwo";
import MotionTree from "./MotionTree/MotionTree";
import MotionFour from "./MotionFour/MotionFour";
import MotionFive from "./MotionFive/MotionFive";

const FramerMotion = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MotionNull />} />
        <Route path="/AnimatePresence" element={<MotionOne />} />
        <Route path="/layoutId" element={<MotionTwo />} />
        <Route path="/whileInView" element={<MotionTree />} />
        <Route path="/Reorder" element={<MotionFour />} />
        <Route path="MotionValues" element={<MotionFive />} />
      </Routes>
    </div>
  );
};

export default FramerMotion;
