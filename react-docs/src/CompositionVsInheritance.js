import React from 'react';

import WelcomeDailog from'./WelcomeDailog';
import SplitPane from'./SplitPane';
import Contacts from'./Contacts';
import Chat from'./Chat';
import WelcomeDailog2 from'./WelcomeDailog2';
import SignUpDialog from'./SignUpDialog';


function CompositionVsInheritance(){
    return (
        <div>
            <h3>Containment</h3>
            <WelcomeDailog />

            <h4>Multiple Component(hole) -> come up with your own convention </h4>
            <SplitPane 
                left={ <Contacts /> }
                right={ <Chat /> }
            />

            <h3>Specialization</h3>
            <WelcomeDailog2 />

            <SignUpDialog />
        </div>
    );
}

export default CompositionVsInheritance;