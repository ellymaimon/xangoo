import React from "react";

function PostHeader(){
  var header = {
    display: "flex",
    background: "#a6d8f2",
    height: "60px"
  }
  return (
    <div style={header}>
      <img src="https://via.placeholder.com/50x50" alt=""/>
      <input type="text" placeholder="What's happening?"/>
    </div>
  );
}

export default PostHeader;
