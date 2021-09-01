import { FETCH_URL } from "../../configs/urls"


export const deleteContract = (id) => {

    return dispatch => {
        fetch(`${FETCH_URL}/contract/${id}`, {
            method: 'DELETE'
        })
    }
}