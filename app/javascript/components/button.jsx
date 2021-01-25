import React, { useEffect, useState } from "react";

function Button(props){
  return <a className="btn btn-secondary" href={ props.url }>{ props.text }</a>
}

export default Button;