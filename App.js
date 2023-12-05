import React, { useSyncExternalStore } from 'react';

import AddUsers from './components/Users/AddUsers';

import Userslist from './components/Users/Userslist';

import { useState } from 'react';
import { Fragment } from 'react';


function App() {
  const [usersList,SetUserList]=useState([])

  const AddUserHandler=(username,userage)=>{
    SetUserList((Previouslist)=>{
      return [...Previouslist,{name:username,age:userage,id: Math.random.toString()}]
    })



    // (Previouslist)=>{
    //   return [...Previouslist,{name:username,age:userage,id: Math.random.toString()}]
    // })// This is how you create a new list using previous



  }
  return (
    <Fragment>
      <AddUsers onAddUser={AddUserHandler}></AddUsers>

      <Userslist users={usersList}></Userslist>



    </Fragment>
  );
}

export default App;
