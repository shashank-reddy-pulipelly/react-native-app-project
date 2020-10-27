import React from 'react';
import { MaterialIcons } from '@expo/vector-icons'; 
import { StyleSheet, Text, View,Button,Image,ImageBackground} from 'react-native';
function Header({navigation,title}) {
    const openMenu=()=>{
        navigation.openDrawer();
    }
    return (
        <View style={styles.header} >
            <MaterialIcons name="menu" size={30} color="black"
             onPress={openMenu} style={styles.icon} />
            <View style={styles.headerTitle}>
                <Image style={styles.headerImage} source={require('../assets/logo.jpg')}/>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    header:{
       backgroundColor:'red',
        width:'100%',
        height:70,
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'center',
        paddingBottom:10,
     
       
        
    },
    headerText:{
        fontWeight:'bold',
        fontSize:20,
        color:'black',
        letterSpacing:1,
    },
    icon:{
        position:'absolute',
        left:16,
        bottom:10,
        
    },
    headerImage:{
        width:26,
        height:26
    },
    headerTitle:{
        flexDirection:'row',
        alignItems:'center',
    }
})

export default Header;
