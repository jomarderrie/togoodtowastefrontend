import axios from "axios";
import {baseURL} from "../../helpers/baseUrl";

export const loginUser = async (email,password) => {
    console.log(`${baseURL}/auth/login`);
    return await axios.post(`${baseURL}/auth/login`, {email, password})
}

export const registerUser = async ( email, phone, password) => {
    return await axios.post(`${baseURL}/auth/register`, {email, phone, password})}

export const logout = () => {

}

export const token = () => {

}