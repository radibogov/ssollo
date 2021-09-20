import { FETCH_URL } from "../../../configs/urls"


export const updateServices = (id, data) => {

    return dispatch => {
        fetch(`${FETCH_URL}/services/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        })
    }
}