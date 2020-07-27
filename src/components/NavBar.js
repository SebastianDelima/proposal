import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class NavBar extends Component {

    render(){
        return(
            <container className='nav-bar'>
                    <img id="nav-icon" src="https://cdn2.vectorstock.com/i/1000x1000/76/06/deer-icon-isolated-on-white-background-design-vector-20237606.jpg" alt="Girl in a jacket"/>
                    <NavLink className="nav-text" to='/'>Home</NavLink>
                    <NavLink className="nav-text" to='/about'>About</NavLink>
                    <NavLink className="nav-text" to='/camps'>Camps</NavLink>
                </container>
        )
    }
}