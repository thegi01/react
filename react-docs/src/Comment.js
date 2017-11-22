import React from 'react';

function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props){
    return (
        <img className="Avatar" 
            src={props.user.avatarUrl} 
            alt="props.user.name" 
        />
    );
}

function UserInfo(props){
    return(
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

function Comment(props){
    return(
        <div className="comment">
            <UserInfo user={props.author} />
            <div className="comment-text">
                {props.text}
            </div>
            <div className="comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

export default Comment;
