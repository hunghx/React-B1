import axios from "axios";


export const instance = axios.create(
    {baseURL:"http://localhost:9090/api/v4/"}
)