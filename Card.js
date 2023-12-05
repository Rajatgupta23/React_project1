import React from "react";
import classes from "./Card.module.css" 
 // use `${classes.card}`

function Card(props){
    return <div className={`${props.CardClassName} ${classes.card} `}>{props.children}</div>

}
export default Card