import React, { Component } from 'react';

class IntroducingJsx extends Component {

    render(){

        const element1 = <h1>React Docs</h1>
    /*
        const element2 = (
            <h1 className="greeting">
                React Docs
            </h1>
        );

        const element3 = React.createElement(
            'h1',
            {className: 'greeting'},
            'hello, world!'
        );

        // React.createElement() performs a few checks to help you write bug-free code but essentially it creates an object like this:
        const element4 = {
            type: 'h1',
            props: {
                className : 'greeting',
                children: 'React Docs'
            }
        }
        */
        return (
           <div>
               {element1}
           </div>
        );
    }
}

export default IntroducingJsx;
