import React from "react";

function Search(){
  var input = {
    height: "30px",
    border: "2px solid #3c9dde",
    borderRadius: "15px",
    color: "grey",
    paddingLeft: "10px",
    fontSize: "16px"
  }
  var tweetButton = {
    height: "36px",
    border: "2px solid #3c9dde",
    borderRadius: "15px",
    color: "grey",
    width: "90px",
    textAlign: "center",
    marginLeft: "30px",
    fontSize: "16px"
  }
  return (
    <div>
      <input style={input} type="text" placeholder="Search"/>
      <button style={tweetButton}>Tweet</button>
    </div>
  );
}

export default Search;
