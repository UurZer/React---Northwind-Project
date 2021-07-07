import axios from "axios";

let baseUrl = "http://localhost:8081/api/";


export default class ProductService{

    async  getCategories(){
        return await axios.get(baseUrl +"categories/getAll").then(response => () =>{
            console.log(response.data.data)
        })
    }
}