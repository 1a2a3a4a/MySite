/**
 * Created by Tony Wang on 6/6/2017.
 */
import React, { Component } from 'react';
import Paper from 'material-ui/Paper'
import {VelocityTransitionGroup } from 'velocity-react';
import 'velocity-animate'
import 'velocity-animate/velocity.ui'
class AboutMe extends  Component {
    render() {
        const style = {
            aboutMe: {
                borderStyle: 'solid',
                borderColor: 'gray',
                width: '40%',
                height: '30em',
                backgroundColor: 'lightGray'
            },
            container: {
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                width: '50%',
            }
        };
        return(
            <div style={style.container}>
                <VelocityTransitionGroup
                    runOnMount={true}
                    enter={"transition.fadeIn"}
                    leave={"transition.fadeOut"}
                >
                    <div style={style.container}>
                        <Paper>
                            <p>About Me!</p>
                            <br/>
                            <p>
                                My name is Tony and I am an aspiring developer. I am currently a student at Uppsala University
                                I like to programming on my free time. You can check out my projects in the projects link.
                                This website is developed using the React js library.
                            </p>
                        </Paper>
                    </div>
                </VelocityTransitionGroup>
            </div>
        )
    }

}

export default AboutMe