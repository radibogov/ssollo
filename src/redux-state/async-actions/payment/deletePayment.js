import {FETCH_URL} from "../../../configs/urls"
import {setError} from "../../reducers/errorReducer";
import {fetchPayment} from "./fetchPayment";
import {csrftoken} from "../../../configs/Cooki";


export const deletePayment = (id,cfid) => {

    return dispatch => {
        fetch(`${FETCH_URL}/payment/${id}`, {
            headers: {
                'X-CSRFToken': csrftoken
            },
            method: 'DELETE',
            credentials: "include",
        })
            .then((response) => {
                if (!response.ok) {
                    throw response.json();
                }
            })
            .then(()=> {
                dispatch(fetchPayment(cfid))
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