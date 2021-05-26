import React from "react";
import AvatarInfo from "./AvatarInfo";

function Comment(props) {
  const { name, value } = props;

  return (
    <>
      <AvatarInfo />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
        distinctio!
      </p>
    </>
  );
}

export default Comment;
