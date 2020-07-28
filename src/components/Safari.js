import React, { Component, Fragment } from 'react';
import NavBar from './NavBar';
import Carousel from 'react-bootstrap/Carousel'

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
            </Fragment>
            )
        // Safari 2
        }else if(id === 2){
            return(
                <Fragment>
                    <NavBar/>
                <div>Safari 2</div>
            </Fragment>
            )
        // Safari 3
        }else if(id === 3){
            return(
                <Fragment>
                    <NavBar/>
                <div>Safari 3</div>
            </Fragment>
            )
        // Safari 4
        }else if(id === 4){
            return(      
                <Fragment>
                    <NavBar/>
                <div>Safari 4</div>
            </Fragment>
            )
        // Safari 5
        }else if(id === 5){
            return(
                <Fragment>
                    <NavBar/>
                <div>Safari 5</div>
            </Fragment>
            )
        }
      
    }
}