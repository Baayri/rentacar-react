import axios from "axios";

export default class CorporateCustomerService {
    add(values) {
        return axios.post('http://localhost:8080/api/corporateCustomers/add', values)
    }

    getAll() {
        return axios.get('http://localhost:8080/api/corporateCustomers/getAll')
    }
}