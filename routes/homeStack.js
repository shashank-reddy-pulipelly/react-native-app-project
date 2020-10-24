import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails'
const screens={
    Home:{
        screen:Home,
        navigationOptions:{
            title:'Home',
           
           // headerStyle:{backgroundColor:'coral'}
        }
    },
    ReviewDetails:{
        screen:ReviewDetails,
        navigationOptions:{
            title:'Review Details',
           // headerStyle:{backgroundColor:'coral'}
        }
    }
}

const homeStack =createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'white',
        headerStyle:{backgroundColor:'coral'}
    }
});


export default createAppContainer(homeStack);