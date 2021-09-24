import { FETCH_URL } from "../../../configs/urls"


export const updatePayment = (data) => {

    return dispatch => {
        fetch(`${FETCH_URL}/payment/`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
            body: data
        })
    }
}