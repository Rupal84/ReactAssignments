import React from 'react';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';
import ViewAll from './ViewAll';
import {ContactUs} from './ContactUs';
import {AddBook} from './AddBook';

class Navbar extends React.Component {
    render() {
       return (
         <div>
            <Router>
              <React.Fragment>
                <div>
                  <nav>
                    <ul className="nav">
                        <p className="app-name">Learning Portal</p>
                        <Link className="nav-link" to={'/addbook'}> Add a book </Link>
                        <Link className="nav-link" to={'/card'}> View All Books </Link>
                        <Link className="nav-link" to={'/contactus'}> Contact Us </Link>
                    </ul>
                    
                  </nav>
                  <div>
                      <Route exact path="/" render={() => (<Redirect to="/card"/>)} />
                      <Route path="/card" component={ViewAll}/>
                      <Route path="/addbook" component={AddBook}/>
                      <Route path="/contactus" component={ContactUs}/>
                  </div>
        </div>
          </React.Fragment>
        </Router>
         </div>
        )
    }
}

export default Navbar;