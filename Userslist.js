import React from "react";

import Card from "../UI/Card";
import classes from "./Userslist.module.css"


const Userslist=(props)=>{

    return (
        <Card className={classes.users} >
            <ul>
                {props.users.map((user)=>
                <li key={user.id}> {user.name} ({user.age} year old)</li>
                
                )}


            </ul>

                
            



                

            
            
        </Card>

    )       
        
}
export default Userslist

    



