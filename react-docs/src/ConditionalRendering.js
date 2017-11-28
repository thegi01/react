import React from 'react';

import Greeting from'./Greeting';
import LoginControl from'./LoginControl';
import MailBox from'./MailBox';

function ConditionalRendering(){
    const messages = ['React', 'Re: React', 'Re:Re: React'];
    
    return (
        <div>
            <h3>A. Greeting </h3>
            <Greeting isLoggedIn={false} />

            <h3>B. Element Variables : LoginControl </h3>
            <LoginControl />

            <h3>C. Inline If with Logical && Operator : MailBox</h3>
            <MailBox unreadMessage={messages} />

            <h3>D. Inline If-Else with Conditional Operator</h3>
        </div>
    );
}

export default ConditionalRendering;