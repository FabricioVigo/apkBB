import React , { useEffect, useState }  from 'react';
import { View, Text ,StyleSheet, ScrollView} from 'react-native';
/* import { db } from '../config/fb'
import { getDoc, collection } from 'firebase/firestore'; */
import { ListItem, Icon } from 'react-native-elements';
import clients from './clients.json';
import { useNavigation } from '@react-navigation/native'


const ClientList = () => {

  const navigation = useNavigation();

  
  useEffect(()=>{
    navigation.setOptions({
        headerTitle: 'Lista de Clientes',
        headerStyle:{
          backgroundColor: "#066EA2"
        },
        headerTitleStyle:{
          color:"#ffffff"
        }
    })
})

  /* const [ clients, setClients ] = useState([])

  const loadClient = async() =>{
    try{
      const docs = await getDoc(collection(db, 'clientes'))
      console.log(docs);
    const clients = [];
      docs.forEach(doc => {
        const { name, direccion } = doc.data()
        clients.push({
          id: doc.id,
          name,
          direccion
        })
      });
    setClients(clients)
    }catch(e){
      console.log(e);
    }

  }

  useEffect(()=>{
     loadClient();
    },[]) */
  

    return (
    <ScrollView>

      {
        clients.map(clients =>{
          return(
            
            <ListItem
              key={clients.id}
              >
                
              <ListItem.Chevron />
              <ListItem.Content>
              <ListItem.Title>{ clients.nombre }</ListItem.Title>
              <ListItem.Subtitle>{ clients.direccion }</ListItem.Subtitle>
              
              
              
              </ListItem.Content>
              <Icon name="edit" 
              onPress={()=> navigation.navigate('AddClient')}
              />
              </ListItem>
              
          );
        })
      }
    </ScrollView>
    );
}


const styles = StyleSheet.create({
  
})

  

export default ClientList;