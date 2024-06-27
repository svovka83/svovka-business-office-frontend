import React from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "./Header/Header";
import Start from "./pages/Start/Start";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Footer from "./Footer/Footer";

import { fetchGetMe, selectorStatus } from "./redux/slices/usersSlice";
import Circular from "./utils/CircularProgress";

function App() {
  const dispatch = useDispatch();
  const status = useSelector(selectorStatus);

  React.useEffect(() => {
    dispatch(fetchGetMe());
  }, [dispatch]);

  if (status === "loading") {
    <Circular />;
  }

  return (
    <div>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/home/*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
