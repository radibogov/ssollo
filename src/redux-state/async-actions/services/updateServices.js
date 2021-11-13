import {FETCH_URL} from "../../../configs/urls"
import {setError} from "../../reducers/errorReducer";
import {fetchServices} from "./fetchServices";


export const updateServices = (id, data) => {

    return dispatch => {
        fetch(`${FETCH_URL}/services/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
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
            .then(()=> {
                dispatch(fetchServices())
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