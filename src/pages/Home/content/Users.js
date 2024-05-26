import React from "react";

import axios from "../../../axios";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    axios.get("/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div>
      <h2>Users</h2>
      {users.map((users) => (
        <p key={users._id}><b>{users.fullName}</b> "{users.email}"</p>
      ))}
      <Link to="/home">
      <Button variant="contained" color="inherit">Back</Button>
      </Link>
    </div>
  );
};

export default Users;
