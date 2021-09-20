import { FETCH_URL } from "../../../configs/urls"
import {useDispatch, useSelector} from "react-redux";
import {toggleServicesDialog} from "../../reducers/DialogsReducer";


export const createCalculation = (data) => {
    const dispatch = useDispatch();
    const servicesList = useSelector(state => state.lists.services);
    const classes = useStyles();
    const open = useSelector(state => state.dialogs.services)
    const handleClickOpen = () => {
        dispatch(toggleServicesDialog(true))
    };

    const handleClose = () => {
        dispatch(toggleServicesDialog(false))
    };
    return dispatch => {
        fetch(`${FETCH_URL}/calculation/`, {
            method: 'POST',
            body: data
        })
    }
}