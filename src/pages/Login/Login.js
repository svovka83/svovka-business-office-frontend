import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { Link, Navigate } from "react-router-dom";

import styles from "./Login.module.css";
import { Button, TextField, Paper } from "@mui/material";
import { fetchLogin, selectorFullData } from "../../redux/slices/users";

const Login = () => {
  const data = useSelector(selectorFullData);
  const isAuth = Boolean(data);
  const dispatch = useDispatch();

  console.log("isAuth", isAuth);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (value) => {
    dispatch(fetchLogin(value));
  };

  if (isAuth) {
    const { token } = data;
    window.localStorage.setItem("token", token);
    console.log(token);
    if (token) {
      return <Navigate to="/home" />;
    }
  }

  return (
    <>
      <Paper className={styles.paper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Login</h2>
          <h3>Email</h3>
          <TextField label="email" {...register("email")} />
          <h3>Password</h3>
          <TextField label="password" {...register("password")} />
          <br />
          <br />
          <Button type="submit" variant="contained">
            Login
          </Button>
        </form>
      </Paper>
      <h3>Haven`t login? Go to registration?</h3>
      <Link to="/register">
        <Button variant="contained">Registration</Button>
      </Link>
    </>
  );
};

export default Login;