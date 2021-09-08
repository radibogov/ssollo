import { FETCH_URL } from "../../configs/urls"
import { setPlaces } from "../reducers/listsReducer"


export const fetchPlaces = () => {

    return dispatch => {
        fetch(`${FETCH_URL}/place`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(response => {
                dispatch(setPlaces(response))
            })
    }
}