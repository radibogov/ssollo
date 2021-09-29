import {FETCH_URL} from "../../../configs/urls"
import {setPlaces} from "../../reducers/listsReducer"
import {setError} from "../../reducers/errorReducer";


export const fetchPlaces = () => {

    return dispatch => {
        fetch(`${FETCH_URL}/place`, {
            method: 'GET'
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw response.json();
                }
            })
            .then(json => {
                dispatch(setPlaces(json))
            })
            .catch((error) => {
                error.then((error) =>
                    dispatch(setError({open: true, error: error}))
                )
            })
    }
}