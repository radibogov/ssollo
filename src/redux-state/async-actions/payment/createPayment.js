import { FETCH_URL } from "../../../configs/urls"


export const createPayment = (data) => {


    return dispatch => {
        fetch(`${FETCH_URL}/payment/`, {
            method: 'POST',
            body: data
        })
    }
}