import React from 'react';
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {toggleMoneyOpDialog} from "../../redux-state/reducers/DialogsReducer";
import {setCountPayment, setService} from "../../redux-state/reducers/paymentReducer";

const PaymentBtnPanel = () => {
    const dispatch = useDispatch()
    const contractForm = useSelector(state => state.contractForm)


    const handleClickOpen = (flag, type) => {
        dispatch(toggleMoneyOpDialog({flag: flag, type: type}))
    };
    return (
        <React.Fragment>
            <Button onClick={
                ()=> {
                    dispatch(setService({id: null,name: 'За прокат по договору номер '+contractForm.uch_number,price: contractForm.tariff}));
                    dispatch(setCountPayment(contractForm.days_first));
                    handleClickOpen(true, 1);
                }} variant="contained" color="primary" style={{ marginRight: '20px' }}>
                Оплата
            </Button>
            <Button onClick={
                ()=>{
                    dispatch(setService({id: null,name: 'Дополнительный платеж', price: ''}));
                    dispatch(setCountPayment(1));
                    handleClickOpen(true, 2)
                }} variant="contained" color="primary" style={{ marginRight: '20px' }}>
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