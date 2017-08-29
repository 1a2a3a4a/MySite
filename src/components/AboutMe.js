/**
 * Created by Tony Wang on 6/6/2017.
 */
import React, { Component } from 'react';
import '../styles/App.css';
import Paper from 'material-ui/Paper'
import {VelocityTransitionGroup } from 'velocity-react';
import 'velocity-animate'
import 'velocity-animate/velocity.ui'
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
                        <h2>About me</h2>
                        <Paper>
                            <p>
                                My name is Tony and I am an aspiring developer. I am currently a student at Uppsala University<br/>
                                On my free time I enjoy working on various projects. You can take a look at my my projects in the projects link.<br/>
                                This website is developed using the React js library.<br/>
                            </p>
                        </Paper>
                    </div>
                </VelocityTransitionGroup>
            </div>
        )
    }

}

export default AboutMe