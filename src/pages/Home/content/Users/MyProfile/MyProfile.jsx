import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./MyProfile.module.css";
import Paper from "@mui/material/Paper";
import { Button, Checkbox, TextField } from "@mui/material";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import {
  fetchUpdateMe,
  selectorFullData,
} from "../../../../../redux/slices/usersSlice";

const FIELDS = {
  AGE: "age",
  GENDER: "gender",
  STATUS: "status",
  COUNTRY: "country",
  EDUCATION: "education",
  JOB: "job",
  HOBBY: "hobby",
};

const MyProfile = () => {
  const dispatch = useDispatch();
  const me = useSelector(selectorFullData);

  const [isEdit, setIsEdit] = React.useState(true);
  const [fields, setFields] = React.useState();

  const changeProfile = ({ target: { name, value } }) =>
    setFields({ ...fields, [name]: value });

  const changeHobbyHandler = (e) => {
    if (fields.hobby.includes(e.currentTarget.value)) {
      let hobby = fields.hobby.filter((h) => h !== e.currentTarget.value);
      setFields({ ...fields, hobby });
    } else {
      let hobby = [...fields.hobby, e.currentTarget.value];
      setFields({ ...fields, hobby });
    }
  };

  const editMe = () => {
    setFields({
      [FIELDS.AGE]: me.age,
      [FIELDS.GENDER]: me.gender,
      [FIELDS.STATUS]: me.status,
      [FIELDS.COUNTRY]: me.country,
      [FIELDS.EDUCATION]: me.education,
      [FIELDS.JOB]: me.job,
      [FIELDS.HOBBY]: me.hobby,
    });
    setIsEdit(false);
  };

  const updateMe = () => {
    if (window.confirm(`${me.fullName}, you want update profile?`)) {
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
                    <TextField
                      onChange={changeProfile}
                      name="age"
                      value={fields[FIELDS.AGE]}
                    />
                  )}
                </td>
              </tr>
              <tr>
                <th>Gender:</th>
                <td>
                  {isEdit ? (
                    me.gender
                  ) : (
                    <RadioGroup name="gender" value={fields[FIELDS.GENDER]} row>
                      <FormControlLabel
                        onChange={changeProfile}
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        onChange={changeProfile}
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        onChange={changeProfile}
                        value="gender"
                        control={<Radio />}
                        label="Gender"
                      />
                      <FormControlLabel
                        onChange={changeProfile}
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
                      onChange={changeProfile}
                      name="status"
                      value={fields[FIELDS.STATUS]}
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
                    <Select
                      onChange={changeProfile}
                      name="country"
                      value={fields[FIELDS.COUNTRY]}
                    >
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
                <th>Education:</th>
                <td>
                  {isEdit ? (
                    me.education
                  ) : (
                    <RadioGroup
                      name="education"
                      value={fields[FIELDS.EDUCATION]}
                      row
                    >
                      <FormControlLabel
                        onChange={changeProfile}
                        value="technical"
                        control={<Radio />}
                        label="Technical"
                      />
                      <FormControlLabel
                        onChange={changeProfile}
                        value="economic"
                        control={<Radio />}
                        label="Economic"
                      />
                      <FormControlLabel
                        onChange={changeProfile}
                        value="humanitarian"
                        control={<Radio />}
                        label="Humanitarian "
                      />
                      <FormControlLabel
                        onChange={changeProfile}
                        value="other"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>
                  )}
                </td>
              </tr>
              <tr>
                <th>Job:</th>
                <td>
                  {isEdit ? (
                    me.job
                  ) : (
                    <TextField
                      onChange={changeProfile}
                      name="job"
                      value={fields[FIELDS.JOB]}
                    />
                  )}
                </td>
              </tr>
              <tr>
                <th>Hobby:</th>
                <td>
                  {isEdit ? (
                    me.hobby.join(", ")
                  ) : (
                    <>
                      <RadioGroup row>
                        <FormControlLabel
                          onChange={changeHobbyHandler}
                          value="reading"
                          control={
                            <Checkbox
                              checked={fields.hobby.includes("reading")}
                            />
                          }
                          label="Reading"
                        />
                        <FormControlLabel
                          onChange={changeHobbyHandler}
                          value="music"
                          control={
                            <Checkbox
                              checked={fields.hobby.includes("music")}
                            />
                          }
                          label="Music"
                        />
                        <FormControlLabel
                          onChange={changeHobbyHandler}
                          value="drawing"
                          control={
                            <Checkbox
                              checked={fields.hobby.includes("drawing")}
                            />
                          }
                          label="Drawing"
                        />
                        <FormControlLabel
                          onChange={changeHobbyHandler}
                          value="sport"
                          control={
                            <Checkbox
                              checked={fields.hobby.includes("sport")}
                            />
                          }
                          label="Sport"
                        />
                        <FormControlLabel
                          onChange={changeHobbyHandler}
                          value="traveling"
                          control={
                            <Checkbox
                              checked={fields.hobby.includes("traveling")}
                            />
                          }
                          label="Traveling"
                        />
                        <FormControlLabel
                          onChange={changeHobbyHandler}
                          value="cooking"
                          control={
                            <Checkbox
                              checked={fields.hobby.includes("cooking")}
                            />
                          }
                          label="Cooking"
                        />
                      </RadioGroup>
                    </>
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
