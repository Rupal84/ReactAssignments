import React from 'react';
import './App.css';
import {Route, Redirect, Switch} from 'react-router-dom';
import EditEmployee from './components/EditEmployee';
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={()=>(<Redirect to="/card"/>)} />
        <Route path="/card" component={Card} />
        <Route path="/edit/:empId" component={EditEmployee} />
      </Switch>
    </div>
  );
}

export default App;
