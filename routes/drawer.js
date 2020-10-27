import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import homeStack from './homeStack';
import aboutStack from './aboutStack';

const RootDrawerNavigator=createDrawerNavigator({
    Home:{
        screen:homeStack
    },
    About:{
        screen:aboutStack
    }
})



export default createAppContainer(RootDrawerNavigator);