import { Link } from "react-router-dom";

import { Button } from "@mui/material";

const Friends = () => {
  return (
    <div>
      <h3>Friends</h3>{" "}
      <Link to="/home/users">
        <Button variant="contained" color="inherit">
          back
        </Button>
      </Link>
    </div>
  );
};

export default Friends;
