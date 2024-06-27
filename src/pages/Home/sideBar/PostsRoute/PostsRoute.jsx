import { Link } from "react-router-dom";

import styles from "./PostsRoute.module.css";
import { Button } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

const PostsRoute = () => {
  return (
    <div className={styles.side_bar}>
      <ScrollAnimation animateIn="animate__zoomIn" offset={0} delay={300}>
        <Link to="/home/posts">
          <Button
            variant="contained"
            color="info"
            className={styles.button_size}
          >
            Posts
          </Button>
        </Link>
        <br />
        <br />
        <Link to="/home/posts/create_post">
          <Button
            variant="contained"
            color="info"
            className={styles.button_size}
          >
            Create
          </Button>
        </Link>
        <br />
        <br />
        <Link to="/home">
          <Button
            variant="contained"
            color="inherit"
            className={styles.button_size}
          >
            back
          </Button>
        </Link>
      </ScrollAnimation>
    </div>
  );
};

export default PostsRoute;
