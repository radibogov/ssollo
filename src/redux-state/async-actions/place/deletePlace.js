import { FETCH_URL } from "../../../configs/urls"


export const deletePlace = (id) => {

    return dispatch => {
        fetch(`${FETCH_URL}/place/${id}`, {
            method: 'DELETE'
        })
    }
}