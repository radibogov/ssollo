import { FETCH_URL } from "../../../configs/urls"
import { setServices } from "../../reducers/listsReducer"



export const fetchServices = () => {

    return dispatch => {
        fetch(`${FETCH_URL}/services/`, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(response => {
            dispatch(setServices(response))
        })
    }
}