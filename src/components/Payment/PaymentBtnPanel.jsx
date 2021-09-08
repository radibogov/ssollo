import React from 'react';
import Button from "@material-ui/core/Button";
import {useDispatch} from "react-redux";
import {toggleMoneyOpDialog} from "../../redux-state/reducers/DialogsReducer";

const PaymentBtnPanel = () => {
    const dispatch = useDispatch()

    const handleClickOpen = (flag, type) => {
        dispatch(toggleMoneyOpDialog({flag: flag, type: type}))
    };
    return (
        <React.Fragment>
            <Button onClick={()=>handleClickOpen(true, 1)} variant="contained" color="primary" style={{ marginRight: '20px' }}>
                Оплата
            </Button>
            <Button onClick={()=>handleClickOpen(true, 2)} variant="contained" color="primary" style={{ marginRight: '20px' }}>
                Добавить
            </Button>
            <Button variant="contained" color="primary" style={{ marginRight: '20px' }}>
                Открыть
            </Button>
            <Button variant="contained" color="primary" style={{ marginRight: '20px' }}>
                Удалить
            </Button>
        </React.Fragment>
    );
};

export default PaymentBtnPanel;