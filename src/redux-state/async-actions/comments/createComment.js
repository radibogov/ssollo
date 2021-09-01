import { FETCH_URL } from "../../../configs/urls"


export const createComment = (data) => {


    return dispatch => {
        fetch(`${FETCH_URL}/comment/`, {
            method: 'POST',
            body: data
        })
    }
}