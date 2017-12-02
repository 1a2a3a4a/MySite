/**
 * Created by Tony Wang on 8/25/2017.
 */
import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import * as mediaQuery from '../constants/mediaQuery';
import MediaQuery from 'react-responsive';
import * as Strings from '../constants/strings';

import Divider from 'material-ui/Divider';

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
            dropDownMenu: {
                width: '100%',
                fontFamily: 'Rokkitt',
            },
            menuItem: {
                width: '100%',
                fontFamily: 'Rokkitt',
            },
            underLine: {
                visibility: 'hidden',
            },
            selectedMenu: {
                fontFamily: 'Rokkitt',
            }

        };
        this.state = {
            homeStyle: null,
            aboutMeStyle: null,
            projectsStyle: null,
            contactStyle: null,
            value: 1,
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
            default:
                return

        }
    };

    handleDropDownMenuChange = ((event, index, value) => this.setState({value}));

    buttonMenu = () => {
        return(
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
        )
    };

    dropDownMenu = () => {
        return(
        <div style={this.style.dropDownMenu}>
            <DropDownMenu
                value={this.state.value}
                onChange={this.handleDropDownMenuChange}
                style={this.style.dropDownMenu}
                menuStyle={this.style.DropDownMenu}
                menuItemStyle={this.style.menuItem}
                underlineStyle={this.style.underLine}
                selectedMenuItemStyle={this.style.selectedMenu}
            >
                <MenuItem value={1} primaryText={Strings.home} onClick={this.clickHome} style={this.style.menuItem}/>
                <Divider />
                <MenuItem value={2} primaryText={Strings.aboutMe} onClick={this.clickAboutMe}style={this.style.menuItem}/>
                <Divider />
                <MenuItem value={3} primaryText={Strings.projects} onClick={this.clickProjects}style={this.style.menuItem}/>
                <Divider />
                <MenuItem value={4} primaryText={Strings.contact} onClick={this.clickContact}style={this.style.menuItem}/>

            </DropDownMenu>
        </div>
        )
    }

    render(){
            return (
                <div>
                    <MediaQuery minDeviceWidth={mediaQuery.minWidth}>
                        {
                            (matches) => {
                                if (matches) {
                                    return this.buttonMenu();
                                } else {
                                    return this.dropDownMenu();
                                }
                            }
                        }
                    </MediaQuery>
                </div>
            )
    }
 }











export default Header
