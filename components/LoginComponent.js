import React, { Component } from 'react';
import { View,  StyleSheet ,Text, ScrollView, Image, Alert } from 'react-native';
import { Card, Icon,Button, Input, CheckBox } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store'
import * as Permissions from 'expo-permissions';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as ImagePicker from 'expo-image-picker';
import { baseUrl } from '../shared/baseUrl';
import {NavigationContainer} from '@react-navigation/native';
import * as ImageManipulator from 'expo-image-manipulator';
import { Asset } from 'expo-asset';
import * as Calendar from 'expo-calendar';
class LoginTab extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            remember: false
        }
    }

    componentDidMount() {
        SecureStore.getItemAsync('userinfo')
            .then((userdata) => {
                let userinfo = JSON.parse(userdata);
                if (userinfo) {
                    this.setState({username: userinfo.username});
                    this.setState({password: userinfo.password});
                    this.setState({remember: true})
                }
            })
    }

   
    static navigationOptions = {
        title: 'Login',
        tabBarIcon: ({ tintColor }) => (
            <Icon
              name='sign-in'
              type='font-awesome'            
              size={24}
              iconStyle={{ color: tintColor }}
            />
          ) 
    };
    handleLogin() {
        console.log(JSON.stringify(this.state));
        if (this.state.remember){

  
            SecureStore.setItemAsync('userinfo', JSON.stringify({username: this.state.username, password: this.state.password}))
                .then(response=>console.log(response))
                .catch((error) => console.log('Could not save user info', error));      }
        else{

      
            SecureStore.deleteItemAsync('userinfo')
                .catch((error) => console.log('Could not delete user info', error));
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <Input
                    placeholder=" Username"
                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}
                    containerStyle={styles.formInput}
                    />
                <Input
                    placeholder=" Password"
                    leftIcon={{ type: 'font-awesome', name: 'key' }}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    containerStyle={styles.formInput}
                    />
                <CheckBox title="Remember Me"
                    center
                    checked={this.state.remember}
                    onPress={() => this.setState({remember: !this.state.remember})}
                    containerStyle={styles.formCheckbox}
                    />
                      <View style={styles.formButton}>
                    <Button
                        onPress={() => this.handleLogin()}
                        title=" Login"
                        icon={
                            <Icon
                                name='sign-in'
                                type='font-awesome'            
                                size={24}
                                color= 'white'
                            />
                        }
                        buttonStyle={{
                            backgroundColor: "#512DA8"
                        }}
                        />
                </View>
                <View style={styles.formButton}>
                    <Button
                        onPress={() => this.props.navigation.navigate('Register')}
                        title="Register"
                        buttonStyle={{
                            backgroundColor: "transparent"
                        }}
                        clear
                        icon={
                            <Icon
                                name='user-plus'
                                type='font-awesome'            
                                size={24}
                                color= '#512DA8'
                            />
                        }
                        titleStyle={{
                            color: "#512DA8"
                        }}
                        />
                </View>
            </View>
        );
    }

}

