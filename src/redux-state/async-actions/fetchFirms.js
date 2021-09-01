import { FETCH_URL } from "../../configs/urls"
import { setFirms } from "../reducers/listsReducer"



export const fetchFirms = () => {

    return dispatch => {
        fetch(`${FETCH_URL}/listFirms`, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(response => {
            dispatch(setFirms(response))
        })
    }
}