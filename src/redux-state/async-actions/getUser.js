import {FETCH_URL} from "../../configs/urls"
import {setUser} from "../reducers/userReducer";


export const getUser = () => {

    return dispatch => {
        fetch(`${FETCH_URL}/getCurrentUser/`, {
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
                console.log(response)
                dispatch(setUser(response))
            })
    }
}