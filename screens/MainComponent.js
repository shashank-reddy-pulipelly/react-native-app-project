import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';

import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';




const screens={
    Menu:{
        screen:Menu
      
        
    },
    Dishdetail:{
        screen:Dishdetail,
        
    }
}

const homeStack = createStackNavigator(screens,
    {
       
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"            
            }
        }
    });

const Container= createAppContainer(homeStack);

export default function Main() {
  

    return (
     <Container />
   
   
     );
  
 
 
}


