import {createStackNavigator} from 'react-navigation-stack';

import About from '../screens/About';
import Header from '../shared/header';
import React from 'react';
const screens={
    About:{
        screen:About,
        navigationOptions:({navigation})=>{
           
            return{ header:()=> <Header navigation={navigation} 
            title=' About GameZone'/>,}
           
           // headerStyle:{backgroundColor:'coral'}
        }
    }
}

const aboutStack =createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'white',
        headerStyle:{}
    }
});


export default aboutStack;