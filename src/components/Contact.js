/**
 * Created by Tony Wang on 8/25/2017.
 */
import React, { Component } from 'react';
import {VelocityTransitionGroup } from 'velocity-react';
import 'velocity-animate'
import 'velocity-animate/velocity.ui'
import Paper from 'material-ui/Paper'
class Contact extends  Component {
    render() {
        return(
            <div>
                <VelocityTransitionGroup
                    runOnMount={true}
                    enter={"transition.fadeIn"}
                    leave={"transition.fadeOut"}
                >
                    <div>
                        <h2>Contact Me</h2>
                        <Paper>
                            <ul>
                                <li><a href="https://www.twitter.com/brocodily">Twitter</a></li>
                                <li><a href="https://www.github.com/1a2a3a4a">Github</a></li>
                                <li><a href={"https://www.mailto:brocodily@gmail.com"}>Mail</a></li>
                            </ul>
                        </Paper>
                    </div>
                </VelocityTransitionGroup>
            </div>
        )
    }
}
export default Contact