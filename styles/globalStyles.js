import React from 'react'
import {StyleSheet} from 'react-native';


 export const globalStyles=StyleSheet.create({
    container:{
        padding:20,
        flex:1,
        fontFamily:'nunito-bold',
    },
    titleText:{
        fontFamily:'nunito-bold',
        fontSize:16,
        color:'#333'
    },
    paragraph:{
        lineHeight:20,
        marginVertical:8,
    
    }
})

export const images={
    ratings:{
        '1':require('../assets/rating-1.png'),
        '2':require('../assets/rating-2.png'),
        '3':require('../assets/rating-3.png'),
        '4':require('../assets/rating-4.png'),
        '5':require('../assets/rating-5.png'),
    }
}