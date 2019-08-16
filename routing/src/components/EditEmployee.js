import React from "react"
class EditEmployee extends React.Component{
    render(){
        return(
            <h3>The selected ID is {this.props.match.params.empId}</h3>
        )
    }
}
export default EditEmployee
