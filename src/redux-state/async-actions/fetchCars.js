import { FETCH_URL } from "../../configs/urls"
import { setCars } from "../reducers/listsReducer"



export const fetchCars = () => {

    return dispatch => {
        fetch(`${FETCH_URL}/listCars`, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(response => {
            dispatch(setCars(response))
        })
    }
}