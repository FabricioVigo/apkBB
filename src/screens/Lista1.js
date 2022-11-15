import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ScrollView, Button} from 'react-native';
import   fb from '../config/fb';
import { ListItem } from 'react-native-elements';



const Productos = () => {

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

}

    

export default Productos;