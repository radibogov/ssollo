import { FETCH_URL } from "../../../configs/urls"
import {setCurrentActivePayment} from "../../reducers/currentRowReducer";


export const getOnePayment = (id) => {

    return dispatch => {
        fetch(`${FETCH_URL}/payment/${id}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(response => {
                dispatch(setCurrentActivePayment(response))
            })
    }
}