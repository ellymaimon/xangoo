import React from "react";

function Nav(){
  var div = {
    display: "inline"
  }
  var buttons = {
    borderRadius: "0",
    height: "50px",
    paddingLeft: "20px",
    paddingRight: "20px",
    background: "#fff",
    border: "2px solid lightgrey",
    fontSize: "16px"
  }
  return (
    <div style={div}>
      <button style={buttons}>Home</button>
      <button style={buttons}>Notifications</button>
      <button style={buttons}>Messages</button>
    </div>
  );
}

export default Nav;
