/**
 * Created by Tony Wang on 8/25/2017.
 */
import React, { Component } from 'react';
import {VelocityTransitionGroup } from 'velocity-react';
import 'velocity-animate'
import 'velocity-animate/velocity.ui'


import * as mediaQuery from '../constants/mediaQuery';
import MediaQuery from 'react-responsive';
import Paper from 'material-ui/Paper'
import { SocialIcon } from 'react-social-icons';

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
                        <MediaQuery minDeviceWidth={mediaQuery.minWidth}>
                        <h2>Contact Me</h2>
                        </MediaQuery>
                        <Paper>
                            <ul>
                                <li><SocialIcon url="https://twitter.com/brocodily" /></li>
                                <li><SocialIcon url="https://www.github.com/1a2a3a4a" /></li>
                                <li><SocialIcon url="https://www.mailto:brocodily@gmail.com"/></li>
                                <li><SocialIcon url="https://www.linkedin.com/in/tony-wang-39bb6a96/" /></li>
                            </ul>
                        </Paper>
                    </div>
                </VelocityTransitionGroup>
            </div>
        )
    }
}





export default Contact