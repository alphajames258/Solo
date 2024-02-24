import React from 'react'
// // import '../App'
function CompanyInput(props) {
return  (
    <div className="allinputs">
    <label>What company are you applying for:</label>
    <input placeholder="Company Name" onChange={props.handleInputChange} />
  </div>

)

}



export default CompanyInput

