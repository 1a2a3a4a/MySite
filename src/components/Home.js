/**
 * Created by Tony Wang on 6/6/2017.
 */
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import {VelocityTransitionGroup } from 'velocity-react';
import 'velocity-animate'
import 'velocity-animate/velocity.ui'
class Home extends  Component{
    render(){
        const style = {
            border: {
              borderStyle: 'solid',
              borderColor: '#e6e6e6',
            },

            font: {
                fontSize: '500%',
            },
        };
        return(
            <div>
                <VelocityTransitionGroup
                    runOnMount={true}
                    enter={"transition.expandIn"}
                    leave={"transition.expandOut"}
                >
                    <div>
                        <h1 style={style.font}>TONY WANG</h1>
                        <h2 style={{color: 'gray'}}>DEVELOPER</h2>
                        <MenuButtons  setSelectedToAboutMe={this.props.setSelectedToAboutMe}
                                      setSelectedToProjects={this.props.setSelectedToProjects}
                                      setSelectedToContact={this.props.setSelectedToContact}/>
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