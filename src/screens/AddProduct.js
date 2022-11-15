import React, { useState} from 'react';
import { View, Button, TextInput, ScrollView, StyleSheet} from 'react-native';
import { db } from '../config/fb';
import { collection, addDoc } from 'firebase/firestore';

const CreateProduct = () => {

const [ state, setState] = useState ({
  name: '',
  email: '',
  direccion: '',
});
const handleChangeText = (name, value) => {
  setState({ ...state, [name]: value})
}

  const AddNewProduct = async() => {
  if( state.name === "" || state.email === "" || state.direccion === ""){
    alert("Llene todos los campos")
  }else{
       await addDoc(collection(db,'productos'),state)
      }
}  


  return(
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Nombre del producto" 
        onChangeText={(value) => handleChangeText('name', value)}/>
      </View>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Precio" 
        onChangeText={(value) => handleChangeText('precio', value)}/>
      </View>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Unidad de medida" 
        onChangeText={(value) => handleChangeText('litros', value)}/>
      </View>
      <View>
        <Button title="Guardar Producto" onPress={()=> AddNewProduct()} />
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



const Products = () => {
    return (
    <CreateProduct />
    );
}

export default Products;