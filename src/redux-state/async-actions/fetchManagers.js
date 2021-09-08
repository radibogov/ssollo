import { FETCH_URL } from "../../configs/urls"
import { setManagers } from "../reducers/listsReducer"


export const fetchManagers = () => {

    return dispatch => {
        fetch(`${FETCH_URL}/listManagers`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(response => {
                dispatch(setManagers(response))
            })
    }
}