/* import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'
import HomeScreen from '../screens/HomeScreen';
import New from '../screens/New';
import Clientes from '../screens/Clientes';
import Productos from '../screens/Productos';
import Pedidos from '../screens/Pedidos';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
    return (
    <Tab.Navigator
        screenOptions = {({ route }) =>({
            tabBarIcon:({ focused, color, size })=>{
                let iconName = '';
                switch (route.name){
                    case 'Home':
                iconName = 'home';
                break;
                case 'New':
                    iconName = 'plus';
                    break;
                    case 'Clientes':
                    iconName = 'users';
                    break;
                    case 'Productos':
                    iconName ='shopping-cart';
                    break;
                    case 'Pedidos':
                    iconName = 'book';
                }
                return <Icon name={iconName} size={size} color={color} />
            }

        })}
        >
        <Tab.Screen name="Home" component= { HomeScreen } /> 
        <Tab.Screen name= 'Clientes' component= { Clientes } />
        <Tab.Screen name= 'New' component= { New } />
        <Tab.Screen name= 'Productos' component= { Productos } />
        <Tab.Screen name= 'Pedidos' component= { Pedidos } />

        </Tab.Navigator>
        
    );
} */