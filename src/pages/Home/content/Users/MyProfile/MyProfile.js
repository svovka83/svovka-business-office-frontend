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

  const [disabled, setDisabled] = React.useState(true);

  const changeAgeHandler = (e) => dispatch(changeAge(e.target.value));
  const changeGenderHandler = (e) =>
    dispatch(changeGender(e.currentTarget.value));
  const changeStatusHandler = (e) => dispatch(changeStatus(e.target.value));
  const changeCountryHandler = (e) => {
    dispatch(changeCountry(e.target.value));
  };
  const changeJobHandler = (e) => dispatch(changeJob(e.target.value));

  const editMe = () => {
    setDisabled(false);
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
      setDisabled(true);
    }
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
                <td>{me.fullName}</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Age:</th>
                <td>{me.age}</td>
                <td>
                  <TextField
                    onChange={changeAgeHandler}
                    value={me.age}
                    disabled={disabled}
                  />
                </td>
              </tr>
              <tr>
                <th>Gender:</th>
                <td>{me.gender}</td>
                <td>
                  <RadioGroup>
                    <FormControlLabel
                      onChange={changeGenderHandler}
                      value="female"
                      control={<Radio />}
                      label="Female"
                      disabled={disabled}
                    />
                    <FormControlLabel
                      onChange={changeGenderHandler}
                      value="male"
                      control={<Radio />}
                      label="Male"
                      disabled={disabled}
                    />
                    <FormControlLabel
                      onChange={changeGenderHandler}
                      value="other"
                      control={<Radio />}
                      label="Other"
                      disabled={disabled}
                    />
                  </RadioGroup>
                </td>
              </tr>
              <tr>
                <th>Status:</th>
                <td>{me.status}</td>
                <td>
                  <TextField
                    onChange={changeStatusHandler}
                    value={me.status}
                    disabled={disabled}
                  />
                </td>
              </tr>
              <tr>
                <th>Country:</th>
                <td>{me.country}</td>
                <td>
                  <Select onChange={changeCountryHandler} value={me.country} disabled={disabled}>
                    <MenuItem value="Ukraine">Ukraine</MenuItem>
                    <MenuItem value="USA">USA</MenuItem>
                    <MenuItem value="France">France</MenuItem>
                    <MenuItem value="Italy">Italy</MenuItem>
                    <MenuItem value="Germany">Germany</MenuItem>
                    <MenuItem value="Brazil">Brazil</MenuItem>
                    <MenuItem value="Spain">Spain</MenuItem>
                    <MenuItem value="Australia">Australia</MenuItem>
                    <MenuItem value="Japan">Japan</MenuItem>
                    <MenuItem value="Argentina">Argentina</MenuItem>
                  </Select>
                </td>
              </tr>
              <tr>
                <th>Job:</th>
                <td>{me.job}</td>
                <td>
                  <TextField
                    onChange={changeJobHandler}
                    value={me.job}
                    disabled={disabled}
                  />
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td>
                  <Button
                    disabled={!disabled}
                    onClick={editMe}
                    variant="contained"
                    color="warning"
                  >
                    Edit
                  </Button>
                </td>
                <td>
                  <Button
                    disabled={disabled}
                    onClick={updateMe}
                    variant="contained"
                    color="success"
                  >
                    Send
                  </Button>
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
