import {FETCH_URL} from "../../../configs/urls"
import {setTerritories} from "../../reducers/listsReducer"
import {setError} from "../../reducers/errorReducer";


export const fetchTerritories = () => {

    return dispatch => {
        fetch(`${FETCH_URL}/territory`, {
            method: 'GET'
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw response.json();
                }
            })
            .then((json) => {
                dispatch(setTerritories(json))
            })
            .catch((error) => {
                error.then((error) =>
                    dispatch(setError({open: true, error: error}))
                )
            })
    }
}