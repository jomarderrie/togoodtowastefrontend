import axios from "axios";
import {baseURL} from "../../helpers/baseUrl";

// reformat for stores
export const storesPaginated = async (page,size, searchedLocation) => {
    return await axios.get(`${baseURL}/stores`, {page, size, searchedLocation:searchedLocation})
}
