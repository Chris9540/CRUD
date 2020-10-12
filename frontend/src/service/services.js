import axios from 'axios';
import {EMPLOYEE_URL} from "./URLS";

const employee = {
    list : function (page = 0, size = 5) {
        return axios.get(`${EMPLOYEE_URL}/paged-list`, {params:{page : Number(page) , size: Number(size)}})
    },
    count : function () {
        return axios.get(`${EMPLOYEE_URL}/count`)
    },
    add : function (firstName, lastName, email) {

    },
    delete : function (id) {

    },
    get : function (id) {

    },
    update : function (id, firstName, lastName, email) {

    },
}


export const apiServices = {
    employee : employee,
};