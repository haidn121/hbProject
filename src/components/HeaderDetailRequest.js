import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  status: {
    padding: "5px 20px",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "40px",
    textAlign: "center",
    marginBottom: "10px"
  },
}));

function HeaderDetailRequest(props) {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <div className={classes.title}>
        <h1>Name Request</h1>
      </div>
      <div className={classes.action}>
        <div className={classes.status}>Open</div>
        <div className={classes.actionType}>
          <Button variant="contained" color="default">Edit</Button>
        </div>
      </div>
    </div>
  );
}

export default HeaderDetailRequest;
