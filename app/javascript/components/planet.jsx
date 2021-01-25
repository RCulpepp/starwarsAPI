import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import KeyValuePair from 'components/key_value_pair';  

function Planet(props){
  const [isLoaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)
  const [planet, setPlanet] = useState(false)

  useEffect(fetchPlanet, [props.id])

  function relationships(){
    return [
      "films", 
      "residents",
      "species", 
      "starships", 
      "vehicles"
    ]
  }

  function keyValuePairs(){
    let pairs =  Object.entries(planet).map((entry, idx) => {
        const [ key, value ] = entry
        return <KeyValuePair name={ key } value={ value } key={ idx } />
      }
    )
    return pairs
  }

  function fetchPlanet(){
    fetch("/planets/" + props.id)
      .then(res => res.json())
      .then(
        (result) => {
          setLoaded(true)
          setPlanet(result)
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
      <h3>{ planet.name }</h3>
      <pre>{ isLoaded ? (
        keyValuePairs()
      ) : 
        ("Loading...") 
      }
      </pre>
    </div>)
}

export default Planet;