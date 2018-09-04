import React from 'react';

function Profile(){
  var blue = {
    background: "#2d97de",
    height: "125px"
  }
  var profile = {
    border: "2px solid lightgrey",
    height: "80px",
    fontFamily: "sans-serif"
  }
  var image = {
    position: "relative",
    top: "75px",
    left: "20px",
    border: "2px solid white",
    borderRadius: "10px"
  }
  var name = {
    float: "right",
    margin: "2px 30px 0px 0px"
  }
  var anchorDiv = {
    textAlign: "center",
    marginTop: "40px"
  }
  var anchor = {
    margin: "7px",
    textDecoration: "none",
    color: "grey",
    fontSize: "12px"
  }
  return (
    <div>
      <div style={blue}>
        <img style={image} src="https://via.placeholder.com/75x75" alt=""/>
      </div>
      <div style={profile}>
        <h3 style={name}>Kellie A. Corrigan</h3>
        <div style={anchorDiv}>
          <a style={anchor} href="#">TWEETS</a>
          <a style={anchor} href="#">FOLLOWING</a>
          <a style={anchor} href="#">FOLLOWERS</a>
        </div>
      </div>
    </div>

  );
}

export default Profile;
