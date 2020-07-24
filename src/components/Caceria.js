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
                    <p id="safari-text">Safaris</p>
                </container>
                <container id='safaries'>
                    <NavLink to='/' class='all-safaries' id='one'> Safari 1</NavLink>
                    <NavLink to='/' class='all-safaries' id='two'> Safari 2</NavLink>
                    <NavLink to='/' class='all-safaries' id='three'>Safari 3</NavLink>
                    <NavLink to='/' class='all-safaries' id='four'>Safari 4</NavLink>
                    <NavLink to='/' class='all-safaries' id='five'>Safari 5</NavLink>
                </container>
            </Fragment>
            
        )
      }
}