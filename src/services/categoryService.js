import axios from "axios";


export default class CategoryService{

    async getCategories(){
        return await axios.get("http://localhost:8081/api/categories/getAll")
    }
}