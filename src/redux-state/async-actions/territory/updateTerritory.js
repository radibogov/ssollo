import { FETCH_URL } from "../../../configs/urls"


export const updateTerritory = (id, data) => {

    return dispatch => {
        fetch(`${FETCH_URL}/territory/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        })
    }
}