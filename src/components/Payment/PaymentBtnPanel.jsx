import React from 'react';
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {toggleMoneyOpDialog} from "../../redux-state/reducers/DialogsReducer";
import {
    clearPaymentForm,
    setAccruedPayment, setAllPayment,
    setCountPayment,
    setService,
    setTypePayment
} from "../../redux-state/reducers/paymentReducer";
import {deletePayment} from "../../redux-state/async-actions/payment/deletePayment";
import {fetchPayment} from "../../redux-state/async-actions/payment/fetchPayment";
import {getOnePayment} from "../../redux-state/async-actions/payment/getOnePayment";

const PaymentBtnPanel = () => {
    const dispatch = useDispatch()
    const contractForm = useSelector(state => state.contractForm)
    const currentRowPayment = useSelector(state => state.currentRow.payment)
    const activePayment = useSelector(state => state.currentRow.payment_active)
    const current = useSelector(state => state.currentRow.payment)


    const handleClickPayment = () => {
        dispatch(clearPaymentForm());
        dispatch(setTypePayment({is_deposit: false, is_main_payment: true}))
        dispatch(setService({id: null,name: 'За прокат по договору № '+contractForm.uch_number,price: contractForm.tariff}));
        dispatch(setCountPayment(contractForm.days_first));
        dispatch(setAccruedPayment(contractForm.summa_prokata))
        handleClickOpen(true, 1);
    };
    const handleClickDopPayment = () => {
        dispatch(clearPaymentForm());
        dispatch(setService({id: null,name: 'Дополнительный платеж', price: ''}));
        dispatch(setCountPayment(1));
        handleClickOpen(true, 2)
    };
    const handleClickOpen = (flag, type) => {
        dispatch(toggleMoneyOpDialog({flag: flag, type: type}))
    };
    return (
        <React.Fragment>
            <Button onClick={handleClickPayment} variant="contained" color="primary" style={{ marginRight: '20px' }}>
                Оплата
            </Button>
            <Button onClick={handleClickDopPayment} variant="contained" color="primary" style={{ marginRight: '20px' }}>
                Добавить
            </Button>
            <Button variant="contained" color="primary" style={{ marginRight: '20px' }}
                onClick={
                    () => {
                        dispatch(getOnePayment(current))
                        setTimeout(() => {
                            dispatch(setAllPayment(
                            {
                                id: activePayment?.id,
                                employee_id: activePayment?.employee?.id,
                                employee_name: activePayment?.employee?.full_name,
                                // client_id: activePayment?.client?.id,
                                // car_id: activePayment?.real_auto?.id,
                                // operation: '0',
                                payment: activePayment?.payment,
                                count: activePayment?.count,
                                is_deposit: activePayment?.is_deposit,
                                is_deposit_return: activePayment?.is_deposit_return,
                                is_main_payment: activePayment?.is_main_payment,
                                service_id: activePayment?.service?.id,
                                service_name: activePayment?.service?.name ,
                                service_price: activePayment?.service_price,
                                sum_of_money: activePayment?.sum_of_money,
                                // doc_number: activePayment?.doc_number,
                                // firm_id: activePayment?.firm?.id,
                                date_of_payment: activePayment?.date_of_payment,
                                // order_id: activePayment?.order?.id
                            }
                        ))}, 300)
                        setTimeout(() => {
                            dispatch(toggleMoneyOpDialog({flag: true, type: activePayment?.is_main_payment? 1 : 2} ))
                        }, 300)
                    }
                }
            >
                Открыть
            </Button>
            <Button variant="contained" color="primary" style={{ marginRight: '20px' }}
                onClick={
                    ()=> {
                        dispatch(deletePayment(currentRowPayment))
                        setTimeout(() => {
                            dispatch(fetchPayment(contractForm.id))
                        }, 200)
                    }
                }
            >
                Удалить
            </Button>
        </React.Fragment>
    );
};

export default PaymentBtnPanel;