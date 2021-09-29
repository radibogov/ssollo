import {FETCH_URL} from "../../../configs/urls"
import {setError} from "../../reducers/errorReducer";
import {fetchComment} from "./fetchComment";


export const createComment = (data) => {


    return dispatch => {
        fetch(`${FETCH_URL}/comment/`, {
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
                    throw response.json();
                }
            })
            .then(() => {
                    dispatch(fetchComment(data.order_id))
                }
            )
            .catch((error) => {
                error.then((error) =>
                    dispatch(setError({open: true, error: error}))
                )
            })

    }
}