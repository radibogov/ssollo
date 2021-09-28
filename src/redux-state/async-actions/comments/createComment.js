import { FETCH_URL } from "../../../configs/urls"
import {setError} from "../../reducers/errorReducer";


export const createComment = (data) => {


    return dispatch => {
        fetch(`${FETCH_URL}/comment/`, {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(response => response.json()).then(response => {
            if (!response.ok) {
                throw(response)
            }})
            .catch(reason =>
                dispatch(setError({open: true, error: reason}))
            )
    }
}