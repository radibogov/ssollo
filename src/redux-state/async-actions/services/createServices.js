import { FETCH_URL } from "../../../configs/urls"




export const createServices = (data) => {

    return dispatch => {
        fetch(`${FETCH_URL}/services/`, {
            method: 'GET',
            body: JSON.stringify(data)
        })
    }
}