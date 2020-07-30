import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from "./assets/silla.png";

import AddChair from "./components/addChair";
import Chair from "./components/Chair";
import ChairsList from "./components/chairList";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/chairs" className="navbar-brand">
            <img src={logo} width="45" alt="" className="d-inline-block align-middle mr-2">
             </img> 
              Sigipab
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/chairs"} className="nav-link">
                  Sillas
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                  Añadir
                </Link>
              </li>
            </div>
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/chairs"]} component={ChairsList} />
              <Route exact path="/add" component={AddChair} />
              <Route path="/chairs/:id" component={Chair} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;