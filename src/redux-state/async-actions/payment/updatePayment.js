import { FETCH_URL } from "../../../configs/urls"


export const updatePayment = (data) => {


    return dispatch => {
        fetch(`${FETCH_URL}/payment/`, {
            method: 'PATCH',
            body: data
        })
    }
}