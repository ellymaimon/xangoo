import React from 'react';
import Friend from './Friend';

var masterFriendList = [
  {
    image: 'https://via.placeholder.com/50x50',
    name: "Donec eu orci et"
  },
  {
    image: 'https://via.placeholder.com/50x50',
    name: "Donec eu orci et"
  },
  {
    image: 'https://via.placeholder.com/50x50',
    name: "Donec eu orci et"
  }
]

function Recs() {
  return (
    <div>
    { masterFriendList.map((friend, index) =>
      <Friend {...friend} key={index} />
    )}
    </div>
  );
}

export default Recs;
