import axios from "axios";
import {baseURL} from "../helpers/baseUrl";

// reformat for stores
export const storesPaginated = async (page,size) => {
    return await axios.get(`${baseURL}/stores`, {page, size})
}
