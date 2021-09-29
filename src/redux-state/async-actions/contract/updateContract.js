import { FETCH_URL } from "../../../configs/urls"
import {setError} from "../../reducers/errorReducer";



export const updateContract = (id, data) => {

    return dispatch => {
        fetch(`${FETCH_URL}/contract/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        }).then(response => {
            if (response.ok === false) {
                throw(response)
            }}).catch(reason =>
            dispatch(setError({open: true, error: reason}))
        )


    }
}