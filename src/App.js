import { Routes, Route } from "react-router-dom";

import Header from "./Header/Header";
import Home from "./pages/Home/Home"
import Registration from "./pages/Registration/Registration";
import Users from "./pages/Users/Users"

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
