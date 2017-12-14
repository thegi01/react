import React from 'react';

class Page extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="app">
                <div className="appBar">App Bar</div>
                <div className="contentContainer">this.props.children</div>
            </div>
        );
    }
}

export default Page;