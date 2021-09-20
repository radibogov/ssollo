import { FETCH_URL } from "../../../configs/urls"


export const createServices = (data) => {

    return dispatch => {
        fetch(`${FETCH_URL}/services/`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
    }
}