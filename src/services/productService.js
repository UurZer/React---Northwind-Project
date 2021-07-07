import axios from "axios";

let baseUrl = "http://localhost:8081/api/";


export default class ProductService{

    getProducts(){
        return axios.get(baseUrl +"products/getall")
    }
    getByProductName(productName){
        return axios.get(`http://localhost:8081/api/products/getByProductName?productName=${productName}`)
    }
    saveProduct(product) {
        let products = axios.post(baseUrl + "products/add", product);
        return products;
    }
}