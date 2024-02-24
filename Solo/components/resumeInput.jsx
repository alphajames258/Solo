import React from 'react'
// import '../App'
function ResumeInput(props) {
  return (
    <div className="allinputs">
      <label>
        Can you give me your resume or a summary <br></br>about your work experience?
      </label>
      <input placeholder="Experience" onChange={props.handleInputChange} />
    </div>
  );
}

export default ResumeInput;
