import {FETCH_URL} from "../../../configs/urls"
import {setError} from "../../reducers/errorReducer";


export const updateCalculation = (id,data) => {

    return dispatch => {
        fetch(`${FETCH_URL}/calculation/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw response.json();
                }
            })
            .catch((error) => {
                error.then((error) =>
                    dispatch(setError({open: true, error: error}))
                )
            })
    }
}