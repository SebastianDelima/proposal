import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';


export default class NavBar extends Component {

    render(){
        return(
            <Fragment>
                <div id="nav-icon"></div>
            <container className='nav-bar'>

                    <NavLink className="nav-text" to='/'>Directorio</NavLink>
                    <NavLink className="nav-text" to='/about'>Nosotros</NavLink>
                    <NavLink className="nav-text two" to='/camps'>Camps</NavLink>
                    <NavLink className="nav-text two" to='/camps'>More</NavLink>
                </container>
                
                
                </Fragment>
                
        )
    }
}