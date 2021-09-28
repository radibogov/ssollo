import { FETCH_URL } from "../../../configs/urls"
import {setCommentRow} from "../../reducers/commentRowsReducer";


export const fetchComment = (id) => {
    return dispatch => {
        fetch(`${FETCH_URL}/comment?order_id=${id}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(response => {
                dispatch(setCommentRow(response))
            })
    }
}