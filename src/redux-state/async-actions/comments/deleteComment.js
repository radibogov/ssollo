import { FETCH_URL } from "../../../configs/urls"


export const deleteComment = (id) => {


    return dispatch => {
        fetch(`${FETCH_URL}/comment/${id}`, {
            method: 'DELETE',
        })
    }
}