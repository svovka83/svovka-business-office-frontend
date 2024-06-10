import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { Link, Navigate } from "react-router-dom";

import styles from "./Login.module.css";
import { Button, TextField, Paper } from "@mui/material";
import { fetchLogin, selectorFullData } from "../../redux/slices/usersSlice";

const Login = () => {
  const data = useSelector(selectorFullData);
  const isAuth = Boolean(data);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (value) => {
    dispatch(fetchLogin(value));
  };

  if (isAuth) {
    const { token } = data;
    window.localStorage.setItem("token", token);
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.login}>
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
    </div>
  );
};

export default Login;
