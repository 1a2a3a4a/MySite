/**
 * Created by Tony Wang on 6/4/2017.
 */
import React, { Component } from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
injectTapEventPlugin();

class MenuTabs extends Component {

    clickAboutMe(){
        this.props.setSelectedToAboutMe();

    }

    clickProjects(){
        this.props.setSelectedToProjects();
    }

    clickContact(){
        this.props.setSelectedToContact();
    }

    render() {
        const barStyle = {
            scale: {
                flexShrink: 5,
                width: '30%',
            },

            toolbar:{
                margin: '1em',
            },
            cursorStyle:{
                cursor: 'pointer',
            },

            color: {
                color: 'gray',
                fontFamily: 'Times New Roman',
            }
        };

        return (
            <div style={barStyle.scale}>
                <MuiThemeProvider >
                    <Toolbar >
                        <ToolbarGroup lastChild={true}>
                            <ToolbarTitle text="About Me" style={barStyle.cursorStyle} onClick={()=>this.clickAboutMe()}/>
                            <ToolbarSeparator style={barStyle.toolbar}/>
                            <ToolbarTitle text="Projects" style={barStyle.cursorStyle} onClick={()=>this.clickProjects()}/>
                            <ToolbarSeparator style={barStyle.toolbar}/>
                            <ToolbarTitle text="Contact" style={barStyle.cursorStyle} onClick={()=>this.clickContact()}/>

                        </ToolbarGroup>
                    </Toolbar>
                </MuiThemeProvider>
            </div>
        )
    }
}



export default MenuTabs

