import React from "react";
import '../style/Button.css';

const Button = ({onClick, btnText}) => {
    return(
  
<button className="ModalBtn" onClick={onClick}> {btnText} </button>
      
    )
}

export default Button