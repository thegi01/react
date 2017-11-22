import React, { Component } from 'react';
import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';
import Comment from './Comment';

class ComponentsAndProps extends Component{

    render(){
        const comment = {
            date: new Date(),
            text: 'I hope you enjoy learning React!',
            author: {
                name: 'Hello Kitty',
                avatarUrl: 'http://placekitten.com/g/64/64'
            }
        };

        return (
            <div>
                <h3>Function Component and Class Component</h3>
                <h4>Function Component</h4>
                <FunctionComponent name="Functional" />
                <h4>Class Component</h4>
                <ClassComponent name="Class" />

                <h3>Extracting Components</h3>
                <Comment date={comment.date} text={comment.text} author={comment.author} />

                <h3>Props are Read-Only</h3>
                <strong>All React components must act like pure functions with respect to their props.</strong>
            </div>
        );
    }

}

export default ComponentsAndProps;