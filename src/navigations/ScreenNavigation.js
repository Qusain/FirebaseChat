import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Payment} from '../payment';
import {Chat} from '../chat';
import {Login} from '../componenet';
import {SignUp} from '../componenet';

const ScreenNavigation = createStackNavigator({
    Login,
    SignUp,
    Chat,

Payment,

    },

{
    headerMode: 'none',
        navigationOptions: {
    headerVisible: 'false',
},
},

);
export default createAppContainer(ScreenNavigation);
