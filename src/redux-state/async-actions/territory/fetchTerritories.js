import { FETCH_URL } from "../../../configs/urls"
import { setTerritories } from "../../reducers/listsReducer"


export const fetchTerritories = () => {

    return dispatch => {
        fetch(`${FETCH_URL}/territory`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(response => {
                dispatch(setTerritories(response))
            })
    }
}