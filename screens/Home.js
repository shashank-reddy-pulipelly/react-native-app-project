import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,FlatList } from 'react-native';
import {globalStyles} from '../styles/globalStyles';
export default function Home({navigation}) {
 const [reviews,setReviews]=useState([
   {title:'the todo appp HAHHH 1',body:'body1',rating:3,key:'1'},
   {title:'the todo appp HAHHH 2',body:'body2',rating:1,key:'2'},
   {title:'the todo appp HAHHH 3',body:'body3',rating:5,key:'3'},
   {title:'the todo appp HAHHH 4 ',body:'body4',rating:4,key:'4'},
   {title:'the todo appp HAHHH 5' ,body:'body5',rating:2,key:'5'},
 ])
  return (
    <View style={globalStyles.container}>
      <FlatList data={reviews} renderItem={({item})=>(
        <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails',item)}>
        <Text style={globalStyles.titleText}>{item.title}</Text>
        </TouchableOpacity>
     ) }/>
      
    </View>
  );
}

