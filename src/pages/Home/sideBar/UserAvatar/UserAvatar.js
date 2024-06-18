import React from "react";

import styles from "./UserAvatar.module.css";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUpdateAvatar,
  selectorFullData,
} from "../../../../redux/slices/usersSlice";
import { serverURL } from "../../../../axios";

const UserAvatar = () => {
  const imageFileRef = React.useRef();
  const dispatch = useDispatch();
  const me = useSelector(selectorFullData);

  const handleChangeFile = (event) => {
    try {
      const formData = new FormData();
      formData.append("avatar", event.target.files[0]);
      dispatch(fetchUpdateAvatar(formData));
    } catch (err) {
      alert("file upload error");
    }
  };

  return (
    <div>
      <div>
        {me.urlAvatar ? (
          <img
            className={styles.avatar}
            src={`${serverURL}/${me.urlAvatar}`}
            alt="avatar"
          />
        ) : (
          <img className={styles.avatar} src="logo192.png" alt="avatar" />
        )}
      </div>
      <br />
      <Button
        onClick={() => imageFileRef.current.click()}
        variant="contained"
        color="secondary"
        className={styles.button_size}
      >
        avatar
      </Button>
      <br />
      <br />
      <input
        ref={imageFileRef}
        onChange={handleChangeFile}
        type="file"
        hidden
      />
    </div>
  );
};

export default UserAvatar;
