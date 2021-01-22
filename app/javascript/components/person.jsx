import React from "react";

class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      person: null,
      error: false,
      id: this.props.id,
    };
  }

  renderPersonJson(){
    return JSON.stringify(this.state.person, null, 2)
  }

  componentDidMount(){
    fetch("http:/\/localhost:3000/people/" + this.state.id)
      .then(res => res.json())
      .then(
        (result) => {
        this.setState({
          isLoaded: true,
          person: result
        },
        (error) => {
          if(error){
            this.setState({error: true, isLoaded: false})
          }
        })
      })
  }
  
  render(){
    <div><pre>{ this.isLoaded() ? (this.renderPersonJson()) : "Loading..." }</pre></div>
  }
}

export default Person;