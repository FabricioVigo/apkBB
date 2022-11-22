import React, { useEffect, useState }  from 'react';
import { View, FlatList, Text ,StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import firebase from '../config/fb';
import { ListItem } from 'react-native-elements';



const ProductList = () => {

const navigation = useNavigation();

const [ clients, setClients ] = useState([]);

useEffect(()=>{


  (async()=>{

     await firebase.db.collection('clientes').onSnapshot((querySnapshot)=>{
      const clients = []
      querySnapshot.docs.forEach((doc => {
        const { name, direccion } = doc.data()
        clients.push({
          id: doc.id,
          name,
          direccion
        })
      }));
      setClients(clients);
     })
  })

},[]);

useEffect(() =>{
    navigation.setOptions({
      headerLargeTitle: true,
      headerTitle: "Lista 2",
      headerStyle:{
        backgroundColor: "#066EA2"
      },
      headerTitleStyle:{
        color:"#ffffff"
      }
    })
})


  return (
    <ScrollView>
      <Text>Lista do</Text>
      {
        clients.map(client=>{
          return(
            <ListItem
            key={client.id}
            >
              <ListItem.Chevron />
              <ListItem.Content>
                <ListItem.Title>{client.name}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          )
        })
      }
    </ScrollView>
    );
}


const styles = StyleSheet.create({
})

  

export default ProductList;