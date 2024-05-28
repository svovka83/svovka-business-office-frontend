import { Routes, Route } from "react-router-dom";

import styles from "./Home.module.css";

import SideBar from "./sideBar/SideBar";
import Posts from "./content/Posts/Posts";
import CreatePost from "./content/Posts/CreatePost";
import Post from "./content/Posts/Post/Post";
import Users from "./content/Users/Users";

const Home = () => {
  return (
    <div className={styles.home}>
      <SideBar />
      <div>
        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/create_post" element={<CreatePost />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
