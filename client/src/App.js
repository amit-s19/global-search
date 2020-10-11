// Importing Plotly Components.
import Search from './Search';
import Dashboard1 from './components/Dashboard1';
import Dashboard2 from './components/Dashboard2';
import Dashboard3 from './components/Dashboard3';

// Importing Navigation.
import Navigation from './Nav';

import "./App.css";

// Importing React Components.
import React from "react";

// Importing Routing Components.
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

// Driver Function.
function App() {
  return (   
    <Router >
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <Navigation />
            <Search />
            <Switch>
              <Route exact path ="/dash1" >
                <Dashboard1 />
              </Route>
              <Route exact path ="/dash2" >
                <Dashboard2 />
              </Route>
              <Route exact path ="/dash3" >
                <Dashboard3 />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
