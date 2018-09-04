import React from 'react'
import Profile from './Profile'
import Bio from './Bio'
import Posts from './Posts'
import Recs from './Recs'

function Content(){
  var body = {
    display: "grid",
    gridTemplateColumns: "30% 40% 30%",
    gridGap: "15px",
    marginTop: "15px"
  }
  return(
    <div style={body}>
      <div>
        <Profile/>
        <Bio/>
      </div>
      <Posts/>
      <Recs/>
    </div>
  );
}

export default Content;
