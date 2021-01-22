import React from "react";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import Person from 'components/person';

class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      person: null,
      error: false,
      id: this.props.id,
    };
  }

  notLoadedText(){
    console.log(this.state.error)
    return this.state.error ? "This is not the person you were looking for...you will click refresh and try again." : "Loading..."
  }

  handleNextClick(){
    this.setState({ isLoaded: false, person: null, id: String(parseInt(this.state.id) + 1)})
  }

  render(){
    return(
      <div>
        <HashRouter>
          <button>
            <Link to={"people/" + this.state.id}>Next</Link>
          </button>
        </HashRouter>
        <Switch>
          <Route path="people/:id" children={<Person id={ this.state.id }/>} />
        </Switch>
      </div> 
    )
  }
}

export default People;
