/**
 * Created by Tony Wang on 6/4/2017.
 */

import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
class MenuTabs extends Component {

    render() {
        return (
            <div>
                <MuiThemeProvider>
                   <Tabs>
                       <Tab label="About me">
                           <div>
                               Hi my name is Tony
                           </div>

                       </Tab>
                       <Tab label="Blog">
                           <div>
                               Stuff
                           </div>
                       </Tab>
                       <Tab label="Projects">
                           <div>

                           </div>

                       </Tab>
                   </Tabs>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default MenuTabs

