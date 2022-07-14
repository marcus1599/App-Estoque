
import {  View,TouchableOpacity,Text, StatusBar } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { InputModel } from '../../assets/util/InputModel';




export  function Venda({}) {

  const navigation = useNavigation();




  return (
    <View style={styles.contMax}>
    
    <View style={styles.container}>
      <InputModel name={"Nome : "}></InputModel>
      <InputModel name={"Quantidade : "}></InputModel>
      
      <TouchableOpacity
              activeOpacity={0.7}
              style={styles.botoes}
              onPress = {() => navigation.navigate('Home')}
            >
                  <Text style={styles.texto}>Confirmar</Text>
            </TouchableOpacity>
    </View>
    
    </View>
   
  )
}







