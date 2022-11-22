import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';

import "react-native-gesture-handler"

import HomeScreen from '../screens/HomeScreen';
import ClientList from '../screens/ClientList';
import Lista1 from '../screens/Lista1';
import Productos2 from '../screens/Lista2';
import Pedidos from '../screens/Pedidos';
import AddProduct from '../screens/AddProduct';
import MenuButtonItem from '../components/MenuButtonItem';


const Drawer = createDrawerNavigator();



export default function DrawerMenu() {
  return (
    
    
        
        <Drawer.Navigator initialRouteName='Homescreen'
        drawerContent = {(props)=> <MenuItems {...props} />}
        >
            <Drawer.Screen name='Home' component={HomeScreen} />
            <Drawer.Screen name='ClientList' component={ ClientList } />
            <Drawer.Screen name="Productos" component={Lista1} />
            <Drawer.Screen name="Pedidos" component={ Pedidos } />
            <Drawer.Screen name="Add" component={ AddProduct } />
            <Drawer.Screen name="Productos2" component={Productos2} />

           

        </Drawer.Navigator>
        
    
  );
}

const MenuItems = ({ navigation })=>{
    return(
        <DrawerContentScrollView
        style={ styles.container }>
            <Text style={ styles.title }>Mi menu</Text>
            <MenuButtonItem 
            icon="home"
            text="Home"
            onPress = {()=> navigation.navigate('Home')}
            />
            <MenuButtonItem 
            icon="users"
            text="Clientes"
            onPress = {()=> navigation.navigate('ClientList')}
            /><MenuButtonItem 
            icon="shopping-cart"
            text="Pedidos"
            onPress = {()=> navigation.navigate('Pedidos')}
            /><MenuButtonItem 
            icon="plus"
            text="Add"
            onPress = {()=> navigation.navigate('Add')}
            />
            <Text style ={ styles.products }> Productos </Text>
            <MenuButtonItem 
            icon="book"
            text="Lista 1"
            onPress = {()=> navigation.navigate('Productos')}
            />
             <MenuButtonItem 
            icon="book"
            text="Lista 2"
            onPress = {()=> navigation.navigate('Productos2')}
            />
        </DrawerContentScrollView>
    )}

    const styles= StyleSheet.create({
        container:{
            padding:15,
            backgroundColor: "#066EA2"
        },
         /* #7f00b8 */
        title:{
            fontSize:20,
            fontWeight:'bold',
            marginBottom: 20,
            color: "#fff"
        },
        products:{
            marginTop: 25,
            marginBottom:10,
            fontWeight:'bold',
            fontSize:18,
            color:"#fff"
        }
    })