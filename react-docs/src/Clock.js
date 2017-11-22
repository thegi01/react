import React from 'react';

function Clock(props){
    return(
        <div>
            <h1>Hello, LifeCycle</h1>
            <h2>IT is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}


function tick(){
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);

export default tick;