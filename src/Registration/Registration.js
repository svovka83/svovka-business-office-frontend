import styles from "./Registration.module.css"

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { fetchRegister } from "../redux/slices/user";

const Registration = () => {
    const dispatch = useDispatch();
  
    const { register, handleSubmit } = useForm({
      defaultValues: {
        fullName: "",
        password: "",
      },
    });
  
    const onSubmit = (values) => {
      const data = dispatch(fetchRegister(values));
      console.log(data);
      alert("Welcome!")
    };
  
    return (
      <div className={styles.Registration}>
        <h1>Registration</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("fullName")} />
          <br />
          <input {...register("password")} />
          <br />
          <button type="submit">to register</button>
        </form>
      </div>
    );
  }
  
  export default Registration;