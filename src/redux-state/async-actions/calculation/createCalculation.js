import { FETCH_URL } from "../../../configs/urls"


export const createCalculation = (data) => {


    return dispatch => {
        fetch(`${FETCH_URL}/calculation/`, {
            method: 'POST',
            body: data
        })
    }
}