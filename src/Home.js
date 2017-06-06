/**
 * Created by Tony Wang on 6/6/2017.
 */
import React, { Component } from 'react';


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
            <div >
                <h1 style={style.font}>TONY WANG</h1>
                <h2 style={{color: 'gray'}}>DEVELOPER</h2>
                {/*<h3 style={style.border}>ABOUT ME</h3>*/}

            </div>
        )
    }
}
export default Home