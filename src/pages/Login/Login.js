import { Link } from "react-router-dom";

import styles from "./Login.module.css";
import { Button, TextField, Paper } from "@mui/material";

const Login = () => {
  return (
    <>
      <Paper className={styles.paper}>
        <h2>Login</h2>
        <h3>Email</h3>
        <TextField label="email" variant="outlined" width="20px" />
        <h3>Password</h3>
        <TextField label="password" variant="outlined" />
        <br />
        <br />
        <Button variant="contained">Login</Button>
      </Paper>
      <h3>Haven`t login? Go to registration?</h3>
      <Link to="/register">
        <Button variant="contained">Registration</Button>
      </Link>
    </>
  );
};

export default Login;
