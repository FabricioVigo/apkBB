import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import ButtonLink from '../components/ButtonLink';


export default function Register() {
  const navigation = useNavigation();

  useEffect(()=>{
    navigation.setOptions({
        headerTitle: 'Registrar',
        headerStyle:{
          backgroundColor: "#066EA2"
        },
        headerTitleStyle:{
          color:"#ffffff"
        }
    })
})


  return(

  
  <View style={{
    marginTop:160
  }}>
  
  <ButtonLink 
    style = {{
      backgroundColor: "#23AD4D",
        padding: 10,
        borderRadius: 5,
        margin:10,
    }}
    text= "Crear cliente"
    onPress={() => navigation.navigate('AddClient')}
     
    />
    
    <ButtonLink 
    style = {{
      backgroundColor: "#23799E",
        padding: 10,
        borderRadius: 5,
        margin:10
    }}
    text= "Crear nuevo Producto"
    onPress={() => navigation.navigate('AddProduct')}
    />

<ButtonLink 
style = {{
  backgroundColor: "#DF620C",
        padding: 10,
        borderRadius: 5,
        margin:10
}}
    text= "Nuevo Pedido"
    onPress={() => navigation.navigate('AddClient')}
    />
    <TouchableOpacity onPress={()=> navigation.navigate('Pedidos')}></TouchableOpacity>
  </View>

  );
}




