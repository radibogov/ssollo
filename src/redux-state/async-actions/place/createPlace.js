import { FETCH_URL } from "../../../configs/urls"
import {setError} from "../../reducers/errorReducer";


export const createPlace = (data) => {
    return dispatch => {
        fetch(`${FETCH_URL}/place`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        }).then(response => response.json()).then(response => {
            if (!response.ok) {
                throw(response)
            }}).catch(reason =>
                dispatch(setError({open: true, error: reason}))
            )
    }
}