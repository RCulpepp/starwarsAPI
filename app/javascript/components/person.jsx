import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import KeyValuePair from 'components/key_value_pair';  

function Person(props){
  const [isLoaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)
  const [person, setPerson] = useState(false)

  useEffect(fetchPerson, [props.id])

  function relationships(){
    return [
      "films", 
      { name: "homeworld", relationshipType: "belongsTo" }, 
      "species", 
      "starships", 
      "vehicles"
    ]
  }

  function keyValuePairs(){
    let pairs =  Object.entries(person).map((entry, idx) => {
        const [ key, value ] = entry
        return <KeyValuePair name={ key } value={ value } key={ idx } />
      }
    )
    return pairs
  }

  function fetchPerson(){
    fetch("/people/" + props.id)
      .then(res => res.json())
      .then(
        (result) => {
          setLoaded(true)
          setPerson(result)
        },
        (error) => {
          if(error){
            setError(true)
            setLoaded(false)
          }
      })
  }
    
  return (
    <div>
      <h3>{ person.name }</h3>
      <pre>{ isLoaded ? (
        keyValuePairs()
      ) : 
        ("Loading...") 
      }
      </pre>
    </div>)
}

export default Person;