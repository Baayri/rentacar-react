import axios from "axios";

export default class CarLocationService {
    getAll() {
        return axios.get("http://localhost:8080/api/carLocations/getAll")
    }
}