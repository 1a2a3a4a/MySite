/**
 * Created by Tony Wang on 8/25/2017.
 */
import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton'
import * as Strings from '../constants/strings'
class Header extends Component {
    constructor(props){
        super(props)
        this.style = {
            button:{
                margin: '5px',
                border: 'solid 1px black',
                backgroundColor: 'white',
                fontFamily: 'Rokkitt',
            },
            tabs: {
                display: 'flex',
                justifyContent: 'flex-end',

            },

        };
        this.state = {
            homeStyle: null,
            aboutMeStyle: null,
            projectsStyle: null,
            contactStyle: null,
        }
    }

    clickHome = () => {
        this.props.setSelectedToHome()
    }
    clickAboutMe = () => {
        this.props.setSelectedToAboutMe()
    }
    clickProjects = () => {
        this.props.setSelectedToProjects()
    }
    clickContact = () => {
        this.props.setSelectedToContact()
    }

    setStyles(){
        switch(this.props.selected){
            case Strings.home:
                break;
            case Strings.aboutMe:
                break;
            case Strings.projects:
                break;
            case Strings.contact:
                break;

        }
    }


    render(){

        return(
            <div>
                <div style={this.style.tabs}>
                    <FlatButton style={this.style.button}
                                label={"Home"}
                                onClick={this.clickHome}/>
                    <FlatButton style={this.style.button}
                                label={"About Me"}
                                onClick={this.clickAboutMe}/>
                    <FlatButton style={this.style.button}
                                label={"Projects"}
                                onClick={this.clickProjects}/>
                    <FlatButton style={this.style.button}
                                label={"Contact"}
                                onClick={this.clickContact}/>
                </div>
            </div>
        )
    }
}

export default Header
