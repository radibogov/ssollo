import { FETCH_URL } from "../../configs/urls"



export const updateContract = (id, data) => {

    return dispatch => {
        fetch(`${FETCH_URL}/contract/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(data)
        })
    }
}