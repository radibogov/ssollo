import { FETCH_URL } from "../../../configs/urls"


export const updatePayment = (id, data) => {

    return dispatch => {
        fetch(`${FETCH_URL}/payment/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        })
    }
}