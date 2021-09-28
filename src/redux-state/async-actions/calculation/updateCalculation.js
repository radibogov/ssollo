import { FETCH_URL } from "../../../configs/urls"


export const updateCalculation = (id,data) => {

    return dispatch => {
        fetch(`${FETCH_URL}/calculation/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        })
    }
}