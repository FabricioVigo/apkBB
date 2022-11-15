import React, { useState} from 'react';
import { View, Button, TextInput, ScrollView, StyleSheet} from 'react-native';
import { db } from '../config/fb';
import { collection, addDoc } from 'firebase/firestore';

const CreateUsers = () => {

const [ state, setState] = useState ({
  name: '',
  direccion: '',
});
const handleChangeText = (name, value) => {
  setState({ ...state, [name]: value})
}

  const AddNewUser = async() => {
  if( state.name === "" || state.direccion === ""){
    alert("Llene todos los campos")
  }else{
       await addDoc(collection(db,'clientes'),state)
      }
}  


  return(
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Nombre del cliente" 
        onChangeText={(value) => handleChangeText('name', value)}/>
      </View>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Direccion del cliente" 
        onChangeText={(value) => handleChangeText('direccion', value)}/>
      </View>
      <View>
        <Button title="Guardar Cliente" onPress={()=> AddNewUser()} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:35,
  },
  inputGroup: {
    flex: 1,
    padding: 15,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  }
});



const Clientes = () => {
    return (
    <CreateUsers />
    );
}

export default Clientes;