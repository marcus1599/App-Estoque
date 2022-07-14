import axios from "axios";

const FORNECEDOR_BASE_REST_API_URL = "http://192.168.0.121:8080/fornecedores"

class FornecedorService{


    deleteFornecedor(fornecedorId){
        return axios.delete(FORNECEDOR_BASE_REST_API_URL+'/'+fornecedorId)
    }
    updateFornecedor(fornecedorId,fornecedor){
        return axios.put(FORNECEDOR_BASE_REST_API_URL+'/'+fornecedorId,fornecedor)
    }
}


export default new FornecedorService();