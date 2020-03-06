import axios from "axios"

const http = axios.create({
  baseURL: process.env.PORT
})


const getPhones = () => http.get('/')


export default getPhones