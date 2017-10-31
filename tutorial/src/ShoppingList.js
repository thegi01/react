import React, { Component } from 'react';

class ShoppingList extends React.Component {
    render(){
        return(
            <div className="Shopping-list">
                <h2>Booking List for {this.props.name}</h2>
                <ul>
                    <li>Instgram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}

export default ShoppingList;


