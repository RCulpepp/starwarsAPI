import React from "react";
import Button from 'components/button';  


function KeyValuePair(props){
  const values = []

  function rewriteUrl(url){
    let parser = new URL(url)
    return parser.pathname.replace("api", "#")
  }

  if(Array.isArray(props.value)){
    props.value.map((related, idx) => {
      let newUrl = rewriteUrl(related.url)
      values.push(<Button url={ newUrl } text={ newUrl } key={ idx }/>)
    })
  } else if(typeof(props.value) === "object") {
    if(Object.keys(props.value).includes("url")){
      let newUrl = rewriteUrl(props.value.url)

      values.push(<Button key={ "1" } url={ newUrl } text={ newUrl } />)
    }
  } else if(typeof(props.value === "string")){
     values.push(<span key="1">{ props.value }</span>)
  }

  return (
    <div>
      <span>{ props.name }: </span>
      { values }
    </div>
  )
}

export default KeyValuePair;