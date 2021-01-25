import React, { useState } from "react";
import { Route, Switch, Link, useRouteMatch, useParams } from "react-router-dom";
import Person from 'components/person';  


function People(props) {
  let { id } = useParams()
  let { path, url } = useRouteMatch()

  function nextID(lastId){
    return String(parseInt(lastId) + 1)
  }

  function previousID(lastId){
    return String(parseInt(lastId) -1)
  }

  return(
    <div style={{ marginLeft: "20px"}}>
      { 
        id > 1
        ? (
        <button style={{ borderWidth: "0", backgroundColor: "white" }} >
          <Link className="btn btn-primary" to={`${previousID(id)}`}>Back</Link>
        </button>
        ) : null 
      }
      <button style={{ borderWidth: "0", backgroundColor: "white" }} >
        <Link className="btn btn-primary" to={`${nextID(id)}`}>Next</Link>
      </button>
      <Person id={id} />
    </div> 
  )
}

export default People;