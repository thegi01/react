import React from 'react';
import FancyBorder from './FancyBorder';

function Dialog(props){
    return(
        <FancyBorder color="blue">
            <h5 className="Dialog-title"  style={{marginTop:'20px'}}>
                {props.title}
            </h5>
            <p className="Dialog-message">
                {props.message}
            </p>
        </FancyBorder>
    );
}


function WelcomeDailog2(props){
    return(
        <Dialog 
            title="Welcome"
            message="Thank you for visiting our spacecraft!" />
    );
}
export default WelcomeDailog2;