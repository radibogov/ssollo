import { FETCH_URL } from "../../../configs/urls"


export const createPlace = (data) => {
    return dispatch => {
        fetch(`${FETCH_URL}/place`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
    }
}