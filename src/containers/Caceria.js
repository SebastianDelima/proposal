import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../components/NavBar'

export default class Caceria extends Component {
    render(){
        return(
            <Fragment>
                <NavBar/>
                <container id="img-intro-cont">
                    <div id="img-intro">En Sirius Outdoors nos compremetemos a ofrecer el mejor servico por nos 
                                        asociamos con unos de los mejores ranchos de caceria en Africa. Abajo puedes explorar 
                                        cada una de las opciones que hemos personalizado para cada necesidad.</div>
                </container>
                <container id='safaries'>
                    <NavLink to='/safari/1' className='all-safaries' id='one'> Safari 1</NavLink>
                    <NavLink to='/safari/2' className='all-safaries' id='two'> Safari 2</NavLink>
                    <NavLink to='/safari/3' className='all-safaries' id='three'>Safari 3</NavLink>
                    <NavLink to='/safari/4' className='all-safaries' id='four'>Safari 4</NavLink>
                    <NavLink to='/safari/5' className='all-safaries' id='five'>Safari 5</NavLink>
                </container>
            </Fragment>
            
        )
      }
}