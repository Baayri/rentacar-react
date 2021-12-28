import axios from "axios";

export default class RentalService {
    add(values) {
        return axios.post("http://localhost:8080/api/rentals/add", values)
    }
}