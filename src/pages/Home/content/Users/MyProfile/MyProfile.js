import { Link } from "react-router-dom";

import { Button } from "@mui/material";

const MyProfile = () => {
  return (
    <div>
      <h3>MyProfile</h3>{" "}
      <Link to="/home/users">
        <Button variant="contained" color="inherit">
          back
        </Button>
      </Link>
    </div>
  );
};

export default MyProfile;
