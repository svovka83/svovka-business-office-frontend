import { Routes, Route } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectorFullData } from "../../redux/slices/usersSlice";

import styles from "./Home.module.css";

import SideBar from "./sideBar/SideBar";
import Programs from "./sideBar/Programs/Programs";

import Posts from "./content/Posts/Posts";
import CreatePost from "./content/Posts/CreatePost";
import Post from "./content/Posts/Post/Post";
import Users from "./content/Users/Users";

import Calculator from "./content/ProgramsContent/Calculator/Calculator";
import Timer from "./content/ProgramsContent/Timer/Timer";

const Home = () => {
  const data = useSelector(selectorFullData);
  return (
    <div className={styles.home}>
      <div>
        <h1 className={styles.welcome}>
          Welcome {data ? data.fullName : "user"}{" "}
        </h1>
        <Routes>
          <Route path="/*" element={<SideBar />} />
          <Route path="/programs/*" element={<Programs />} />
        </Routes>
      </div>
      <div>
        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/create_post" element={<CreatePost />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/users" element={<Users />} />

          <Route path="/programs/calculator" element={<Calculator />} />
          <Route path="/programs/timer" element={<Timer />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
