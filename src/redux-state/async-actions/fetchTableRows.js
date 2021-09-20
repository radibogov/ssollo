import { setLeftTableRows, setRightTableRows } from "../reducers/tableRowsReducer";
import { FETCH_URL } from "../../configs/urls";
import { store } from "..";
import moment from "moment";

export const fetchTableRows = (leftOrRight) => {
    return dispatch => {
        fetch(`${FETCH_URL}/contract/${leftOrRight ? 'left' : 'right'}?date=${moment(store.getState().date.date).format('YYYY-MM-DD')}`, {
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
