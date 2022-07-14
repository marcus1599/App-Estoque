
import {  View,TouchableOpacity,Text, StatusBar } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { InputModel } from '../../../assets/util/InputModel';




export  function EditProduto({}) {

  const navigation = useNavigation();




  return (
    <View style={styles.contMax}>
    
    <View style={styles.container}>
      <InputModel name={"Nome : "}></InputModel>
      <InputModel name={"Preço : "}></InputModel>
      <InputModel name={"Validade : "}></InputModel>
      <InputModel name={"Fornecedor : "}></InputModel>
      <TouchableOpacity
              activeOpacity={0.7}
              style={styles.botoes}
              onPress = {() => navigation.navigate('Produtos')}
            >
                  <Text style={styles.texto}>Editar</Text>
            </TouchableOpacity>
    </View>
    
    </View>
   
  )
}







