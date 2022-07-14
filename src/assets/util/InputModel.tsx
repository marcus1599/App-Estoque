
import {  View,TouchableOpacity,Text, StatusBar } from 'react-native';
import React from 'react';

import { useNavigation } from "@react-navigation/native";


interface name{
    name:String
}

export  function InputModel({name}:name) {


  return (
        <View style={styles.container}>
                <Text style={styles.texto}>{name}</Text>
                <TextInput style={styles.texto} ></TextInput>
        </View>
    

  )
}



import { StyleSheet } from "react-native";
import { TextInput } from 'react-native-gesture-handler';

export const styles = StyleSheet.create({
    container:{
        marginTop:10,
        alignItems:"flex-start",
        justifyContent:'center',
        backgroundColor:'#FFFF',
        flexDirection:"row",
        borderRadius:8,
        marginBottom:20,
        width:400
        
    },
    texto:{
        fontSize:20,
        color:'#000',
        marginEnd:8,
        
    }


});




