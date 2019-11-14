import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { createStackNavigator } from 'react-navigation-stack';
 import HomeScreen from '../containers/HomeScreen'
import Login from "../containers/Login";
        const appStackScree = createStackNavigator({
           
            
            Login:{
                screen: Login,
                navigationOptions: {
                    header:null
                }
            },
            
        })
        const AppStack = createDrawerNavigator
            (
                {
                    appStackScree
                   
                }
            );


        const authScreens = createSwitchNavigator(
            {
                
                AppStack,
                 HomeScreen
                

            },
            {
                initialRouteName: 'AppStack',
            }
        );
        export default  createAppContainer(authScreens);
