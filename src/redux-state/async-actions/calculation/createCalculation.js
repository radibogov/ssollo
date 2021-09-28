import { FETCH_URL } from "../../../configs/urls"


export const createCalculation = (data) => {

    return dispatch => {
        fetch(`${FETCH_URL}/calculation/`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
    }
}