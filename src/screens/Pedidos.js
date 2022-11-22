import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card, Icon } from 'react-native-elements';


const Pedidos = () => {

  const navigation = useNavigation();


  useEffect(()=>{
    navigation.setOptions({
        headerTitle: 'Pedidos',
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
      
      <Card>
      <TouchableOpacity onPress={()=> navigation.navigate('AddProduct')}>
        <Text>Claudia Marisa Aneas</Text>
        <Text>Fecha: 22/11/2022</Text>
        </TouchableOpacity>

        <View style={{flexDirection:'row',justifyContent:'center'}}>
        <Icon style={styles.iconCard} name="edit" />
        <Icon style={styles.iconCard} name="print" />
        <Icon style={styles.iconCard} name="book" />
        </View>
      </Card>
      
      <Card>
      <TouchableOpacity onPress={()=> navigation.navigate('AddProduct')}>
        <Text>Dia %</Text>
        <Text>Fecha: 22/11/2022</Text>
        </TouchableOpacity>

        <View style={{flexDirection:'row',justifyContent:'center'}}>
        <Icon style={styles.iconCard} name="edit" />
        <Icon style={styles.iconCard} name="print" />
        <Icon style={styles.iconCard} name="book" />
        </View>
      </Card>

      <Card>
      <TouchableOpacity onPress={()=> navigation.navigate('AddProduct')}>
        <Text>Las marys</Text>
        <Text>Fecha: 26/12/2022</Text>
        </TouchableOpacity>

        <View style={{flexDirection:'row',justifyContent:'center'}}>
        <Icon style={styles.iconCard} name="edit" />
        <Icon style={styles.iconCard} name="print" />
        <Icon style={styles.iconCard} name="book" />
        </View>
      </Card>

      <Card>
      <TouchableOpacity onPress={()=> navigation.navigate('AddProduct')}>
        <Text>Supermercado Abbott</Text>
        <Text>Fecha: 15/01/2023</Text>
        </TouchableOpacity>

        <View style={{flexDirection:'row',justifyContent:'center'}}>
        <Icon style={styles.iconCard} name="edit" />
        <Icon style={styles.iconCard} name="print" />
        <Icon style={styles.iconCard} name="book" />
        </View>
      </Card>

      <Card>
      <TouchableOpacity onPress={()=> navigation.navigate('AddProduct')}>
        <Text>Claudia Marisa Aneas</Text>
        <Text>Fecha: 06/02/2023</Text>
        </TouchableOpacity>

        <View style={{flexDirection:'row',justifyContent:'center'}}>
        <Icon style={styles.iconCard} name="edit" />
        <Icon style={styles.iconCard} name="print" />
        <Icon style={styles.iconCard} name="book" />
        </View>
      </Card>

      <Card>
      <TouchableOpacity onPress={()=> navigation.navigate('AddProduct')}>
        <Text>Las marys</Text>
        <Text>Fecha: 22/02/2023</Text>
        </TouchableOpacity>

        <View style={{flexDirection:'row',justifyContent:'center'}}>
        <Icon style={styles.iconCard} name="edit" />
        <Icon style={styles.iconCard} name="print" />
        <Icon style={styles.iconCard} name="book" />
        </View>
      </Card>

      <Card>
      <TouchableOpacity onPress={()=> navigation.navigate('AddProduct')}>
        <Text>Dia %</Text>
        <Text>Fecha: 01/04/2023</Text>
        </TouchableOpacity>

        <View style={{flexDirection:'row',justifyContent:'center'}}>
        <Icon style={styles.iconCard} name="edit" />
        <Icon style={styles.iconCard} name="print" />
        <Icon style={styles.iconCard} name="book" />
        </View>
      </Card>
    </View>
    </ScrollView>
    );
}

export default Pedidos;


const styles = StyleSheet.create({
  iconCard :{
    marginLeft:40,
     marginRight:40,
      marginTop:20
  }
})