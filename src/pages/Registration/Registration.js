import styles from "./Registration.module.css";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import {
  fetchRegister,
  selectorIsAuth,
  selectorFullData,
  selectorStatus,
} from "../../redux/slices/usersSlice";

import { Button, Paper, TextField } from "@mui/material";

const Registration = () => {
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
      fullName: "",
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (values) => {
    dispatch(fetchRegister(values));
  };

  if (isAuth) {
    const { token } = me;
    window.localStorage.setItem("token", token);
    return <Navigate to="/home" />;
  }

  return (
    <div className={styles.register}>
      {status === "loading" ? (
        <h1>... Loading</h1>
      ) : (
        <div>
          <Paper className={styles.paper}>
            <h2>Registration</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3>FullName</h3>
              <TextField
                label="fullName"
                {...register("fullName", {
                  required: {
                    value: true,
                    message: "input fullName",
                  },
                  minLength: {
                    value: 4,
                    message: "fullName min 4 symbol",
                  },
                  maxLength: {
                    value: 10,
                    message: "max 10 symbol",
                  },
                })}
                helperText={errors.fullName?.message}
                error={errors.fullName?.message}
              />
              <h3>Email</h3>
              <TextField
                label="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "input email",
                  },
                })}
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
                register
              </Button>
            </form>
          </Paper>
        </div>
      )}
    </div>
  );
};

export default Registration;
