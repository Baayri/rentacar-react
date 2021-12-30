import axios from "axios";

export default class UserService {
    login(email, password) {
        return axios.get(`http://localhost:8080/api/users/login?email=${email}&password=${password}`)
    }

    getById(id) {
        return axios.get(`http://localhost:8080/api/users/getById?id=${id}`)
    }
}