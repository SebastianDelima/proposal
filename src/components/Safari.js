import React, { Component, Fragment } from 'react';
import NavBar from './NavBar';

export default class Safari extends Component {

    render(){
        let id = parseInt(window.location.pathname.split("/")[2])
        // Safari 1
        if(id === 1){
            return(
                <Fragment>
                    <NavBar/>
                <div>Safari 1</div>
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