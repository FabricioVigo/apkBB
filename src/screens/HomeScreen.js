import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-elements';
import Plus from '../components/PlusButton'

export default function Home (){
  const navigation = useNavigation();

  useEffect(()=>{
    navigation.setOptions({
        headerTitle: 'Inicio',
        headerStyle:{
          backgroundColor: "#066EA2"
        },
        headerTitleStyle:{
          color:"#ffffff"
        }
    })
})

  return (
    <>
    <TouchableOpacity onPress={()=> navigation.navigate('Pedidos')}>
    <View>
      <Card>
        <Card.Title>Historial de Pedidos</Card.Title>
      
      <Card.Divider />
          <Card.Image style={{padding:0}}
           
            source={{
              uri:
                'https://e-ful.com/wp-content/uploads/2020/02/picking-y-preparacion-1024x733.jpg',
            }}
          />
          </Card>
    </View>
    </TouchableOpacity>

    <View style={{alignItems:"flex-end", paddingTop:320, paddingRight:8}}>
    <Plus
    text = "+"
    onPress={()=> navigation.navigate('Register')}
    />
    </View>

    
    </>
  );

          }