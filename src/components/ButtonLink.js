import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const ButtonLink = ({ text, onPress})=>{

    return(

    <TouchableOpacity
        style={styles.buttonLink}
        onPress = { onPress }
        >
        <Text style={styles.textButton}>{ text }</Text>
    </TouchableOpacity>

    );
}


const styles = StyleSheet.create({
    buttonLink: {
        backgroundColor: "#7201d4",
        padding: 10,
        borderRadius: 5,
        margin:10
    },
    textButton:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        padding:5,

    }
})

export default ButtonLink;












