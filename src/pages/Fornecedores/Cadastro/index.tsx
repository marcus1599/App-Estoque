
import {  View} from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';
import { Surface, Stack,TextInput,Button  } from "@react-native-material/core";





export  function CadFornecedor({}) {

  const [nome,setNome]=useState('')
  const [cnpj,setCnpj]=useState('')
  const [telefone,setTelefone]=useState('')
  const navigation = useNavigation();
  const handleClick=(e: { preventDefault: () => void; })=>{
    e.preventDefault()
    const fornecedor ={nome,cnpj,telefone}
    console.log(fornecedor)
    fetch("http://192.168.0.121:8080/fornecedores",{
      method:"POST",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify(fornecedor)

    }).catch(error=>{
      console.log("ocorreu um erro:",error)
    }).then(()=>{
      console.log("Fornecedor Adicionado com sucesso!!")
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
        <Button title="Cadastrar" style ={{alignSelf:"center",marginTop:56}}
          onPress={handleClick}
        />
      
        </Surface>

    </View>
        
   
     

    // <View style={styles.container}>
    //   <TextField label="Nome do fornecedor" 
    //     variant='outlined'
    //     fullWidth
    //     style={inputtyle}
    //     value = {nome} 
    //     onChange = {(e)=>setNome(e.target.value)}>   </TextField>
    //   <TextField label="CNJP" 
    //   id = "outlide-basic"
    //     variant='outlined'
    //     fullWidth
    //     style={inputtyle}
    //      value = {cnpj} onChange = {(e)=>setCnpj(e.target.value)}>   </TextField>
    //   <TextField label="Contato" 
    //     variant='outlined'
    //     fullWidth
    //     style={inputtyle}
    //     value = {telefone} onChange = {(e)=>setTelefone(e.target.value)}>   </TextField>
    

    //         <Button variant='contained' color = 'secondary' onClick={handleClick}> Cadastrar</Button>
    // </View>

    
 

  )
}







