import { FETCH_URL } from "../../configs/urls"
import { setUsers } from "../reducers/listsReducer"



export const fetchUsers = () => {

    return dispatch => {
        fetch(`${FETCH_URL}/listUsers`, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(response => {
            dispatch(setUsers(response))
        })
    }
}