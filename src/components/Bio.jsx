import React from 'react';

function Bio(){
  var bio = {
    border: "2px solid lightgrey",
    color: "grey",
    padding: "25px",
    marginTop: "25px",
    fontFamily: "sans-serif",
    lineHeight: "22px"
  }

  return (
    <div style={bio}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus ex sed mi mattis eleifend. Quisque sed lorem sit amet risus egestas interdum. Duis sit amet magna vel tortor lobortis blandit efficitur at augue. Quisque sodales auctor nisl, at malesuada nulla viverra vel. Vestibulum fringilla ac est vitae viverra. Phasellus et tincidunt enim. Integer lorem diam, consequat sed vehicula at, consequat vitae metus. Vivamus ut dolor urna. Praesent at sodales nibh. Praesent et dignissim sapien, at lacinia ligula.
      </p>
    </div>
  );
}

export default Bio;
