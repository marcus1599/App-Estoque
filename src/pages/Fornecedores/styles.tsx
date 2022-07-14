import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'flex-start',
        backgroundColor:'#ffff'
    },
    botoes:{
      
       padding:8,
       marginBottom:18,
       
       borderRadius:8,
       width:60,
       height:50,
       alignItems:'center',
       justifyContent:"flex-end",
       marginTop:25,
     //  marginLeft:356
        
    },
    view:{
      flex:1,
       alignItems:'flex-end'
      //  marginLeft:356
         
     },
    texto:{
        fontSize:24,
        color:'#000'
    },img:{
        width:50,
        height:50,
        
   },
   imgWraper:{
       alignItems:'center',
       justifyContent:'center',
       width:80,
       height:56
   }


});