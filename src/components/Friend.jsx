import React from 'react';
import PropTypes from "prop-types";

function Friend(props) {
  const { image, name } = props;
  return (
    <div>
      <img src={image} alt=""/>
      <h2>{name}</h2>
      <button>Button</button>
    </div>
  );
}

Friend.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};

export default Friend;
