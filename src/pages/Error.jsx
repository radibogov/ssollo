import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import {setError} from "../redux-state/reducers/errorReducer";

const Error = () => {
    const dispatch = useDispatch();
    const error = useSelector(state => state.error.error)
    const open = useSelector(state => state.error.open)
    console.log(error)
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} onClose={handleClose} />;

    }
    function reasonEr() {
        let resp = []
        for (let key in error) {
            resp.push(<div>{error[key]}</div>)
        }
        return resp
    }
    const handleClose = () => {
        dispatch(setError({open: false, error: null}));
    };

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                Запрос не удался, причина: <br/>
                {reasonEr()}
            </Alert>
        </Snackbar>
    );
};

export default Error;