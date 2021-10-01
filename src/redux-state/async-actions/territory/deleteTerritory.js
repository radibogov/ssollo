import {FETCH_URL} from "../../../configs/urls"
import {setError} from "../../reducers/errorReducer";


export const deleteTerritory = (id) => {

    return dispatch => {
        fetch(`${FETCH_URL}/territory/${id}`, {
            method: 'DELETE'
        })
            .then((response) => {
                if (!response.ok) {
                    throw response.json();
                }
            })
            .catch((error) => {
                if(typeof error.then === "function") {
                    error
                        .then((error) =>
                            dispatch(setError({open: true, error: error}))
                        )
                }
            })
    }
}