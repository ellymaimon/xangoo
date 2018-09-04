import React from 'react'
import Profile from './Profile'
import Bio from './Bio'
import Posts from './Posts'
import Recs from './Recs'

function Content(){
  return(
    <div>
      <Profile/>
      <Bio/>
      <Posts/>
      <Recs/>
    </div>
  );
}

export default Content;
