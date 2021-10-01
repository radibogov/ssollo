import {FETCH_URL} from "../../../configs/urls"
import {setIdContract} from "../../reducers/contractFormReducer";
import {setError} from "../../reducers/errorReducer";


export const createContract = (data) => {

    return dispatch => {
        fetch(`${FETCH_URL}/contract/`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.log(response.json())
                    throw response.json();
                }
            })
            .then((json) => {
                dispatch(setIdContract(json.id))
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
