/**
 * Created by Tony Wang on 8/25/2017.
 */
import React, { Component } from 'react';
import Paper from 'material-ui/Paper'
import Queueliary from './projectComponents/Queueliary'
import {VelocityTransitionGroup } from 'velocity-react';
import 'velocity-animate'
import 'velocity-animate/velocity.ui'
import * as Strings from '../constants/strings'
class Projects extends  Component {
    constructor(){
        super();
        this.state = {
           render_project: 'default',

        };
        this.style = {
            header: {
                display: 'flex',
            },
            listItem: {
                cursor: 'pointer',
            },
            projectTitle: {
                color   : 'darkblue',
                fontSize: '120%',
                fontFamily: 'Vollkorn',
            },
            container: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            },

        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.selected === Strings.projects){
            this.setState({
                render_project: 'default',
            })
        }
    }

    renderProject = () => {
        switch(this.state.render_project){
            case Strings.queueliary:
                return <Queueliary/>
            case Strings.RealTimeSummoners:
                return
                break;
            default:
                return(
                <Paper>
                    <ul>
                        <li style={this.style.listItem} onClick={this.clickQueueliary}> <span style={this.style.projectTitle}>Queueliary</span> - A real time online queue system aimed for students and teachers</li>
                        <li style={this.style.listItem}>Coming soon.... Cooperative real time summoner spells cooldown timers for league of legends</li>
                    </ul>
                </Paper>)
        }
    }

    clickQueueliary = () => {
        this.setState({
            render_project: Strings.queueliary,
        })
    }

    render() {
        return(
            <div>
                <VelocityTransitionGroup
                    runOnMount={true}
                    enter={"transition.fadeIn"}
                    leave={"transition.fadeOut"}
                >
                    <div style={this.style.container}>
                        <h2>My Projects</h2>
                        {this.renderProject()}
                    </div>
                </VelocityTransitionGroup>
            </div>
        )
    }
}

export default Projects