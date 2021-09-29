import {FETCH_URL} from "../../configs/urls"
import {setUsers} from "../reducers/listsReducer"
import {setError} from "../reducers/errorReducer";


export const fetchUsers = () => {

    return dispatch => {
        fetch(`${FETCH_URL}/listUsers`, {
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
                dispatch(setUsers(response))
            })
            .catch((error) => {
                try {
                    error.then((error) =>
                        dispatch(setError({open: true, error: error}))
                    )
                } catch (e) {

                }

            })
    }
}