import { FETCH_URL } from "../../../configs/urls"


export const updateCalculation = (id,data) => {


    return dispatch => {
        fetch(`${FETCH_URL}/calculation/${id}`, {
            method: 'PATCH',
            body: data
        })
    }
}