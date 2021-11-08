import {FETCH_URL} from "../../../configs/urls"
import {setError} from "../../reducers/errorReducer";
import {fetchComment} from "./fetchComment";
import {setSuccess} from "../../reducers/successReducer";


export const updateComment = (id,data) => {
    if (data.image_1 === null) {
        delete data['image_1'];
    }
    if (data.image_2 === null) {
        delete data['image_2'];
    }
    if (data.image_3 === null) {
        delete data['image_3'];
    }
    if (data.image_4 === null) {
        delete data['image_4'];
    }
    if (data.image_5 === null) {
        delete data['image_5'];
    }
    return dispatch => {
        fetch(`${FETCH_URL}/comment/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw response.json();
                }
            })
            .then(() => {
                dispatch(fetchComment(data.order_id))
                dispatch(setSuccess({open: true}))

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