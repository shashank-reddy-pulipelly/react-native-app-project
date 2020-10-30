import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator,DrawerItems} from 'react-navigation-drawer';
import {createAppContainer } from 'react-navigation';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Home from './HomeComponent';
import Favorites from './FavoriteComponent';

import React,{Component} from 'react';
import { StyleSheet, Text, View,ScrollView, SafeAreaView,Image} from 'react-native';
import { Icon } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons'; 
import { connect } from 'react-redux';
import { fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';
import Reservation from './ReservationComponent';
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  fetchDishes: () => dispatch(fetchDishes()),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
})


const screens={
    Menu:{
        screen:Menu,
        navigationOptions: ({ navigation }) => ({
            headerLeft: ()=>{
                return(
                <MaterialIcons name="menu" size={28} color="white"
                onPress={ () => navigation.toggleDrawer() } style={styles.icon} />)
            }       
        })      
    },
    Dishdetail:{
        screen:Dishdetail,    
    }
}

const MenuNavigator = createStackNavigator(screens,
    {
        initialRouteName: 'Menu',
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

    const HomeNavigator = createStackNavigator({
        Home: { screen: Home }
      }, {
        defaultNavigationOptions: ({ navigation }) => ({
          headerStyle: {
              backgroundColor: "#512DA8"
          },
          headerTitleStyle: {
              color: "#fff"            
          },
          headerTintColor: "#fff",
          headerLeft: ()=>{
            return(<MaterialIcons name="menu" size={28} color="white"
            onPress={ () => navigation.toggleDrawer() } style={styles.icon} />)
        }   
        })
    });
    const AboutNavigator = createStackNavigator({
        Home: { screen: About }
      }, {
        defaultNavigationOptions: ({ navigation }) => ({
          headerStyle: {
              backgroundColor: "#512DA8"
          },
          headerTitleStyle: {
              color: "#fff"            
          },
          headerTintColor: "#fff",
          headerLeft: ()=>{
              return(<MaterialIcons name="menu" size={28} color="white"
              onPress={ () => navigation.toggleDrawer() } style={styles.icon} />)
          }      
        })
    });
    const ContactNavigator = createStackNavigator({
        Contact: { screen: Contact }
      }, {
        defaultNavigationOptions: ({ navigation }) => ({
          headerStyle: {
              backgroundColor: "#512DA8"
          },
          headerTitleStyle: {
              color: "#fff"            
          },
          headerTintColor: "#fff" ,
          headerLeft: ()=>{
            return(<MaterialIcons name="menu" size={28} color="white"
            onPress={ () => navigation.toggleDrawer() } style={styles.icon} />)
          }
        })   
    });

    const ReservationNavigator = createStackNavigator({
      Reservation: { screen: Reservation }
    }, {
      defaultNavigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTitleStyle: {
            color: "#fff"            
        },
        headerTintColor: "#fff",
        headerLeft: ()=>{
          return(<MaterialIcons name="menu" size={28} color="white"
          onPress={ () => navigation.toggleDrawer() } style={styles.icon} />)
        }    
      })
    })
    const FavoritesNavigator = createStackNavigator({
      Favorites: { screen: Favorites }
    }, {
      defaultNavigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTitleStyle: {
            color: "#fff"            
        },
        headerTintColor: "#fff",
        headerLeft: ()=>{
          return(<MaterialIcons name="menu" size={28} color="white"
          onPress={ () => navigation.toggleDrawer() } style={styles.icon} />)
        }  
      })
    })
    const CustomDrawerContentComponent = (props) => (
        <ScrollView>
          <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
            <View style={styles.drawerHeader}>
              <View style={{flex:1}}>
              <Image source={require('./images/logo.png')} style={styles.drawerImage} />
              </View>
              <View style={{flex: 2}}>
                <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
              </View>
            </View>
            <DrawerItems  {...props} />
          </SafeAreaView>
        </ScrollView>
      );
    const MainNavigator = createDrawerNavigator({
        Home: 
          { screen: HomeNavigator,
            navigationOptions: {
              title: 'Home',
              drawerLabel: 'Home',
             
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              name='home'
              type='font-awesome'            
              size={24}
              color={tintColor}
            />
          ),
            }
          },
          
        About : 
          { screen: AboutNavigator,
            navigationOptions: {
              title: 'About us',
              drawerLabel: 'About us',
              drawerIcon: ({ tintColor, focused }) => (
                <Icon
                  name='info-circle'
                  type='font-awesome'            
                  size={24}
                  color={tintColor}
                />
              ),
            }, 
          },
        Menu: 
          { screen: MenuNavigator,
            navigationOptions: {
              title: 'Menu',
              drawerLabel: 'Menu',
              drawerIcon: ({ tintColor, focused }) => (
                <Icon
                  name='list'
                  type='font-awesome'            
                  size={24}
                  color={tintColor}
                />
              ),
            }, 
          },
          Contact: 
            { screen: ContactNavigator,
              navigationOptions: {
                title: 'Contact Us',
                drawerLabel: 'Contact Us',
                drawerIcon: ({ tintColor, focused }) => (
                    <Icon
                      name='address-card'
                      type='font-awesome'            
                      size={22}
                      color={tintColor}
                    />
                  ),
              }, 
            },
            Favorites:
            { screen: FavoritesNavigator,
              navigationOptions: {
                title: 'My Favorites',
                drawerLabel: 'My Favorites',
                drawerIcon: ({ tintColor, focused }) => (
                  <Icon
                    name='heart'
                    type='font-awesome'            
                    size={24}
                    iconStyle={{ color: tintColor }}
                  />
                ),
              }
            },
            Reservation:
            { screen: ReservationNavigator,
              navigationOptions: {
                title: 'Reserve Table',
                drawerLabel: 'Reserve Table',
                drawerIcon: ({ tintColor, focused }) => (
                  <Icon
                    name='cutlery'
                    type='font-awesome'            
                    size={24}
                    iconStyle={{ color: tintColor }}
                  />
                ),
              }
            }
    }, {
        
      drawerBackgroundColor: '#D1C4E9',
      contentComponent: CustomDrawerContentComponent
    });

  

const Container= createAppContainer(MainNavigator);

 class Main extends Component {

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }
  render(){
   
    return (
      <Container />
 
      );
  }

}



const styles = StyleSheet.create({
    container: {
     flex:1
    },
    drawerHeader: {
      backgroundColor: '#512DA8',
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
     marginTop:24,
      flexDirection: 'row'
    },
    drawerHeaderText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold'
    },
    drawerImage: {
      margin: 10,
      width: 80,
      height: 60
    }, icon:{
        position:'absolute',
        left:16,
        bottom:10,
        
    }
  });
  
  export default connect(mapStateToProps,mapDispatchToProps)(Main);