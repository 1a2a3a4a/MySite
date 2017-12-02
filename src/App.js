import React, { Component } from 'react';
import './styles/App.css';
import Home from './components/Home'
import AboutMe from "./components/AboutMe";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/Header'
import * as Strings from './constants/strings'
import injectTapEventPlugin from 'react-tap-event-plugin';
import Projects from "./components/Projects";
import Contact from "./components/Contact";
injectTapEventPlugin();
class App extends Component {
    constructor(){
        super();

        this.state = {
            selected: Strings.home,
        };
        this.style = {
            tabs: {
                display: 'flex',
                justifyContent: 'flex-end',
            },

            home:{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
            },
            container: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin:'5px',
            }
        };
    }

    componentWillMount() {
        document.title = "Tony Wang"
    }
    setSelectedToAboutMe = () => {
        this.setState({
            selected: Strings.aboutMe

        });
    }
    setSelectedToContact = () =>{
        this.setState({
            selected: Strings.contact
        })
    }

    setSelectedToProjects = () =>{
        this.setState({
            selected: Strings.projects
        })
    }

    setSelectedToHome = () =>{
        this.setState({
            selected: Strings.home
        })
    }

    getSelectedMenuItem(){
        switch(this.state.selected){
            case Strings.aboutMe:
                return this.aboutMeHTML()
            case Strings.projects:
                return this.projectsHTML();
            case Strings.home:
                return this.homeHTML();
            case Strings.contact:
                return this.contactHTML()
            default:
                return '';
        }
    }

    homeHTML(){

        return(
                <div style={this.style.home}>
                    <Home
                        setSelectedToAboutMe={this.setSelectedToAboutMe}
                        setSelectedToProjects={this.setSelectedToProjects}
                        setSelectedToContact={this.setSelectedToContact}
                    />
                 </div>
        )
    }

    aboutMeHTML(){
        return(
                <div style={this.style.container}>
                    <AboutMe/>
                </div>
        )
    }

    contactHTML(){
        return(
            <div style={this.style.container}>
                <Contact/>
            </div>
        )
    }

    projectsHTML(){
        return(
            <div style={this.style.container}>
                <Projects selected={this.state.selected}/>
            </div>
        )
    }

    render() {
      const selectedMenuItem = this.getSelectedMenuItem();
      return (
          <div>
            <MuiThemeProvider>
                <div>
                    <Header
                            setSelectedToHome={this.setSelectedToHome}
                            setSelectedToAboutMe={this.setSelectedToAboutMe}
                            setSelectedToProjects={this.setSelectedToProjects}
                            setSelectedToContact={this.setSelectedToContact}
                            selected={this.state.selected}
                    />
                    {selectedMenuItem}
                </div>
            </MuiThemeProvider>
          </div>
    );
  }
}

export default App;
