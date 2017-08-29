/**
 * Created by Tony Wang on 8/25/2017.
 */
import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton'

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
    }
    render(){
        return(
            <div>
                <div style={this.style.tabs}>
                    <FlatButton style={this.style.button}
                                label={"Home"}
                                onClick={this.props.setSelectedToHome}/>
                    <FlatButton style={this.style.button}
                                label={"About Me"}
                                onClick={this.props.setSelectedToAboutMe}/>
                    <FlatButton style={this.style.button}
                                label={"Projects"}
                                onClick={this.props.setSelectedToProjects}/>
                    <FlatButton style={this.style.button}
                                label={"Contact"}
                                onClick={this.props.setSelectedToContact}/>

                </div>
            </div>
        )
    }
}

export default Header
