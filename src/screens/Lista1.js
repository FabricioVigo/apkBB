import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet, TextInput} from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import products from './products.json'
import { useNavigation } from '@react-navigation/native'



const Lista1 = () => {

    const navigation = useNavigation();

    useEffect(()=>{
        navigation.setOptions({
            headerTitle: 'Lista 1',
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
            <View>
            <SearchBar placeholder='Buscar' />
            </View>

          {
            products.map(products =>{
              return(
                <ListItem
                  key={products.id}
                  >
                  <ListItem.Chevron />
                  <ListItem.Content>
                  <ListItem.Title>{ products.name }</ListItem.Title>
                  <ListItem.Subtitle>{ products.precio }</ListItem.Subtitle>
                  <ListItem.Subtitle>{ products.Um }</ListItem.Subtitle>

                  
                  
                  </ListItem.Content>
                  </ListItem>
              );
            })
          }
        </ScrollView>
        );
    }



    /* const [products, setProducts] = useState([]);

    useEffect(()=>{
        fb.db.collection('productos').onSnapshot
        const products = [];
        (querySnapshot => {
            querySnapshot.docs.forEach(doc => {
                const {nombre, precio} = doc.data
                products.push({
                    id: doc.id,
                    nombre: nombre,
                    precio: precio
                })
            });
        })
        setProducts(products)
    },[]);

    return (
        <ScrollView>
            {
                products.map(product =>{
                    return(
                        <ListItem
                        key={ product.id }>
                        <ListItem.Content>
                            <ListItem.Title>
                                {product.nombre}
                            </ListItem.Title>
                        </ListItem.Content>
                        
                        </ListItem>
                    );
                })
            }

        </ScrollView>

    ); */






     /* const [products, setProducts] = useState();

    useEffect(() => {
        const collectionRef = collection(db, 'productos');
        const q = query(collectionRef, orderBy('desc'));

        const unsuscribe = onSnapshot(q, querySnapshot =>{
            setProducts(
                querySnapshot.docs.map(doc => ({
                id: doc.id,
                nombre: doc.data().nombre,
                precio: doc.data().precio

            })

        )
            )})
            return unsuscribe;
    },[])

    return (

        <>
        <Text>{ unsuscribe }</Text>
        
        </> 
        ); */


    
 /* const [data, setData] = useState();
    
    async function loadData(){
        try{
            const productos = await firestore().collection('productos').get()
            setData(productos.docs)
        }catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        loadData()
    }, [])

    function renderItem({ item }){
        return(
            <View style={{flexDirection: 'row', margin:10}}>
                <Text>{ item.data().nombre }</Text>
                <Text>${ item.data().precio }</Text>

            </View>
        );
    }
    
    return(
        <View style= {{padding:10}}>
            <Text>Mis Productos</Text>
            <FlatList
            data={ data }
            renderItem = { renderItem }
            keyExtractor = { item => item.id}
            />
        </View>
    ); */



    

export default Lista1;