import { FETCH_URL } from "../../../configs/urls"
import {fetchTableRows} from "../fetchTableRows";



export const updateContract = (id, data) => {

    return dispatch => {
        fetch(`${FETCH_URL}/contract/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        })
    }
}