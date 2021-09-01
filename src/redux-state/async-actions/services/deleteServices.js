import { FETCH_URL } from "../../../configs/urls"
import { setServices, setUsers } from "../../reducers/listsReducer"



export const deleteServices = (id) => {

    return dispatch => {
        fetch(`${FETCH_URL}/services/${id}`, {
            method: 'DELETE'
        })
    }
}