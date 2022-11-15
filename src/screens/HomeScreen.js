import { View, Text,} from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
import ButtonLink from '../components/ButtonLink';

export default function Home (){
  const navigation = useNavigation();

  return (
    <>
    <Text>This is the home screen</Text>
    <ButtonLink 
    text= "Crear cliente"
    onPress={() => navigation.navigate('AddClient')}
    />
    
    <ButtonLink 
    text= "Crear nuevo Producto"
    onPress={() => navigation.navigate('AddProduct')}
    />

<ButtonLink 
    text= "Nuevo Pedido"
    onPress={() => navigation.navigate('AddClient')}
    />
    </>
  )
}