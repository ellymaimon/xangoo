import React from "react";

function Post(props){
  let line;
  if (props.comment) {
    line = <hr />
  }
  return (
      <div>
        <img src={props.image} alt=""/>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        {line}
        <p>{props.comment}</p>
      </div>
  );
}

export default Post;
