import React from 'react';


function QuestionInput(props) {
  return (
    <div className="allinputs">
      <label>What questions do you want to be answered: </label>
      <input placeholder="Questions" onChange={props.handleInputChange} />
    </div>
  );
}

export default QuestionInput;
 