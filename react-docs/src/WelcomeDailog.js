import React from 'react';
import FancyBorder from './FancyBorder';

class WelcomeDailog extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <FancyBorder color="blue">
                <h5 className="Dialog-title">
                    Welcome
                </h5>
                <p className="Dialog-message">
                    Thank uou for visiting our spacecraft!
                </p>
            </FancyBorder>
        );
    }
}

export default WelcomeDailog;