import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import About from './screens/About';
import ReviewDetails from './screens/ReviewDetails';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import Navigator from './routes/homeStack';
const getFonts=()=>{
  return Font.loadAsync({
    'nunito-regular':require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold':require('./assets/fonts/Nunito-Bold.ttf')
  })
}


export default function App() {
  const [fontsLoaded,setFontsLoaded]=useState(false);
  if(fontsLoaded){
    return (
     <Navigator />
   
   
     );
  }
  else{
    return(
      <AppLoading startAsync= {getFonts}
       onFinish={()=>setFontsLoaded(true)} />
    )
  }
 
}


