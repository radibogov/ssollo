import {FETCH_URL} from "../../configs/urls"
import {setManagers} from "../reducers/listsReducer"
import {setError} from "../reducers/errorReducer";


export const fetchManagers = () => {

    return dispatch => {
        fetch(`${FETCH_URL}/listManagers`, {
            method: 'GET'
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw response.json();
                }
            })
            .then(response => {
                dispatch(setManagers(response))
            })
            .catch((error) => {
                error.then((error) =>
                    dispatch(setError({open: true, error: error}))
                )
            })
    }
}