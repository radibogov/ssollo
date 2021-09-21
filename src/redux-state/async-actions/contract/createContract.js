import { FETCH_URL } from "../../../configs/urls"
import {setIdContract} from "../../reducers/contractFormReducer";


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
                dispatch(setIdContract(response.id))
            })
    }
} 