import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/MenuComponent';
import ReviewDetails from '../screens/DishdetailComponent';
import Header from '../shared/header';
import React from 'react';

const screens={
    Home:{
        screen:Home
      
        
    },
    ReviewDetails:{
        screen:ReviewDetails,
        
    }
}

const homeStack = createStackNavigator(screens);

export default createAppContainer(homeStack);
