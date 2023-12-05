import React from "react";

import Card from "../UI/Card";

import classes from "./AddUsers.module.css"

import Button from "../UI/Button";
import { useState } from "react";

import ErrorModal from "../UI/ErrorModal";


import Wrapper from "../Helpers/Wrapper";





const AddUsers=(props)=>{

    const [enteredusername,setUsername]=useState(" ")

    const [entereduserage,setUserAge]=useState(" ")

    const [error,setError]=useState("")

    // Handling error

    const errorHandler=()=>{
        setError(null)
    }


    const AddUserHandler=(event)=>{  
        event.preventDefault()  

        if(enteredusername.trim().length===0 || entereduserage.trim().length===0){
            setError({title: "Invalid Name",Message:"No Name Found" })
            return
        }
        if (+entereduserage<1){
            setError({title: "Invalid Age",Message:"Fill Age" })
            return
        }

        event.preventDefault()

        // Bring onAddUser function with help of props here from App.js
        props.onAddUser(enteredusername,entereduserage)
        setUsername('')
        setUserAge('')

    }
    const userNameChangeHandler=(event)=>{
        event.preventDefault()

        setUsername(event.target.value)
        

    }

    const userAgeChangeHandler=(event)=>{
        event.preventDefault()

        setUserAge(event.target.value)

    }




    return (
        // 

        <Wrapper> 

            {(error) && <ErrorModal title={error.title} Message={error.Message} onConfirm={errorHandler} ></ErrorModal>}
            <Card  CardClassName={classes.input}>

                
                <form onSubmit={AddUserHandler}>
                <label htmlfor="username">USER NAME</label>
                <input id="username" type="text" value={enteredusername} onChange={userNameChangeHandler}></input>

                <label htmlfor="age">AGE</label>
                <input id="age" type="number" value={entereduserage} onChange={userAgeChangeHandler}></input>

                <Button type="submit">SUBMIT USER</Button>
                </form>
            </Card>
        </Wrapper>
        
    )


}

export default  AddUsers