import { Routes, Route } from "react-router-dom";

import styles from "./Home.module.css";

import SideBar from "./sideBar/SideBar";
import Posts from "./content/Posts";
import CreatePost from "./content/CreatePost";
import Users from "./content/Users";

const Home = () => {
  return (
    <div className={styles.home}>
      <SideBar />
      <div>
        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/create_post" element={<CreatePost />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
