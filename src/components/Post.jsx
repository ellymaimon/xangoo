import React from "react";
import PropTypes from "prop-types";

function Post(props){
  const { image, title, content, comment } = props;
  return (
      <div>
        <img src={image} alt=""/>
        <h2>{title}</h2>
        <p>{content}</p>
        { (comment) ? <hr/> : "" }
        <p>{comment}</p>
      </div>
  );
}

Post.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  comment: PropTypes.string
};

export default Post;
