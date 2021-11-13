import {FETCH_URL} from "../../../configs/urls"
import {setError} from "../../reducers/errorReducer";
import {fetchPlaces} from "./fetchPlaces";


export const createPlace = (data) => {
    return dispatch => {
        fetch(`${FETCH_URL}/place`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            credentials: "include",
            body: JSON.stringify(data)
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw response.json();
                }
            })
            .then(()=>{
                dispatch(fetchPlaces())
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