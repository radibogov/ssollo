import { setLeftTableRows, setRightTableRows } from "../reducers/tableRowsReducer";
import { FETCH_URL } from "../../configs/urls";
import { store } from "..";


export const fetchTableRows = (leftOrRight) => {

    return dispatch => {
        fetch(`${FETCH_URL}/contract/${leftOrRight ? 'left' : 'right'}?date=${store.getState().date.date.getFullYear()}-${+store.getState().date.date.getMonth() + 1}-${store.getState().date.date.getDate()}`, {
            type: 'GET'
        })
            .then(res => res.json())
            .then(res => {
                if (leftOrRight) {
                    dispatch(setLeftTableRows(res))
                } else {
                    dispatch(setRightTableRows(res))
                }
            })
    }
}
