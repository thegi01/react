import React from 'react';

import NameForm from'./NameForm';
import EssayForm from'./EssayForm';
import FlavorForm from'./FlavorForm';
import Reservation from'./Reservation';

function Forms(){
    return(
        <div>

            <h3>Controlled Components</h3>
            <NameForm />

            <h3>The textarea Tag</h3>
            <EssayForm />

            <h3>The select Tag</h3>
            <FlavorForm />

            <h3>Handling Multiple Inputs</h3>
            <Reservation />

        </div>
    );
}

export default Forms;