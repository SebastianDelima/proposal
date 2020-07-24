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
                    <div id="img-intro">En Sirius Outdoors nos compremetemos a ofrecer el mejor servico por nos 
                                        asociamos con unos de los mejores ranchos de caceria en Africa. Abajo puedes explorar 
                                        cada una de las opciones que hemos personalizado para cada necesidad.</div>
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