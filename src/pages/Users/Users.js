import React from "react";

import axios from "../../axios";

const Users = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    axios.get("/users").then((res) => {
      setUsers(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.map((users) => (
        <p key={users._id}><b>{users.fullName}</b> "{users.email}"</p>
      ))}
    </div>
  );
};

export default Users;
