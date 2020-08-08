import React, { Component, Fragment } from 'react';



export default class Video extends Component{
   
    render(){
        const vid = "https://www.youtube.com/watch?v=vkh3UlsSvsQ"
        return(
            <Fragment>
                <video autoPlay="true" loop="loop" muted>
                    <source src={vid} type="video/mp4"></source>
                </video>
            </Fragment>
        )
    }
}
