/**
 * Created by Tony Wang on 8/25/2017.
 */
import React, { Component } from 'react';
import {VelocityTransitionGroup } from 'velocity-react';
import 'velocity-animate'
import 'velocity-animate/velocity.ui'
class Projects extends  Component {
    render() {
        return(
            <div>
                <VelocityTransitionGroup
                    runOnMount={true}
                    enter={"transition.fadeIn"}
                    leave={"transition.fadeOut"}
                >
                    <div>

                    </div>
                </VelocityTransitionGroup>
            </div>
        )
    }
}

export default Projects