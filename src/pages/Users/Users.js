import React from "react";

import axios from "../../axios";

const Users = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios.get("/users").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {data.map((user) => (
        <p>{user.fullName}</p>
      ))}
    </div>
  );
};

export default Users;
