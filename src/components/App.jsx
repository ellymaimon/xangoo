import React from 'react';
import Header from "./Header";
import Content from './Content'

function App(){
  var appStyle = {
    margin: '20px 50px',
  }
  return(
    <div style={appStyle}>
      <Header />
      <Content />
    </div>
  );
}

export default App;
