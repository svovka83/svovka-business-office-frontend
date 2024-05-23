import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectorFullData } from "../../redux/slices/users";

import { Button } from "@mui/material";

const Home = () => {
  const data = useSelector(selectorFullData);

  console.log(data)

  return (
    <div>
      <h1>Welcome {data.fullName}</h1>
      <Link to="/users">
        <Button variant="outlined">Get all users</Button>
      </Link>
    </div>
  );
};

export default Home;
