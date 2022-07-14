
import {  View} from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';
import { Surface, Stack,TextInput,Button  } from "@react-native-material/core";
import { TimePicker } from '../../../assets/util/TimePicker';





export  function CadProduto({}) {

  const [nome,setNome]=useState('')
  const [validade,setValidade]=useState('')
  const [fornecedor,setQuantidade]=useState('')
  const [preco,setPreco]=useState('')
  const navigation = useNavigation();
  const handleClick=(e: { preventDefault: () => void; })=>{
    e.preventDefault()
    const produto ={nome,validade, fornecedor,preco}
    console.log(produto)
    fetch("http://192.168.0.121:8080/produtos",{
      method:"POST",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify(produto)

    }).catch(error=>{
      console.log("ocorreu um erro:",error)
    }).then(()=>{
      console.log("Produto Adicionado com sucesso!!")
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
      
            label="Validade"
            style={{marginTop:8,marginHorizontal:8,marginBottom:8}}
            variant="outlined"
            value={validade}
            onChangeText = {(e)=>setValidade(e)}
             >


        </TextInput>
        <TextInput
          
            label="Quantidade"
            style={{marginTop:8,marginHorizontal:8,marginBottom:8}}
            variant="outlined"
            
            value={fornecedor} onChangeText = {(e)=>setQuantidade(e)}
            >
              
        </TextInput>
        <TextInput
          
          label="Preco"
          style={{marginTop:8,marginHorizontal:8,marginBottom:8}}
          variant="outlined"
          
          value={preco} onChangeText = {(e)=>setPreco(e)}
          >
            
      </TextInput>

        <Button title="Cadastrar" style ={{alignSelf:"center",marginTop:56}}
          onPress={handleClick}
        />
      
        </Surface>

    </View>
        
   

 

  )
}







