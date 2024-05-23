import { Routes, Route } from "react-router-dom";

import styles from "./Home.module.css";

import LeftSide from "./leftSide/LeftSide";
import Users from "./rightSide/Users";

const Home = () => {
  return (
    <div className={styles.home}>
      <LeftSide />
      <div>
        <h1>Users</h1>
        <Routes>
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
