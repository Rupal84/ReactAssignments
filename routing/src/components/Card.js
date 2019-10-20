import React from "react";
import axios from "axios";
import Employee from "./Employee";
export default class Card extends React.Component {
    constructor() {
        super();
        this.state = {
            result: "",
            error: ""
      };
      
    }
    fetchEmployees() {
        axios
          .get("http://localhost:2000/retreiveEmployeelist")
          .then(response => {
            this.setState({
              result: response.data,
              error: ""
            });
          })
          .catch(error => {
            if (error.response) {
              this.setState({ error: error.response.data.message, result: "" });
            } else {
              this.setState({ error: error.message, result: "" });
            }
          });
    }

    componentDidMount() {
        this.fetchEmployees(); 
    }
    
    render() {
        return (
          <div>
            <h3 className="text-center text-primary">Employee Details</h3>
            {this.state.result
              ? this.state.result.map(emp => <Employee key={emp.empId} emp={emp} />)
              : null}
            {this.state.errorMessage ? (
              <h4 className="text-danger">{this.state.errorMessage}</h4>
            ) : null}
          </div>
        );
      }
}
