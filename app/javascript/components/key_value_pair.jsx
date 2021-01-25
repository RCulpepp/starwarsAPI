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
      values.push(<div key={ idx }><Button url={ newUrl } text={ newUrl }/></div>)
    })
  } else if(typeof(props.value) === "object") {
    if(Object.keys(props.value).includes("url")){
      let newUrl = rewriteUrl(props.value.url)

      values.push(<div key="1"><Button url={ newUrl } text={ newUrl } /></div>)
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