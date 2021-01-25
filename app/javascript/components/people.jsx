import React, { useState } from "react";
import { Route, Switch, Link, useRouteMatch, useParams } from "react-router-dom";
import Person from 'components/person';  


function People(props) {
  let { id } = useParams()
  let { path, url } = useRouteMatch()

  function nextID(lastId){
    return String(parseInt(lastId) + 1)
  }

  return(
    <div>
      <button>
        <Link to={`${nextID(id)}`}>Next</Link>
      </button>
      <Person id={id} />
    </div> 
  )
}

export default People;