import React from "react";
import axios from "axios";
class EditEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      empName: "",
      age: "",
      salary: "",
      achievements: "",
      formErrors: {
        empNameErr: "",
        empAgeErr: ""
      },
      fieldValidity: {
        empName: false,
        age: false
      },
      formValid: false,
      successMessage: ""
    };
  }
  validateName = e => {
    const name = e.target.value;
    var formErrors = this.state.formErrors;
    var fieldValidity = this.state.fieldValidity;
    this.setState({ empName: e.target.value });
    console.log(name.length);
    if (name.length < 6) {
      formErrors.empNameErr = "Name must be at least 6 chars";
      fieldValidity.empName = false;
    } else {
      formErrors.empNameErr = "";
      fieldValidity.empName = true;
    }
    this.setState({ fieldValidity: fieldValidity });
    this.setState({ formValid: fieldValidity.empName && fieldValidity.age });
  };
  validateAge = e => {
    const age = e.target.value;
    this.setState({ age: age });
    var formErrors = this.state.formErrors;
    var fieldValidity = this.state.fieldValidity;
    if (age < 18 || age > 60) {
      formErrors.empAgeErr = "Age must be between 18 and 60";
      fieldValidity.age = false;
    } else {
      formErrors.empAgeErr = "";
      fieldValidity.age = true;
    }
    this.setState({ formErrors: formErrors });
    this.setState({ formValid: fieldValidity.empName && fieldValidity.age });
  };
  validateSalary = e => {
    let salary = e.target.value;
    this.setState({ salary: salary });
  };
  validateAchievements = e => {
    let achievements = e.target.value;
    this.setState({ achievements: achievements });
  };
  updateEmployee = () => {
    var formJSON = {
      empId: this.props.match.params.empId,
      empName: this.state.empName,
      age: this.state.age,
      salary: this.state.salary,
      achievements: this.state.achievements
    };
    axios
      .put(
        "http://localhost:2000/updateEmployeeDetails/" +
          this.props.match.params.empId,
        formJSON
      )
      .then(response => {
        this.setState({ successMessage: response.data.message, error: "" });
        console.log(response.data);
      })
      .catch(error => {
        if (error.response) {
          this.setState({ error: error.response.data.message, success: "" });
        } else {
          this.setState({ error: error.message, success: "" });
        }
      });
  };
  render() {
    return (
      <div style={{ width: 500, margin: "0px auto" }}>
        <h3 className="text-center">
          The selected ID is {this.props.match.params.empId}
        </h3>
        <form>
          <div className="form-group">
            <label>Employee Id:</label>
            <input
              className="form-control"
              disabled
              value={this.props.match.params.empId}
            />
          </div>
          <div className="form-group">
            <label>Name:</label>
            <input
              className="form-control"
              onChange={this.validateName}
              value={this.state.empName}
            />
          </div>
          <span className="text-danger">
            {this.state.formErrors.empNameErr}
          </span>
          <div className="form-group">
            <label>Age:</label>
            <input
              className="form-control"
              onChange={this.validateAge}
              value={this.state.age}
            />
          </div>
          <span className="text-danger">{this.state.formErrors.empAgeErr}</span>
          <div className="form-group">
            <label>Salary:</label>
            <select
              onChange={this.validateSalary}
              className="form-control"
              value={this.state.salary}
            >
              <option value="20000">20000</option>
              <option value="30000">30000</option>
              <option value="40000">40000</option>
              <option value="50000">50000</option>
            </select>
          </div>
          <div className="form-group">
            <label>Achievements:</label>
            <textarea
              onChange={this.validateAchievements}
              className="form-control"
              value={this.state.achievements}
            />
          </div>
          <button
            type="button"
            onClick={this.updateEmployee}
            className="btn btn-success"
            disabled={!this.state.formValid}
          >
            Update
          </button>
          <br />
          <span className="text-success">{this.state.successMessage}</span>
        </form>
      </div>
    );
  }
}
export default EditEmployee;
