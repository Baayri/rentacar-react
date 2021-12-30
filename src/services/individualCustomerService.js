import axios from "axios";

export default class IndividualCustomerService {
    add(values) {
        return axios.post('http://localhost:8080/api/individualCustomers/add', values)
    }

    getAll() {
        return axios.get('http://localhost:8080/api/individualCustomers/getAll')
    }
}