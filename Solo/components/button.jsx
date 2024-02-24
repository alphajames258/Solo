import React from 'react'
// import '../App'
function Button(props) {
  return (
    <div className="button">
    <button onClick = {props.onClick}>Send</button>
  </div>
  );
}

export default Button;
