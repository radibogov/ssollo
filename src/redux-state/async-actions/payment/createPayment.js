import { FETCH_URL } from "../../../configs/urls"


export const createPayment = (data) => {

    return dispatch => {
        fetch(`${FETCH_URL}/payment/`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
    }
}