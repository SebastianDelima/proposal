import React, { Component, Fragment } from 'react';

export default class Safari extends Component {

    render(){
        let id = parseInt(window.location.pathname.split("/")[2])
        console.log(id)
        if(id === 1){
            return(
          
                <Fragment>
                <div>Safari 1</div>
            </Fragment>
            )
        }else if(id === 2){
            return(
          
                <Fragment>
                <div>Safari 2</div>
            </Fragment>
            )
        }else if(id === 3){
            return(
          
                <Fragment>
                <div>Safari 3</div>
            </Fragment>
            )
        }else if(id === 4){
            return(
          
                <Fragment>
                <div>Safari 4</div>
            </Fragment>
            )
        }else if(id === 5){
            return(
          
                <Fragment>
                <div>Safari 5</div>
            </Fragment>
            )
        }
      
    }
}