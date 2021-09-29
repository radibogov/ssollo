import {FETCH_URL} from "../../configs/urls"
import {setFirms} from "../reducers/listsReducer"
import {setError} from "../reducers/errorReducer";


export const fetchFirms = () => {

    return dispatch => {
        fetch(`${FETCH_URL}/listFirms`, {
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
                dispatch(setFirms(response))
            })
            .catch((error) => {
                error.then((error) =>
                    dispatch(setError({open: true, error: error}))
                )
            })
    }
}