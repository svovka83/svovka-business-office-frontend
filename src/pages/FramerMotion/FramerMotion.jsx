import { Routes, Route } from "react-router-dom";
import MotionNull from "./MotionNull";
import MotionOne from "./MotionOne/MotionOne";
import MotionTwo from "./MotionTwo/MotionTwo";
import MotionTree from "./MotionTree/MotionTree";

const FramerMotion = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MotionNull />} />
        <Route path="/AnimatePresence" element={<MotionOne />} />
        <Route path="/layoutId" element={<MotionTwo />} />
        <Route path="/viewport" element={<MotionTree />} />
      </Routes>
    </div>
  );
};

export default FramerMotion;
