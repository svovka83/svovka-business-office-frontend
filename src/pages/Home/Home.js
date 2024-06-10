import React from "react";
import { Routes, Route } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  selectorFullData,
  selectorStatus,
  fetchGetMe,
} from "../../redux/slices/usersSlice";

import styles from "./Home.module.css";

import SideBar from "./sideBar/SideBar";
import UsersRoute from "./sideBar/UsersRoute/UsersRoute";
import PostsRoute from "./sideBar/PostsRoute/PostsRoute";
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
  const dispatch = useDispatch();
  const status = useSelector(selectorStatus);
  const data = useSelector(selectorFullData);
  const [screen, setScreen] = React.useState(true);

  React.useEffect(() => {
    if (window.innerWidth < 600) {
      return setScreen(false);
    }
  }, []);

  React.useEffect(() => {
    dispatch(fetchGetMe());
  }, [dispatch]);

  return (
    <div>
      {status === "loading" ? (
        "... Loading"
      ) : (
        <div className={screen ? styles.home : ""}>
          <div>
            <h2 className={styles.welcome}>
              Welcome {data ? data.fullName : "user"}{" "}
            </h2>
            <Routes>
              <Route path="/*" element={<SideBar />} />
              <Route path="/users/*" element={<UsersRoute />} />
              <Route path="/posts/*" element={<PostsRoute />} />
              <Route path="/programs/*" element={<ProgramsRoute />} />
            </Routes>
          </div>
          <div>
            <Routes>
              <Route path="/posts" element={<Posts />} />
              <Route path="/posts/:id" element={<Post />} />
              <Route path="/posts/create_post" element={<CreatePost />} />

              <Route path="/programs/calculator" element={<Calculator />} />
              <Route path="/programs/timer" element={<Timer />} />

              <Route path="/users" element={<AllUsers />} />
              <Route path="/users/:id" element={<User />} />
              <Route path="/users/friends" element={<Friends />} />
              <Route path="/users/profile" element={<MyProfile />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
