import styles from "./Registration.module.css";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { fetchRegister } from "../../redux/slices/user";
import { Button, Paper, TextField } from "@mui/material";

const Registration = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values) => {
    dispatch(fetchRegister(values));
  };

  return (
    <div className={styles.Registration}>
      <Paper className={styles.paper}>
        <h2>Registration</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>FullName</h3>
          <TextField {...register("fullName")} label="fullName"/>
          <h3>Email</h3>
          <TextField {...register("email")} label="email"/>
          <h3>Password</h3>
          <TextField {...register("password")} label="password"/>
          <br />
          <br />
          <Button type="submit" variant="contained">
            register
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Registration;
