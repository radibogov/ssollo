import { FETCH_URL } from "../../../configs/urls"
import {setCurrentActivePayment} from "../../reducers/currentRowReducer";
import {setError} from "../../reducers/errorReducer";


export const getOnePayment = (id) => {

    return dispatch => {
        fetch(`${FETCH_URL}/payment/${id}`, {
            method: 'GET'
        }).then(response => {
                dispatch(setCurrentActivePayment(response))
            })
    }
}