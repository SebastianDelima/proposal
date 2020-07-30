import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../components/ContactFooter'
import NavBar from '../components/NavBar'

export default class Caceria extends Component {
    render(){
        return(
            <Fragment>
                <NavBar/>
                <container id="img-intro-cont">
                    <div id="intro">En Sirius Outdoors nos obsesionamos con el cliente, por eso nos 
                                        asociamos con los mejores ranchos de cacería en África. Abajo puedes explorar 
                                        cada opcion personalizada pensada para ofrecer la experiencia que te mereces.</div>
                </container>
                <container id='safaries'>
                    <NavLink to='/safari/1' className='all-safaries' id='one'> Safari 1</NavLink>
                    <NavLink to='/safari/2' className='all-safaries' id='two'> Safari 2</NavLink>
                    <NavLink to='/safari/3' className='all-safaries' id='three'>Safari 3</NavLink>
                    <NavLink to='/safari/4' className='all-safaries' id='four'>Safari 4</NavLink>
                    <NavLink to='/safari/5' className='all-safaries' id='five'>Safari 5</NavLink>
                </container>
                <Footer/>
            </Fragment>
            
        )
      }
}