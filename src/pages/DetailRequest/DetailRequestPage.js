import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import HeaderDetailRequest from "../../components/HeaderDetailRequest";
import { Paper, TextareaAutosize } from "@material-ui/core";
import AvatarInfo from "../../components/AvatarInfo";
import RequestProperty from "../../components/RequestProperty";
import Comment from "../../components/Comment";

const useStyles = makeStyles((theme) => ({
  detailRequest: {
    padding: "20px 50px",
  },
  main: {
    padding: "20px 30px",
  },
  paper: {
    marginTop: "20px",
  },
  contentRequest: {
    width: "50%",
    marginTop: "20px",
    lineHeight: "30px",
    fontSize: "16px",
  },
  requestProperties: {
    display: "flex",
    justifyContent: "space-between",
    margin: "30px 0",
  },
  property: {
    width: "48%",
    borderTop: "1px solid #777",
    borderBottom: "1px solid #777",
  },
  comment: {
    border: "1px solid #777",
    padding: "20px",
    height: "300px",
    overflowX: "scroll"
  },
  item: {
    marginBottom: "30px",
  },
  textarea: {
    width: "100%",
    marginTop: "20px",
  },
}));

function DetailRequestPage(props) {
  const classes = useStyles();
  const nameRequestProperty = ["Category", "Assignee"];
  return (
    <div className={classes.detailRequest}>
      <HeaderDetailRequest />
      <Paper className={classes.paper}>
        <div className={classes.main}>
          <AvatarInfo />

          <div className={classes.contentRequest}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            consequatur amet asperiores eos repellat cumque assumenda, beatae
            excepturi sint necessitatibus!
          </div>

          <div className={classes.requestProperties}>
            {nameRequestProperty.map((property, index) => {
              return (
                <div className={classes.property}>
                  <RequestProperty name={property} key={index} />
                </div>
              );
            })}
          </div>

          <div>
            <h4>Comment (2)</h4>
            <div className={classes.comment}>
              <div className={classes.item}>
                <Comment />
              </div>
              <div className={classes.item}>
                <Comment />
              </div>
              <div className={classes.item}>
                <Comment />
              </div>
              <div className={classes.item}>
                <Comment />
              </div>
            </div>
          </div>

          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="write a comment"
            className={classes.textarea}
          />
        </div>
      </Paper>
    </div>
  );
}

export default DetailRequestPage;
