import React from 'react';

function DescriptionInput(props) {
  return (
    <div className="allinputs">
      <label>Give me the job description:</label>
      <input placeholder="Job description" onChange={props.handleInputChange} />
    </div>
  );
}

export default DescriptionInput;
