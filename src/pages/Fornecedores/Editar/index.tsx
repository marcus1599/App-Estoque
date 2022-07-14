
import {  View} from 'react-native';
import React, { Component } from 'react';
import { styles } from './styles';
import { useNavigation ,NavigatorScreenParams, useRoute} from "@react-navigation/native";
import { useState } from 'react';

import { Surface, Stack,TextInput,Button  } from "@react-native-material/core";
import FornecedorService from '../../../services/FornecedorService';


interface DetailParams{
  id:String
}


export  function EditFornecedor() {

  const route = useRoute();
  const param = route.params as DetailParams
  const [nome,setNome]=useState('')
  const [cnpj,setCnpj]=useState('')
  const [telefone,setTelefone]=useState('')
  const navigation = useNavigation();
  const handleClick=(id: any)=>{

    const fornecedor ={nome,cnpj,telefone}
    console.log(fornecedor)
    console.log("id",id)
    FornecedorService.updateFornecedor(id,fornecedor).then((response)=>{
         
    }).catch(error=>{
      console.log("ocorreu um erro:",error)
    }).then(()=>{
      console.log(fornecedor)
      navigation.navigate('Home')
    })
  }

  const paperStyle = {padding:'50px 20px',width:600 , margin:"20px auto",backgroundColor:'#3DEF43'}
  const inputtyle = {backgroundColor:'#FFFF',borderRadius:7,marginBottom:8}
  return (

    <View style={styles.container}>
        <Surface elevation={6} category="medium" style={{backgroundColor:'#3DEF43', width: 460, height: 400 ,marginTop:10,marginBottom:10}}>
        <TextInput
        
              label="Nome"
              style={{marginTop:8,marginHorizontal:8,marginBottom:8}}
              variant="outlined"
              defaultValue={nome} onChangeText = {(e)=>setNome(e)}
              >
             
        </TextInput>
        <TextInput
      
            label="CNPJ"
            style={{marginTop:8,marginHorizontal:8,marginBottom:8}}
            variant="outlined"
            value={cnpj}
            onChangeText = {(e)=>setCnpj(e)}
             >


        </TextInput>
        <TextInput
          
            label="Telefone"
            style={{marginTop:8,marginHorizontal:8,marginBottom:8}}
            variant="outlined"
            
            value={telefone} onChangeText = {(e)=>setTelefone(e)}
            >
              
        </TextInput>
        <Button title="Salvar" style ={{alignSelf:"center",marginTop:56}}
          onPress={()=>handleClick(param.id)}
        />
      
        </Surface>

    </View>
        
    
 

  )
}







