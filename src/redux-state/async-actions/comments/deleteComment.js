import {FETCH_URL} from "../../../configs/urls"
import {setError} from "../../reducers/errorReducer";
import {fetchComment} from "./fetchComment";


export const deleteComment = (id,cfid) => {

    return dispatch => {
        fetch(`${FETCH_URL}/comment/${id}`, {
            method: 'DELETE',
            credentials: "include",
        })
            .then((response) => {
                if (!response.ok) {
                    throw response.json();
                }
            })
            .then(()=> {
                dispatch(fetchComment(cfid))
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