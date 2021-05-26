import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import imageAvatar from "../assets/image/user.png";

const useStyles = makeStyles((theme) => ({
  avatar: {
    display: "flex",
    alignItems: "center",
  },
  info: {
    marginLeft: "20px",
  },
  userName: {
    fontSize: "16px",
    fontWeight: "600",
    paddingBottom: "8px"
  },
  date: {
    color: "#777",
    fontSize: "12px"
  }
}));

function AvatarInfo(props) {
  const classes = useStyles();
  return (
    <div className={classes.avatar}>
      <Avatar alt="Remy Sharp" src={imageAvatar} />
      <div className={classes.info}>
        <div className={classes.userName}>Lê Xuân Chiến</div>
        <div className={classes.date}>CreatedMay. 14, 2021 17:50:41 </div>
      </div>
    </div>
  );
}

export default AvatarInfo;
