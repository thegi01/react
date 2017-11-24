import React from 'react';


function UserGreeting(props) {
    return <p>Welcome back!</p>;
}

function GuestGreeting(props) {
    return <p>Please sign up.</p>;
}


function Greeting(props) {

    const isLoggedIn = props.isLoggedIn;

    if(isLoggedIn){
         return <UserGreeting />
    } 
    return <GuestGreeting />
  
}

export default Greeting;
