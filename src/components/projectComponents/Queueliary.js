/**
 * Created by Tony Wang on 8/27/2017.
 */
import React, { Component } from 'react';
import '../../styles/App.css';
import {VelocityTransitionGroup } from 'velocity-react';
import 'velocity-animate'
import 'velocity-animate/velocity.ui'


class Queueliary extends Component{
    constructor(props){
        super(props)

        this.style ={
            container: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            },
        }

    }
    render(){
        return(
            <div style={this.style.container}>
                <VelocityTransitionGroup
                    runOnMount={true}
                    enter={"transition.fadeIn"}
                    leave={"transition.fadeOut"}
                >
                <div style={this.style.container}   >
                    <h3>Queueliary - A real time queue system</h3>
                    <a href="https://queueliary.firebaseapp.com/">Click here to visit!</a>
                    <p>Queueliary is a web application aimed for teacher and students.
                        The purpose is to solve the issues where many students need the assistance of few teachers
                        With Queueliary you can create an online queue, invite teachers and students to the queue
                        and then let the students create queueing tickets where they can put in their name
                        and any additional comments.
                        The teachers can then keep track of the students requiring help
                        and then help them accordingly. Queueliary supports multiple teachers and multiple students in the queue and does not enforce
                        first in and first out queueing.
                    </p>
                </div>
                </VelocityTransitionGroup>
            </div>
        )
    }

}

export default Queueliary