import React from "react";
import { Routes, Route } from "react-router-dom";

import { useSelector } from "react-redux";
import {
  selectorFullData,
  selectorStatus,
} from "../../redux/slices/usersSlice";

import styles from "./Home.module.css";
import { Grid } from "@mui/material";

import SideBar from "./sideBar/SideBar";
import UserAvatar from "./sideBar/UserAvatar/UserAvatar";
import UsersRoute from "./sideBar/UsersRoute/UsersRoute";
import PostsRoute from "./sideBar/PostsRoute/PostsRoute";
import ProgramsRoute from "./sideBar/ProgramsRoute/ProgramsRoute";

import About from "./content/About/About";

import AllUsers from "./content/Users/AllUsers";
import User from "./content/Users/User/User";
import Friends from "./content/Users/Friends/Friends";
import Dialog from "./content/Users/Dialogs/Dialog";
import MyProfile from "./content/Users/MyProfile/MyProfile";

import Posts from "./content/Posts/Posts";
import CreatePost from "./content/Posts/CreatePost/CreatePost";
import Post from "./content/Posts/Post/Post";

import Calculator from "./content/ProgramsContent/Calculator/Calculator";
import Timer from "./content/ProgramsContent/Timer/Timer";
import Capitals from "./content/ProgramsContent/Capitals/Capitals";

import ChatForm from "./content/ChatContent/ChatForm";
import Chat from "./content/ChatContent/Chat/Chat";

import Circular from "../../utils/CircularProgress";

const Home = () => {
  const status = useSelector(selectorStatus);
  const me = useSelector(selectorFullData);

  if (status === "loading") {
    return <Circular />;
  }

  return (
    <div>
      {status === "loaded" && (
        <Grid container>
          <Grid item xs={12} sm={4} md={3} lg={2} className={styles.welcome}>
            <h2>Welcome {me.fullName} </h2>
            <UserAvatar />
            <Routes>
              <Route path="/*" element={<SideBar />} />
              <Route path="/users/*" element={<UsersRoute />} />
              <Route path="/posts/*" element={<PostsRoute />} />
              <Route path="/programs/*" element={<ProgramsRoute />} />
            </Routes>
          </Grid>
          <Grid item xs={12} sm={8} md={9} lg={10}>
            <Routes>
              <Route path="/" element={<About />} />

              <Route path="/users" element={<AllUsers />} />
              <Route path="/users/:id" element={<User />} />
              <Route path="/users/friends" element={<Friends />} />
              <Route path="/users/dialog/:id" element={<Dialog />} />
              <Route path="/users/profile" element={<MyProfile />} />

              <Route path="/posts" element={<Posts />} />
              <Route path="/posts/:id" element={<Post />} />
              <Route path="/posts/create_post" element={<CreatePost />} />

              <Route path="/programs/calculator" element={<Calculator />} />
              <Route path="/programs/timer" element={<Timer />} />
              <Route path="/programs/capitals" element={<Capitals />} />

              <Route path="/chat_form" element={<ChatForm />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default Home;
