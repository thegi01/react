import React from 'react';

import Calculator from'./Calculator';
import Calculator2 from'./Calculator2';
import Calculator3 from'./Calculator3';

function LiftingStateUp(){
    return(
        <div>
            <h3>Calculator</h3>
            <Calculator />

            <h3>Adding a Second Input</h3>
            <Calculator2 />

            <h3>Writing Conversion Functions, Lifting State Up</h3>
            <Calculator3 />
        </div>
    );
}

export default LiftingStateUp;