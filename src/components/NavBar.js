import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class NavBar extends Component {

    render(){
        return(
            <container className='nav-bar'>
                    <img src='../public/favico.ico' alt='logo'></img>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/camps'>Camps</NavLink>
                </container>
        )
    }
}