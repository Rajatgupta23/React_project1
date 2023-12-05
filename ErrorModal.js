import React from "react";

import Card  from "./Card";

import Button from "./Button";

import classes from "./ErrorModal.module.css"

import ReactDom from 'react-dom'

const Backdrop=(props)=>{
    return(
        <div className={classes.backdrop} onClick={props.onConfirm}></div>
    )
}

const ModalOverlay=(props)=>{
    return(
        <Card className={classes.modal}>
            <header className={classes.header}>
                {props.title}

            </header>
            <div className={classes.content}>
                <p>{props.Message}</p>

            </div>

            <footer className={classes.actions}>
                <Button onClick={props.onConfirm} >OK</Button>

            </footer>

        </Card>
    )
}


const ErrorModal =(props)=>{
    return (
        <React.Fragment>

            {ReactDom.createPortal(<Backdrop onConfirm={props.onConfirm}/>,  document.getElementById("backdrop-root"))}

            {ReactDom.createPortal(

                <ModalOverlay
                    title={props.title}
                    Message={props.Message}
                    onConfirm={props.onConfirm}
                />, document.getElementById("Moduleoverlay-root")

            )}

        </React.Fragment>
            
        
    )

}

export default ErrorModal