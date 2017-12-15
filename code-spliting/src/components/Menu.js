import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    const activeStyle = {
        fontSize : '2rem',
        color: 'green'
    };
    return(
        <div className="menu">
            <ul>
                <li><NavLink exact to='/' activeStyle={activeStyle}>Home</NavLink></li>
                <li><NavLink exact to='/about' activeStyle={activeStyle}>About</NavLink></li>
                <li><NavLink to='/about/stranger' activeStyle={activeStyle}>About stranger</NavLink></li>
               {/* <li><NavLink to='/about/stranger?detail=true' activeStyle={activeStyle}>About stranger?detail=true</NavLink></li>*/}
                <li><NavLink to='/posts' activeStyle={activeStyle}>Posts</NavLink></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;

/*import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return(
        <div className="menu">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/about/stanger'>About stanger</Link></li>
                <li><Link to='/about/stanger?detail=true'>About stanger?detail=true</Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;*/