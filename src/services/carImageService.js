import axios from "axios";

export default class CarImageService {

    getAll() {
        return axios.get(`http://localhost:8080/api/carImages/getAll`)
    }

    getByCarId(carId) {
        return axios.get(`http://localhost:8080/api/carImages/getByCarId?id=${carId}`)
    }

    add(id, file) {
        return axios.post(`http://localhost:8080/api/carImages/upload?carId=${id}`, file)
    }
}