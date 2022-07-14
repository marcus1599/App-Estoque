
import {  View,TouchableOpacity,Text,Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import addIcon from '../../assets/Icons/addIcon.png';
import edit from '../../assets/Icons/edit.png';
import delet from '../../assets/Icons/lixeiraIcon.png';
import { useNavigation } from "@react-navigation/native";
import { Surface } from '@react-native-material/core';
import ProdutosService from '../../services/ProdutosService';



export  function Produtos() {


   const [produtos,setProdutos]= useState([])
   const paperStyle = {padding:'5px 5px',width:"100%" , margin:"20px auto",backgroundColor:'#3DEF43'}
   const inputtyle = {backgroundColor:'#FFFF',borderRadius:7,marginBottom:8}


   useEffect(()=>{
        getAllProdutos();
   },[])

   const getAllProdutos = ()=>{
    fetch("http://192.168.0.121:8080/produtos").then(res=>res.json())
    .then((result)=>{
      setProdutos(result);
    }
    ).catch(error=>{
     console.log("ocorreu um erro:",error)
   })
   }

   const handleClickDelete=(produtosId)=>{
        ProdutosService.deleteProduto(produtosId).then((response)=>{
            getAllProdutos();
        }).catch(error=>{
      console.log("ocorreu um erro:",error)
    })
  }
 
  const navigation = useNavigation();
   return (
    <View style={styles.container}>

      <View style={{alignSelf:"flex-end"}}>
                       <TouchableOpacity
                       style={styles.botoes}
                       onPress = {() => navigation.navigate('Cadastro de Produtos')}
                        >
                       <View style={styles.imgWraper}>
                            < Image source={addIcon} style={styles.img}></Image>
                        </View>
                       </TouchableOpacity>
          </View>
      <Surface elevation={6} category="medium" style={{backgroundColor:'#3DEF43',width: 460, padding:10}}>
      {produtos.map(produto=>(
           <View key={produto.id}>
             
             <Surface elevation={6} category="medium" style={{marginBottom:8 ,flexDirection:'row',justifyContent:'space-between'}}>
              <View style={{flexDirection:'column'}}>
                  <Text style={{fontWeight:'bold',fontSize:20}}>Nome: {produto.nome}</Text>
                  <Text style={{fontWeight:'bold',fontSize:20}}>Preço: {produto.preco}</Text> 
                  <Text style={{fontWeight:'bold',fontSize:20}}>Quantidade: {produto.fornecedor}</Text>
              </View>
              

              <View style={{flexDirection:'row',alignSelf:'auto',marginEnd:8,marginTop:35}}>
              <TouchableOpacity
                       style={{width:30,height:30, marginEnd:30}}
                       onPress = {() => navigation.navigate('Editar Produto',{id: produto.id})}
                        >
                       <View style={{width:10,height:10,justifyContent:'center'}}>
                            < Image source={edit} style={{width:30,height:30}}></Image>
                        </View>
              </TouchableOpacity>

              <TouchableOpacity
                       style={{width:30,height:30}}
                       onPress = {() => handleClickDelete(produto.id)}
                        >
                       <View style={{width:10,height:10,justifyContent:'center'}}>
                            < Image source={delet} style={{width:30,height:30}}></Image>
                        </View>
              </TouchableOpacity>
              </View>
              
             </Surface>
              
              </View> 
          ))} 
      </Surface>
           
        
            
    </View>
   
  )
}







