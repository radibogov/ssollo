import { FETCH_URL } from "../../../configs/urls"
import {setActivePayment} from "../../reducers/currentRowReducer";


export const getOnePayment = (id) => {

    return dispatch => {
        fetch(`${FETCH_URL}/payment/${id}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(response => {
                console.log(response,'sss')
                dispatch(setActivePayment(response))
            })
    }
}