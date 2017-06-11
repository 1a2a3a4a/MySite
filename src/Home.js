/**
 * Created by Tony Wang on 6/6/2017.
 */
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Home extends  Component{


    render(){

        const style = {
            border: {
              borderStyle: 'solid',
              borderColor: '#e6e6e6',
            },

            font: {
                fontSize: '500%',
                color: 'white',
                fontFamily:'Times New Roman',

            },

        };
        return(
            <div>
                <h1 style={style.font}>TONY WANG</h1>
                <h2 style={{color: 'gray'}}>DEVELOPER</h2>
                <MenuButtons  setSelectedToAboutMe={this.props.setSelectedToAboutMe}
                              setSelectedToProjects={this.props.setSelectedToProjects}
                              setSelectedToContact={this.props.setSelectedToContact}/>
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
                <MuiThemeProvider>
                    <RaisedButton style={style.button}label="About Me" onClick={()=>this.props.setSelectedToAboutMe()}/>
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <RaisedButton style={style.button}label="Contact" onClick={()=>this.props.setSelectedToContact()}/>
                </MuiThemeProvider>

            </div>
        )
    }
}

export default Home