import { FETCH_URL } from "../../../configs/urls"


export const updateComment = (id,data) => {


    return dispatch => {
        fetch(`${FETCH_URL}/payment/${id}`, {
            method: 'PATCH',
            body: data
        })
    }
}