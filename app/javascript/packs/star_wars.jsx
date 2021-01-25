import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import People from '../components/people'
import Planets from '../components/planets'

ReactDOM.render(
  <HashRouter>
     <div>
      <nav className="navbar">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/people/1">People</Link>
          </li>
          <li>
            <Link className="nav-link" to="/planets/1">Planets</Link>
          </li>
        </ul>
      </nav>
    </div>
    <Switch>
      <Route path="/people/:id" >
        <People />
      </Route>
      <Route path="/planets/:id" >
        <Planets />
      </Route>
    </Switch>
  </HashRouter>,
  document.body.appendChild(document.createElement('div'))
);
