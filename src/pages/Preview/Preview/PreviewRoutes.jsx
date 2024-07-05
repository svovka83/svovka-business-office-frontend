import { Routes, Route } from "react-router-dom";

import Home from "../Home/Home";
import Gallery from "../Gallery/Gallery";

const PreviewRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
};

export default PreviewRoutes;
