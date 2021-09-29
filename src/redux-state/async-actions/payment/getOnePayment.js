import { FETCH_URL } from "../../../configs/urls"
import {setCurrentActivePayment} from "../../reducers/currentRowReducer";
import {setError} from "../../reducers/errorReducer";


export const getOnePayment = (id) => {

    return dispatch => {
        fetch(`${FETCH_URL}/payment/${id}`, {
            method: 'GET'
        }).then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw response.json();
                }
            })
            .then((json) => {
                dispatch(setCurrentActivePayment(json))
            })
            .catch((error) => {
                error.then((error) =>
                    dispatch(setError({open: true, error: error}))
                )
            })
    }
}