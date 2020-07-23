import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

export default class Caceria extends Component {
    render(){
        return(
            <Fragment>
                <container class='nav-bar'>
                    <img src='../public/favico.ico' alt='logo'></img>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/camps'>Camps</NavLink>
                </container>
                <container id="img-intro-cont">
                    <div id="img-intro">en Sirius nos importa salud bienestar, en Sirius nos importa salud bienestar, en Sirius nos importa salud bienestar
                    en Sirius nos importa salud bienestaren Sirius nos importa salud bienestaren Sirius nos importa salud bienestaren Sirius nos importa salud bienestar
                    en Sirius nos importa salud bienestaren Sirius nos importa salud bienestaren Sirius nos importa salud bienestaren Sirius nos importa salud bienestar
                    en Sirius nos importa salud bienestaren Sirius nos importa salud bienestaren Sirius nos importa salud bienestaren Sirius nos importa salud bienestar</div>
                    <p id="safaris">Safaris</p>
                </container>
                <container>
                    
                </container>
            </Fragment>
            
        )
      }
}