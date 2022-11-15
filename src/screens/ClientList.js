import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView} from 'react-native';
import firebase from 'firebase/firestore';
import { ListItem } from 'react-native-elements'


const ClientList = () => {

  const [ clients, setClients ] = useState([])

  useEffect(()=>{
     firebase.db.collection("clientes").onSnapshot(querySnapshot =>{
      const clients = [];
      querySnapshot.docs.forEach(doc => {
        const { name, direccion } = doc.data()
        clients.push({
          id: doc.id,
          name,
          direccion
        })
      });
      setClients(clients)
    })
  },[])

    return (
    <ScrollView>

      {
        clients.map(client =>{
          return(
            <ListItem
              key={client.id}
              >
              <ListItem.Chevron />
              <ListItem.Title>{ client.name }</ListItem.Title>
              <ListItem.Content></ListItem.Content>
              </ListItem>
          );
        })
      }
    </ScrollView>
    );
}

export default ClientList;