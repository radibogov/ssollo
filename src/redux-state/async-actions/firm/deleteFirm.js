import {FETCH_URL} from "../../../configs/urls"
import {setError} from "../../reducers/errorReducer";


export const deleteFirm = (id) => {

    return dispatch => {
        fetch(`${FETCH_URL}/firm/${id}`, {
            method: 'DELETE'
        })
            .then((response) => {
                if (!response.ok) {
                    throw response.json();
                }
            })
            .catch((error) => {
                error.then((error) =>
                    dispatch(setError({open: true, error: error}))
                )
            })
    }
}