import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./MyProfile.module.css";
import Paper from "@mui/material/Paper";
import { Button, TextField } from "@mui/material";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import {
  fetchUpdateMe,
  selectorFullData,
  changeAge,
  changeGender,
  changeStatus,
  changeCountry,
  changeJob,
} from "../../../../../redux/slices/usersSlice";

const MyProfile = () => {
  const dispatch = useDispatch();
  const me = useSelector(selectorFullData);

  const [isEdit, setIsEdit] = React.useState(true);

  const changeAgeHandler = (e) => dispatch(changeAge(e.target.value));
  const changeGenderHandler = (e) =>
    dispatch(changeGender(e.currentTarget.value));
  const changeStatusHandler = (e) => dispatch(changeStatus(e.target.value));
  const changeCountryHandler = (e) => {
    dispatch(changeCountry(e.target.value));
  };
  const changeJobHandler = (e) => dispatch(changeJob(e.target.value));

  const editMe = () => {
    setIsEdit(false);
  };

  const updateMe = () => {
    if (window.confirm(`${me.fullName}, you want update profile?`)) {
      const fields = {
        age: me.age,
        gender: me.gender,
        status: me.status,
        country: me.country,
        job: me.job,
      };
      dispatch(fetchUpdateMe(fields));
      setIsEdit(true);
    }
  };

  const back = () => {
    setIsEdit(true);
  };

  return (
    <div>
      <div className={styles.header}>
        <h2>My profile</h2>
        <Link to="/home/users">
          <Button variant="contained" color="inherit">
            Back
          </Button>
        </Link>
      </div>
      <div>
        <Paper className={styles.paper}>
          <table>
            <thead>
              <tr>
                <th>Name:</th>
                <td>{me.fullName}</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Age:</th>
                <td>
                  {isEdit ? (
                    me.age
                  ) : (
                    <TextField onChange={changeAgeHandler} value={me.age} />
                  )}
                </td>
              </tr>
              <tr>
                <th>Gender:</th>
                <td>
                  {isEdit ? (
                    me.gender
                  ) : (
                    <RadioGroup>
                      <FormControlLabel
                        onChange={changeGenderHandler}
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        onChange={changeGenderHandler}
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        onChange={changeGenderHandler}
                        value="other"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>
                  )}
                </td>
              </tr>
              <tr>
                <th>Status:</th>
                <td>
                  {isEdit ? (
                    me.status
                  ) : (
                    <TextField
                      onChange={changeStatusHandler}
                      value={me.status}
                    />
                  )}
                </td>
              </tr>
              <tr>
                <th>Country:</th>
                <td>
                  {isEdit ? (
                    me.country
                  ) : (
                    <Select onChange={changeCountryHandler} value={me.country}>
                      <MenuItem value="Ukraine">Ukraine</MenuItem>
                      <MenuItem value="USA">USA</MenuItem>
                      <MenuItem value="Great Britain">Great Britain</MenuItem>
                      <MenuItem value="France">France</MenuItem>
                      <MenuItem value="Italy">Italy</MenuItem>
                      <MenuItem value="Germany">Germany</MenuItem>
                      <MenuItem value="Brazil">Brazil</MenuItem>
                      <MenuItem value="Spain">Spain</MenuItem>
                      <MenuItem value="Australia">Australia</MenuItem>
                      <MenuItem value="Japan">Japan</MenuItem>
                      <MenuItem value="Argentina">Argentina</MenuItem>
                    </Select>
                  )}
                </td>
              </tr>
              <tr>
                <th>Job:</th>
                <td>
                  {isEdit ? (
                    me.job
                  ) : (
                    <TextField onChange={changeJobHandler} value={me.job} />
                  )}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td>
                  {isEdit ? (
                    <Button
                      onClick={editMe}
                      variant="contained"
                      color="warning"
                    >
                      Edit
                    </Button>
                  ) : (
                    <div>
                      <Button
                        onClick={updateMe}
                        variant="contained"
                        color="success"
                      >
                        Send
                      </Button>{" "}
                      <Button
                        onClick={back}
                        variant="contained"
                        color="inherit"
                      >
                        Back
                      </Button>
                    </div>
                  )}
                </td>
              </tr>
            </tfoot>
          </table>
        </Paper>
      </div>
    </div>
  );
};

export default MyProfile;
