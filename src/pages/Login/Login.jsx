import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import styles from "./Login.module.css";
import { Button, TextField, Paper } from "@mui/material";

import {
  fetchLogin,
  selectorIsAuth,
  selectorFullData,
  selectorStatus,
} from "../../redux/slices/usersSlice";
import Circular from "../../utils/CircularProgress";

const Login = () => {
  const isAuth = useSelector(selectorIsAuth);
  const me = useSelector(selectorFullData);
  const dispatch = useDispatch();
  const status = useSelector(selectorStatus);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "guest@gmail.com",
      password: "1234",
    },
    mode: "onBlur",
  });

  const onSubmit = (value) => {
    dispatch(fetchLogin(value));
  };

  if (isAuth) {
    const { token } = me;
    window.localStorage.setItem("token", token);
    return <Navigate to="/home" />;
  }

  return (
    <div className={styles.login}>
      {status === "loading" ? (
        <Circular />
      ) : (
        <div>
          <Paper className={styles.paper}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2>Login</h2>
              <h3>Email</h3>
              <TextField
                label="email"
                {...register("email", { required: "input email" })}
                helperText={errors.email?.message}
                error={errors.email?.message}
              />
              <h3>Password</h3>
              <TextField
                label="password"
                type="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "input password",
                  },
                  minLength: {
                    value: 4,
                    message: "input min 4 symbol",
                  },
                  maxLength: {
                    value: 15,
                    message: "max 15 symbol",
                  },
                })}
                helperText={errors.password?.message}
                error={errors.password?.message}
              />
              <br />
              <br />
              <Button type="submit" disabled={!isValid} variant="contained">
                Login
              </Button>
            </form>
          </Paper>
          <h3>Haven`t login? Go to registration?</h3>
          <Link to="/register">
            <Button variant="contained">Registration</Button>
          </Link>
          <br />
          <br />
        </div>
      )}
    </div>
  );
};

export default Login;
