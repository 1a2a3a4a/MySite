/**
 * Created by Tony Wang on 8/27/2017.
 */
import React, { Component } from 'react';
import '../../styles/App.css';
import {VelocityTransitionGroup } from 'velocity-react';
import 'velocity-animate'
import 'velocity-animate/velocity.ui'
class Queueliary extends Component{

    render(){
        return(
            <div>
                <VelocityTransitionGroup
                    runOnMount={true}
                    enter={"transition.fadeIn"}
                    leave={"transition.fadeOut"}
                >
                <div>
                    <h3>Queueliary - A real time queue system</h3>
                    <span>Create a queue. Invite people to the queue and help them with their problems</span>
                </div>
                </VelocityTransitionGroup>
            </div>
        )
    }

}

export default Queueliary