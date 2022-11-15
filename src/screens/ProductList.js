import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView} from 'react-native';
import firebase from 'firebase/firestore';
import { ListItem } from 'react-native-elements'


const ProductList = () => {

  const [ products, setProducts ] = useState([])

  useEffect(()=>{
     firebase.db.collection("productos").onSnapshot(querySnapshot =>{
      const products = [];
      querySnapshot.docs.forEach(doc => {
        const { name, direccion } = doc.data()
        products.push({
          id: doc.id,
          name,
          direccion
        })
      });
      setProducts(products)
    })
  },[])

    return (
    <ScrollView>

      {
        products.map(product =>{
          return(
            <ListItem
              key={product.id}
              >
              <ListItem.Chevron />
              <ListItem.Title>{ product.name }</ListItem.Title>
              <ListItem.Content></ListItem.Content>
              </ListItem>
          );
        })
      }
    </ScrollView>
    );
}

export default ProductList;