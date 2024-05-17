import styles from "./App.module.css";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { fetchRegister } from "./redux/user";

function App() {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      fullName: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = (values) => {
    const data = dispatch(fetchRegister(values));
    console.log(data);
  };

  return (
    <div className={styles.App}>
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

export default App;
