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
                <video autoplay muted loop id="myVideo">
                    <source src="Africa.mp4" type="video/mp4"/>
                    </video>
                    <div id="intro">
                        <blockquote className="p-brick">
                        En Sirius Outdoors nos obsesionamos con el cliente,
                        por eso nos asociamos con los mejores ranchos de 
                        cacería en África. Abajo puedes explorar cada opcion
                        personalizada pensada para ofrecer la experiencia que
                       te mereces.
                       </blockquote>
                    </div>
                </container>
                <container id='safaries'>
                    <NavLink to='/safari/1' className='all-safaries' id='one'>  </NavLink>
                    <NavLink to='/safari/2' className='all-safaries' id='two'>  </NavLink>
                    <NavLink to='/safari/3' className='all-safaries' id='three'></NavLink>
                    <NavLink to='/safari/4' className='all-safaries' id='four'> </NavLink>
                    <NavLink to='/safari/5' className='all-safaries' id='five'> </NavLink>
                </container>
                <Footer/>
            </Fragment>
            
        )
      }
}