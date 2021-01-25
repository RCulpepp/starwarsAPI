import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import People from '../components/people'
import Planets from '../components/planets'

ReactDOM.render(
  <HashRouter>
     <div>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link className="nav-link" to="/people/1">People</Link>
        </li>
        <li>
          <Link className="nav-link" to="/planets/1">Planets</Link>
        </li>
      </ul>
    </div>
    <Switch >
      <Route path="/people/:id" >
        <People styles={{ marginLeft: "20px"}}/>
      </Route>
      <Route path="/planets/:id" >
        <Planets styles={{ marginLeft: "20px"}} />
      </Route>
    </Switch>
  </HashRouter>,
  document.body.appendChild(document.createElement('div'))
);
