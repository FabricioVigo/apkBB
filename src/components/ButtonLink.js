import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const ButtonLink = ({ text, onPress, style})=>{

    return(

    <TouchableOpacity
        style = { style }
        onPress = { onPress }
        >
        <Text style={styles.textButton}>{ text }</Text>
    </TouchableOpacity>

    );
}


const styles = StyleSheet.create({
    textButton:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        padding:5,

    }
})

export default ButtonLink;












