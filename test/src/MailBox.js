import React from 'react';

function MailBox(props){
    const unreadMessage = props.unreadMessage;
    return (
        <div>
            {unreadMessage.length >0 &&
                <p>
                    You have {unreadMessage.length} unread messages.
                </p>
            }
        </div>
    );
}

export default MailBox;
