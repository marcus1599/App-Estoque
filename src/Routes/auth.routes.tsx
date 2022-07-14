import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "../pages/Home/Home";
import { Fornecedores } from "../pages/Fornecedores/Index";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CadFornecedor } from "../pages/Fornecedores/Cadastro";
import { Produtos } from "../pages/Produtos";
import { CadProduto } from "../pages/Produtos/Cadastro";
import { Venda } from "../pages/Venda";
import { EditProduto } from "../pages/Produtos/Editar";
import { EditFornecedor } from "../pages/Fornecedores/Editar";




const Stack = createNativeStackNavigator();

export function AuthRoutes(){
    return(

         <Stack.Navigator initialRouteName="Home">
               
            <Stack.Screen name="Home" component={Home} 
            options={
               {
                  headerStyle:{
                     backgroundColor:'#3DEF43'
                  }
               }
            }
            
            />
            <Stack.Screen name="Fornecedores" component={Fornecedores} 
            options={
               {
                  headerStyle:{
                     backgroundColor:'#3DEF43'
                  }
               }
            }
            />
             <Stack.Screen name="Cadastro de Fornecedor" component={CadFornecedor}
             options={
               {
                  headerStyle:{
                     backgroundColor:'#3DEF43'
                  }
               }
            }
             />
             <Stack.Screen name="Produtos" component={Produtos}
             options={
               {
                  headerStyle:{
                     backgroundColor:'#3DEF43'
                  }
               }
            }
             />
             <Stack.Screen name="Cadastro de Produtos" component={CadProduto}
             options={
               {
                  headerStyle:{
                     backgroundColor:'#3DEF43'
                  }
               }
            }
             />
             <Stack.Screen name="Confirmar Venda" component={Venda}
             options={
               {
                  headerStyle:{
                     backgroundColor:'#3DEF43'
                  }
               }
            }
             />
             <Stack.Screen name="Editar Produto" component={EditProduto}
             options={
               {
                  headerStyle:{
                     backgroundColor:'#3DEF43'
                  }
               }
            }
             />

<Stack.Screen name="Editar Fornecedor" component={EditFornecedor}
             options={
               {
                  headerStyle:{
                     backgroundColor:'#3DEF43'
                  }
               }
            }
             />
           
          </Stack.Navigator>


         

       
  
        );


}