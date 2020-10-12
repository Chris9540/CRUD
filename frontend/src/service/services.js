import axios from 'axios';
import {EMPLOYEE_URL} from "./URLS";

const employee = {
    list : function (page = 0, size = 5) {
        return axios.get(`${EMPLOYEE_URL}/paged-list`, {params:{page : Number(page) , size: Number(size)}});
    },
    count : function () {
        return axios.get(`${EMPLOYEE_URL}/count`);
    },
    add : function (employee) {
        return axios.post(`${EMPLOYEE_URL}/add`, employee);
    },
    delete : function (id) {
        return axios.delete(`${EMPLOYEE_URL}/delete`, {params:{id: id}});
    },
    get : function (id) {
        return axios.get(`${EMPLOYEE_URL}/get`,{params:{id:id}});
    },
    update : function (id, employee) {
        return axios.put(`${EMPLOYEE_URL}/update?id=${id}`, employee);
    },
}


export const apiServices = {
    employee : employee,
};