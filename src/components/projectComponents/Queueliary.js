/**
 * Created by Tony Wang on 8/27/2017.
 */
import React, { Component } from 'react';
import '../../styles/App.css';
import {VelocityTransitionGroup } from 'velocity-react';
import 'velocity-animate'
import 'velocity-animate/velocity.ui'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";
import helperImage from '../../images/queueliary_helper.PNG'
import queuerImage from '../../images/queueliary_ticket.PNG'
class Queueliary extends Component{
    constructor(props){
        super(props)
        this.style ={
            container: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            },
            paragraph: {
                width: '70&',
            },
        }
    }

    render(){
        const images = [
            {
                original: queuerImage,
                thumbnail: queuerImage,
            },
            {
                original: helperImage,
                thumbnail: helperImage,
            },
        ];
        return(
            <div>
                <VelocityTransitionGroup
                    runOnMount={true}
                    enter={"transition.fadeIn"}
                    leave={"transition.fadeOut"}
                >
                <div>
                    <div  style={this.style.container}>
                    <h3>Queueliary - A real time queueing system</h3>
                    <a target="_blank" href="https://queueliary.firebaseapp.com/">Click here to visit!</a>
                    <p >
                        Queueliary is a web application aimed for teacher and students.<br/>
                        The purpose is to solve the issues where many students need the assistance of few teachers.
                        With Queueliary you can create an online queue,<br/> invite teachers and students to the queue
                        and then let the students create queueing tickets where they can put in their name
                        and any additional comments.<br/>
                        The teachers can then keep track of the students requiring help<br/>
                        and then help them accordingly.<br/>
                        Queueliary supports multiple teachers and multiple students in the queue and does not enforce
                        first in and first out queueing.
                    </p>
                        <ImageGallery
                            items={images}
                            showBullets={true}
                            showThumbnails={false}
                          />
                    </div>
                </div>
                </VelocityTransitionGroup>
            </div>
        )
    }
}






export default Queueliary