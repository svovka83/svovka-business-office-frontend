import React from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Start from "./pages/Start/Start";
import Header from "./Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";

import styles from "./App.module.css";

import { fetchGetMe } from "./redux/slices/usersSlice";

function App() {
const dispatch = useDispatch()

React.useEffect(() => {
  dispatch(fetchGetMe())
},[dispatch])

  return (
    <div className={styles.App}>
      <Header />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/home/*" element={<Home />} />        
      </Routes>
    </div>
  );
}

export default App;
