import { FETCH_URL } from "../../../configs/urls"
import {setCalcList} from "../../reducers/calculationReducer";


export const fetchPayment = (id) => {

    return dispatch => {
        fetch(`${FETCH_URL}/payment?order_id=${id}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(response => {
                dispatch(setCalcList(response))
            })
    }
}