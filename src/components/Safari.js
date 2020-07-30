import React, { Component, Fragment } from 'react';
import NavBar from './NavBar';
import Carousel from 'react-bootstrap/Carousel'
import Footer from '../components/ContactFooter'



export default class Safari extends Component {

    render(){
        let id = parseInt(window.location.pathname.split("/")[2])
        // Safari 1
        if(id === 1){
            return(

                <Fragment>

                    <NavBar/>

                    <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://lp-cms-production.imgix.net/image_browser/masai-mara-shutterstockRF_778811002.jpg?format=auto"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://lp-cms-production.imgix.net/image_browser/masai-mara-shutterstockRF_778811002.jpg?format=auto"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://lp-cms-production.imgix.net/image_browser/masai-mara-shutterstockRF_778811002.jpg?format=auto"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                    </Carousel>
                        <p id='Saf-title'>Safari 1</p>

                        <div className="back-img one">
                        <p className="Saf-sub">Que es?</p>

                        <p className="Saf-info">
                        Ubicado en Namibia, en un rancho de 31,000 acres, además de su convenio
                        para aprovechar más de 250,000 acres en Namibia y Botswana. 
                        <br></br>
                        <br></br>
                        El rancho principal está a 2 horas y media del aeropuerto de Windhoek. 
                        <br></br>
                        <br></br>
                        Grupo de guías, cazador profesional y amplio staff. 
                        La temporada de Caza es del 1 de febrero al 31 de noviembre.
                        Nambia es uno de los países más turistícos de África. 
                        Hospedaje y trato familiar, con grandes atenciones y muchas actividades complementarias a la cacería.
                        </p>
                        </div>

                        <div className="back-img two">
                        <p className="Saf-sub">Alojamiento?</p>
                        
                        <p>
                        - Arquitectura estilo africana, boutique y con todas las comodidades
                        <br></br>
                    
                        - Aire acondicionado, wifi, baño particular, room service, alberca, 
                        bar y fogata.
                        <br></br>
                    
                        - Bungalos boutique rústicos pero lujosos.
                        <br></br>
             
                        - Con vista 
                        a un bordo que atrae a fauna local mientras se disfruta de un excelente trato.
                        </p>
                        </div>

                        <div className="back-img three">
                        <p className="Saf-sub">Caceria?</p>

                        <p className="paragraph">
                        Cazadores: 1x1 (Un cazador con un cazador profesional)$520
                        Cazadores: 2x1 (Un minimo de dos cazadores)$370
                        No-cazadores: Menores de 12 $120 x dia
                        No-cazadores: $240 x dia
                        Fuera de temporada: $120 x dia
                        Que incluye la tarifa diaria?
                        15% VAT incluido
                        Los servicios de un cazador professional
                        Un vehiculo equipado con traction 4 x 4.
                        Preparacion de trofeos
                        Comida y alojamoiento
                        Servicio de lavanderia
                        Cerveza, vino y licores(en moderacion)
                        Transporte entre aeropuertos y zonas de
                        caceria.
                        Todos los costos de licensia.
                        Que no incluye la tarifa?
                        Costos de trofeos 
                        Renta de rifle. $40/dia
                        Costo de municiones.
                        Costo de viaje, hoteles y comida antes y
                        despues del hospedaje.
                        Staff gratuities.
                        Seguro medico y seguro de viaje.
                        </p>
                       </div>

                    <Footer/>

            </Fragment>
            )
        // Safari 2
        }else if(id === 2){
            return(
                <Fragment>
                    <NavBar/>
                    <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://lp-cms-production.imgix.net/image_browser/masai-mara-shutterstockRF_778811002.jpg?format=auto"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://lp-cms-production.imgix.net/image_browser/masai-mara-shutterstockRF_778811002.jpg?format=auto"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="Picture.js"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                    </Carousel>            </Fragment>
            )
        // Safari 3
        }else if(id === 3){
            return(
                <Fragment>
                    <NavBar/>
                    <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://lp-cms-production.imgix.net/image_browser/masai-mara-shutterstockRF_778811002.jpg?format=auto"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://lp-cms-production.imgix.net/image_browser/masai-mara-shutterstockRF_778811002.jpg?format=auto"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="Picture.js"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                    </Carousel>            </Fragment>
            )
        // Safari 4
        }else if(id === 4){
            return(      
                <Fragment>
                    <NavBar/>
                    <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://lp-cms-production.imgix.net/image_browser/masai-mara-shutterstockRF_778811002.jpg?format=auto"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://lp-cms-production.imgix.net/image_browser/masai-mara-shutterstockRF_778811002.jpg?format=auto"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="Picture.js"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                    </Carousel>            </Fragment>
            )
        // Safari 5
        }else if(id === 5){
            return(
                <Fragment>
                    <NavBar/>
                    <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://lp-cms-production.imgix.net/image_browser/masai-mara-shutterstockRF_778811002.jpg?format=auto"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://lp-cms-production.imgix.net/image_browser/masai-mara-shutterstockRF_778811002.jpg?format=auto"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="Picture.js"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                    </Carousel>            </Fragment>
            )
        }
      
    }
}