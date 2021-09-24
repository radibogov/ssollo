import { FETCH_URL } from "../../../configs/urls"


export const createTerritory = (data) => {
    return dispatch => {
        fetch(`${FETCH_URL}/territory`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
    }
}