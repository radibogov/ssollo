import { FETCH_URL } from "../../../configs/urls"


export const deleteServices = (id) => {

    return dispatch => {
        fetch(`${FETCH_URL}/services/${id}`, {
            method: 'DELETE'
        })
    }
}