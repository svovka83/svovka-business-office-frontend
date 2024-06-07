import React from "react";
import { Routes, Route } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectorFullData } from "../../redux/slices/usersSlice";

import styles from "./Home.module.css";

import SideBar from "./sideBar/SideBar";
import UsersRoute from "./sideBar/UsersRoute/UsersRoute";
import ProgramsRoute from "./sideBar/ProgramsRoute/ProgramsRoute";

import AllUsers from "./content/Users/AllUsers";
import User from "./content/Users/User/User";
import Friends from "./content/Users/Friends/Friends";
import MyProfile from "./content/Users/MyProfile/MyProfile";

import Posts from "./content/Posts/Posts";
import CreatePost from "./content/Posts/CreatePost/CreatePost";
import Post from "./content/Posts/Post/Post";

import Calculator from "./content/ProgramsContent/Calculator/Calculator";
import Timer from "./content/ProgramsContent/Timer/Timer";

const Home = () => {
  const data = useSelector(selectorFullData);
  const [screen, setScreen] = React.useState(true);

  React.useEffect(() => {
    if (window.innerWidth < 600) {
      return setScreen(false);
    }
  }, []);

  return (
    <div className={screen ? styles.home : ""}>
      <div>
        <h2 className={styles.welcome}>
          Welcome {data ? data.fullName : "user"}{" "}
        </h2>
        <Routes>
          <Route path="/*" element={<SideBar />} />
          <Route path="/programs/*" element={<ProgramsRoute />} />
          <Route path="/users/*" element={<UsersRoute />} />
        </Routes>
      </div>
      <div>
        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/create_post" element={<CreatePost />} />
          <Route path="/posts/:id" element={<Post />} />

          <Route path="/programs/calculator" element={<Calculator />} />
          <Route path="/programs/timer" element={<Timer />} />

          <Route path="/users" element={<AllUsers />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/users/friends" element={<Friends />} />
          <Route path="/users/profile" element={<MyProfile />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
