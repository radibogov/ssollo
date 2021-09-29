import {FETCH_URL} from "../../configs/urls"
import {setCars} from "../reducers/listsReducer"
import {setError} from "../reducers/errorReducer";


export const fetchCars = () => {

    return dispatch => {
        fetch(`${FETCH_URL}/listCars`, {
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
                dispatch(setCars(response))
            })
            .catch((error) => {
                error.then((error) =>
                    dispatch(setError({open: true, error: error}))
                )
            })
    }
}