import {FETCH_URL} from "../../../configs/urls"
import {setServices} from "../../reducers/listsReducer"
import {setError} from "../../reducers/errorReducer";


export const fetchServices = () => {

    return dispatch => {
        fetch(`${FETCH_URL}/services/`, {
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
                dispatch(setServices(json))
            })
            .catch((error) => {
                error.then((error) =>
                    dispatch(setError({open: true, error: error}))
                )
            })
    }
}