import React from "react"
import Redirect from "../../node_modules/react-router-dom/Redirect";
class Employee extends React.Component {
    constructor() {
        super();
        this.state = {
            achievements: null,
            edit: null
        }
    }
    edit=() =>{
        this.setState({ edit: true })
        console.log(this.state.edit)
    }
    
    render() {
        var note = null;
        var redirect = null;
        if (this.props.emp.age < 25) {
            note = <span className="text-info"> - Fresher</span>
        }
        if (this.state.edit) {  
            redirect = <Redirect to={"/edit/"+this.props.emp.empId} push></Redirect>
         }
        return (
            <div className="card" style={{ "width": 200 }}>
                <img className="card-img-top" src={this.props.emp.image} height="200" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title text-center">{this.props.emp.empName}</h5>
                    <p className="card-text">
                        <span>Id: {this.props.emp.empId}</span><br />
                        <span>Age: {this.props.emp.age}</span> {note}<br />
                        <span>Salary: {this.props.emp.salary}</span><br />
                    </p>
                    <p><i>{this.state.achievements}</i></p>
                    <button type="button" className="btn btn-primary" onClick={this.edit}>Edit</button> <button className="btn btn-success" onClick={() => {
                        this.setState({ achievements: this.props.emp.achievements });
                    }}>View</button>
                    {redirect}
                </div>
            </div>
        )
    }
}
export default Employee;
