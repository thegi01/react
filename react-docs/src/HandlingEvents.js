import React from 'react';

import Toggle from'./Toggle';
import LoginButton from'./LoginButton';

function HandlingEvents(){
    return(
        <div>
            <h3>A. Toggle</h3>
            <Toggle />
            <h3>B. LoginButton</h3>
            <LoginButton />
        </div>
    );
}

export default HandlingEvents;