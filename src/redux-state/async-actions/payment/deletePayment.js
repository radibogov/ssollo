import { FETCH_URL } from "../../../configs/urls"


export const deletePayment = (id) => {

    return dispatch => {
        fetch(`${FETCH_URL}/payment/${id}`, {
            method: 'DELETE',
        })
    }
}