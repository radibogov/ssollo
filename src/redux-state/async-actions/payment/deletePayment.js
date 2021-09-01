import { FETCH_URL } from "../../../configs/urls"


export const deletePayment = (data) => {


    return dispatch => {
        fetch(`${FETCH_URL}/payment/`, {
            method: 'DELETE',
        })
    }
}