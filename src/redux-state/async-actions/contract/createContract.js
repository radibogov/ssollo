import { FETCH_URL } from "../../../configs/urls"


export const createContract = (data) => {


    return dispatch => {
        fetch(`${FETCH_URL}/contract/`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            method: 'POST',
            body: JSON.stringify(data)
        })
    }
} 