import axios from "axios"

const http = axios.create({
  baseURL: "http://localhost:5000/"
})


const getPhones = () => http.get('/')


export default getPhones