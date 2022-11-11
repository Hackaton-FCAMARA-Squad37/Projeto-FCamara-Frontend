import axios from "axios";

export const Api = axios.create({
    baseURL:'https://orange-evolution-squad37.herokuapp.com'
})