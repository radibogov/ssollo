import { FETCH_URL } from "../../../configs/urls"


export const deleteTerritory = (id) => {

    return dispatch => {
        fetch(`${FETCH_URL}/territory/${id}`, {
            method: 'DELETE'
        })
    }
}