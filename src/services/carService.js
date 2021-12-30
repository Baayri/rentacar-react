import axios from "axios";

export default class CarService {

    add(values) {
        return axios.post(`http://localhost:8080/api/cars/add`, values)
    }

    getAll() {
        return axios.get("http://localhost:8080/api/cars/getAll")
    }

    getAllDto() {
        return axios.get("http://localhost:8080/api/cars/getAllDto")
    }

    getDto(id) {
        return axios.get(`http://localhost:8080/api/cars/getDto?id=${id}`)
    }

    getById(id) {
        return axios.get(`http://localhost:8080/api/cars/getById?id=${id}`)
    }

    getByCarLocationId(id) {
        return axios.get(`http://localhost:8080/api/cars/getByCarLocationId?id=${id}`)
    }

    getLocationDto(id) {
        return axios.get(`http://localhost:8080/api/cars/getLocationDto?id=${id}`)
    }
}