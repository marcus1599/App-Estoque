import axios from "axios";

const PRODUTOS_BASE_REST_API_URL = "http://192.168.0.121:8080/produtos"

class ProdutosService{


    deleteProduto(produtoId){
        return axios.delete(PRODUTOS_BASE_REST_API_URL+'/'+produtoId)
    }
    updateProduto(produtoId,produto){
        return axios.put(PRODUTOS_BASE_REST_API_URL+'/'+produtoId,produto)
    }
}


export default new ProdutosService();