import axios from "axios";

export default class BrandService {
    getAll() {
        return axios.get("http://localhost:8080/api/brands/getAll")
    }
}