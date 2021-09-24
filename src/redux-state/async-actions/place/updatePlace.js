import { FETCH_URL } from "../../../configs/urls"


export const updatePlace = (id, data) => {

    return dispatch => {
        fetch(`${FETCH_URL}/place/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        })
    }
}