class RegisterTab extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            email: '',
            remember: false,
            imageUrl: baseUrl + 'images/logo.png'
        }
    }

  
    getImageFromCamera = async () => {
        const cameraPermission = await Permissions.askAsync(Permissions.CAMERA);
        const cameraRollPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);

        if (cameraPermission.status === 'granted' && cameraRollPermission.status === 'granted') {
            let capturedImage = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                aspect: [4, 3],
            });

            if (!capturedImage.cancelled) {
                console.log(capturedImage);
                this.processImage(capturedImage.uri);
            }
        }

    }
    getImageFromGallery = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {

          Alert.alert('Permission to access camera roll is required!');
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [4, 3],
            });
          if (!pickerResult.cancelled) {
                console.log(pickerResult);
                this.processImage(pickerResult.uri);
            }

    }

    processImage = async (imageUri) => {
        let processedImage = await ImageManipulator.manipulateAsync(
            imageUri, 
            [
                {resize: {width: 400}}
            ],
            {format: 'png'}
        );
        console.log(processedImage);
        this.setState({imageUrl: processedImage.uri });

    }
    
    static navigationOptions = {
        title: 'Register',
        tabBarIcon: ({ tintColor, focused }) => (
            <Icon
              name='user-plus'
              type='font-awesome'            
              size={24}
              iconStyle={{ color: tintColor }}
            />
          ) 
    };

    handleRegister() {
        console.log(JSON.stringify(this.state));
        if (this.state.remember)
            SecureStore.setItemAsync('userinfo', JSON.stringify({username: this.state.username, password: this.state.password}))
                .catch((error) => console.log('Could not save user info', error));
    }

    render() {
        return(
            <ScrollView>
            <View style={styles.container2}>
                <View style={styles.imageContainer}>
                    <Image 
                        source={{uri: this.state.imageUrl}} 
                        loadingIndicatorSource={require('./images/logo.png')}
                        style={styles.image} 
                        />
                        <View  style={styles.imageButton} >
                        <Button
                         color="#512DA8"
                        title="Camera"
                        buttonStyle={{backgroundColor: "#512DA8"}}
                        onPress={this.getImageFromCamera}
                        />
                        </View>
                        <View  style={styles.imageButton} >
                        <Button
                         color="#512DA8"
                        title="Gallery"
                        buttonStyle={{backgroundColor: "#512DA8"}}
                        onPress={this.getImageFromGallery}
                        />
                        </View>
                </View>
                <Input
                    placeholder=" Username"
                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}
                    containerStyle={styles.formInput}
                    />
                <Input
                    placeholder=" Password"
                    leftIcon={{ type: 'font-awesome', name: 'key' }}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    containerStyle={styles.formInput}
                    />
                <Input
                    placeholder=" First Name"
                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                    onChangeText={(lastname) => this.setState({firstname})}
                    value={this.state.firstname}
                    containerStyle={styles.formInput}
                    />
                <Input
                    placeholder=" Last Name"
                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                    onChangeText={(lastname) => this.setState({lastname})}
                    value={this.state.lastname}
                    containerStyle={styles.formInput}
                    />
                <Input
                    placeholder=" Email"
                    leftIcon={{ type: 'font-awesome', name: 'envelope-o' }}
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                    containerStyle={styles.formInput}
                    />
                <CheckBox title="Remember Me"
                    center
                    checked={this.state.remember}
                    onPress={() => this.setState({remember: !this.state.remember})}
                    containerStyle={styles.formCheckbox}
                    />
                <View style={styles.formButton}>
                    <Button
                        onPress={() => this.handleRegister()}
                        title="Register"
                        color="#512DA8"
                        icon={
                            <Icon
                                name='user-plus'
                                type='font-awesome'            
                                size={24}
                                color= 'white'
                            />
                        }
                       
                            buttonStyle={{backgroundColor: "#512DA8"}}
                      
                        />
                </View>
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        margin: 0,
        marginRight:40,
        marginTop:80
    },
    container2: {
        justifyContent: 'center',
        margin: 0,
        marginRight:40,
        marginTop:10
    },
    imageContainer: {
        
        flexDirection: 'row',
      
        marginBottom:0,
        marginHorizontal:20,
        height:60,
        alignItems:'center',
        justifyContent:'space-around'
    },
    image: {
      margin: 10,
      width: 50,
      height:50
     
    },
    imageButton:{
        margin: 10,
        width: 80,
       alignSelf:'center'
    },
    formInput: {
        margin: 10
    },
    formCheckbox: {
        marginLeft:80,
        marginRight:40,
        backgroundColor: null
    },
    formButton: {
   
        marginLeft:80,
        marginRight:40,
        marginTop:30
    }
});
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="LoginTab"
      tabBarOptions={{
        activeBackgroundColor: '#9575CD',
        inactiveBackgroundColor: '#D1C4E9',
        activeTintColor: '#ffffff',
        inactiveTintColor: 'gray'
      }}
    >
      <Tab.Screen
        name="Login"
        component={LoginTab}
        options={{
            tabBarLabel: 'Login',
            tabBarIcon: ({ color }) => (
                <Icon
                  name='sign-in'
                  type='font-awesome'            
                  size={24}
                  iconStyle={{ color: color }}
                />
              ) 
          }}
       
      />
      <Tab.Screen
        name="Register"
        component={RegisterTab}
        options={{
            tabBarLabel: 'Register',
            tabBarIcon: ({ color, focused }) => (
                <Icon
                  name='user-plus'
                  type='font-awesome'            
                  size={24}
                  iconStyle={{ color:color }}
                />
              )
          }}
       
      />
      
    
    </Tab.Navigator>
  );
}


export default function LoginPage() {
    return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    );
  }

