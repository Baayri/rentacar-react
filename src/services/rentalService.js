import axios from "axios";

export default class RentalService {
    add(values) {
        return axios.post("http://localhost:8080/api/rentals/add", values)
    }

    getByUserId(id) {
        return axios.get(`http://localhost:8080/api/rentals/getByUserId?id=${id}`)
    }
}