
import {  View,TouchableOpacity,Text, StatusBar } from 'react-native';
import React from 'react';
import { styles } from './style';
import { useNavigation } from "@react-navigation/native";
import { Surface } from '@react-native-material/core';
//import { Item } from '../Produtos/item/item';



export  function Home({}) {

  const navigation = useNavigation();




  return (
    <View style={styles.container}>

    <StatusBar barStyle={"default"}></StatusBar>

      <Surface elevation={6} category="medium" style={{padding:30}}>
        
           <TouchableOpacity
              activeOpacity={0.7}
              style={styles.botoes}
              onPress = {() => navigation.navigate('Fornecedores')}
            >
                  <Text style={styles.texto}>Fornecedores</Text>
            </TouchableOpacity>


            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.botoes}
              onPress = {() => navigation.navigate('Produtos')}
            >
                  <Text style={styles.texto}>Produtos</Text>

            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.botoes}
              onPress = {() => navigation.navigate('Confirmar Venda')}
            >
              <Text style={styles.texto}>Venda</Text>
            </TouchableOpacity>

      
      </Surface>
            
    </View>
  )
}







