import { FETCH_URL } from "../../../configs/urls"
import {setIdContract} from "../../reducers/contractFormReducer";
import {setError} from "../../reducers/errorReducer";



export const createContract = (data) => {

    return dispatch => {
        fetch(`${FETCH_URL}/contract/`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            method: 'POST',
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(response => {
                if (!response.ok) {
                    throw(response)
                }
                dispatch(setIdContract(response.id))
            })
            .catch(reason =>
                dispatch(setError({open: true, error: reason}))
            )
    }
}
