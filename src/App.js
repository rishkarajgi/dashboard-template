import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import PrivateRoute from "./components/common/PrivateRoute";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import Page1 from "./pages/Page1/Page1";
import Page2 from "./pages/Page2/Page2";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <Route exact path="/" component={Dashboard}>
                {/* child components to be rendered within dashboard */}
                <Route path="/page1" exact component={Page1} />
                <Route path="/page2" exact component={Page2} />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
