import React from "react";
import Nav from "./Nav";
import Search from "./Search";

function Header(){
  var header = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "2px solid lightgrey",
    padding: "0 10px 15px 10px"
  }
  return (
    <div style={header}>
      <Nav/>
      <Search/>
    </div>

  );
}

export default Header;
