import { FETCH_URL } from "../../../configs/urls"
import {setCurrentActivePayment} from "../../reducers/currentRowReducer";
import {setError} from "../../reducers/errorReducer";


export const getOnePayment = (id) => {

    return dispatch => {
        fetch(`${FETCH_URL}/payment/${id}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(response => {
                if (response.ok === false) {
                    throw(response)
                }
                dispatch(setCurrentActivePayment(response))
            })
            .catch(reason =>
                dispatch(setError({open: true, error: reason}))
            )
    }
}