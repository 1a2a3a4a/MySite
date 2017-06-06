/**
 * Created by Tony Wang on 6/6/2017.
 */
import React, { Component } from 'react';


class AboutMe extends  Component {



    render() {

        const style = {
            aboutMe: {

                borderStyle: 'solid',
                borderColor: 'gray',
                alignSelf: 'center',
                width: '40%',
                height: '30em',
                backgroundColor: 'lightGray'
            }
        };
        return (
            <div style={style.aboutMe} >
                <p>About Me!</p>
                <br/>
                <p>
                    My name is Tony and I am an aspiring developer. I am currently a student at Uppsala University
                    I like to programming on my free time. You can check out my projects in the projects link.
                    This website is developed using the React js library.
                </p>
            </div>
        )
    }

}

export default AboutMe