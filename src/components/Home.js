/**
 * Created by Tony Wang on 6/6/2017.
 */
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import {VelocityTransitionGroup } from 'velocity-react';
import 'velocity-animate'
import 'velocity-animate/velocity.ui'

import * as mediaQuery from '../constants/mediaQuery';
import MediaQuery from 'react-responsive';

const style = {
    border: {
        borderStyle: 'solid',
        borderColor: '#e6e6e6',
    },

    font: {
        fontSize: '500%',
    },
};

class Home extends  Component{

    nameText =() => {
       return  <MediaQuery minDeviceWidth={mediaQuery.minWidth}>
            {
                (matches) => {
                    if (matches) {

                        return <h1 style={style.font}>TONY WANG</h1>

                    }else{
                        return <h1 style={{fontSize: '300%'}}>TONY WANG</h1>
                    }
                }
            }
        </MediaQuery>
    }

    render(){
        return(
            <div>
                <VelocityTransitionGroup
                    runOnMount={true}
                    enter={"transition.expandIn"}
                    leave={"transition.expandOut"}
                >
                    <div>
                        {this.nameText()}
                        <h2>A personal website</h2>
                        {/*<MenuButtons  setSelectedToAboutMe={this.props.setSelectedToAboutMe}
                                      setSelectedToProjects={this.props.setSelectedToProjects}
                                      setSelectedToContact={this.props.setSelectedToContact}/>
                        */}
                    </div>
                </VelocityTransitionGroup>
            </div>
        )
    }
}

class MenuButtons extends Component {
    render(){
        const style = {
            button:{
                marginRight: '0.3em',
                fontFamily: 'Rokkitt',
            },
        };
        return(
            <div>
                <RaisedButton style={style.button}
                              label="About Me"
                              onClick={this.props.setSelectedToAboutMe}/>
                <RaisedButton style={style.button}
                              label="Projects"
                              onClick={this.props.setSelectedToProjects}/>
                <RaisedButton style={style.button}
                              label="Contact"
                              onClick={this.props.setSelectedToContact}/>
            </div>
        )
    }
}

export default Home