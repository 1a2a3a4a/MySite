/**
 * Created by Tony Wang on 6/6/2017.
 */
import React, { Component } from 'react';
import '../styles/App.css';
import Paper from 'material-ui/Paper'
import {VelocityTransitionGroup } from 'velocity-react';
import 'velocity-animate'
import 'velocity-animate/velocity.ui'
import * as mediaQuery from '../constants/mediaQuery';
import MediaQuery from 'react-responsive';

class AboutMe extends  Component {
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
                        <h2>About me</h2>
                        </MediaQuery>
                        <Paper>
                            <p>
                                My name is Tony and I am an aspiring developer. I am currently a student at Uppsala University.<br/>
                                On my free time I enjoy working on various projects. You can take a look at my my projects in the projects link.<br/>
                                I am currently interested in web programming and working with the React javascript framework.<br/>
                                This website and my other web projects are made using React.<br/>
                                On my non programming free time I enjoy playing PC games and working out at the gym.
                            </p>
                        </Paper>
                    </div>
                </VelocityTransitionGroup>
            </div>
        )
    }
}

export default AboutMe