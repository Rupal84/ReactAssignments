import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import { Redirect } from "react-router";

import EditEmployee from "./components/EditEmployee";
import AddEmployee from "./components/AddEmployee";
import Card from "./components/Card";
class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <span className="navbar-brand">HR Portal</span>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/addEmployee">
                Add Employee
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/card">
                View Employees
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/card" />} />
          <Route path="/card" component={Card} />
          <Route path="/addEmployee" component={AddEmployee} />
          <Route path="/edit/:empId" component={EditEmployee} />
        </Switch>
      </div>
    );
  }
}
export default App;
