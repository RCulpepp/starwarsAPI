import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import People from '../components/people'

ReactDOM.render(
  <HashRouter>
     <div>
      <nav>
        <ul>
          <li>
            <Link to="/people">People</Link>
          </li>
          <li>
            <Link to="/planets">Planets</Link>
          </li>
        </ul>
      </nav>
    </div>
    <Switch>
      <Route path="/people">
        <People id="1" />
      </Route>
    </Switch>
  </HashRouter>,
  document.body.appendChild(document.createElement('div'))
);
