import React, {useEffect} from 'react';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMoneyOpDialog } from '../../../redux-state/reducers/DialogsReducer';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {
    setAccruedPayment,
    setCountPayment,
    setDateOfPayment,
    setOperation,
    setSumOfMoney
} from '../../../redux-state/reducers/paymentReducer';
import AutoDialog from "../../Dialog/AutoDialog";
import {
    setContractNumber,
} from "../../../redux-state/reducers/contractFormReducer";
import ClientDialog from "../../Dialog/ClientDialog";
import FirmDialog from "../../Dialog/firmDialog";
import ServicesDialog from "./ServicesDialog";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import moment from "moment";
import ManagerPaymentDialog from "./ManagerPaymentDialog";

const InputRow = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 570px;
box-sizing: border-box;
padding-right: 30px;
margin: 10px 0;
`;
const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export default function MoneyOperationDialog() {
    const dispatch = useDispatch()
    const classes = useStyles();
    const open = useSelector(state => state.dialogs.moneyOp)
    const type = useSelector(state => state.dialogs.moneyOpType)
    const contractForm = useSelector(state => state.contractForm)
    const paymentForm = useSelector(state => state.paymentForm)

    useEffect(() => {
        if (paymentForm.date_of_payment === '') {
            dispatch(setDateOfPayment(moment().format('YYYY-MM-DDTHH:mm')))
        }
    });
    useEffect(() => {
        let summa = paymentForm.service_price*paymentForm.count
        dispatch(setAccruedPayment(Math.ceil(summa)))
    }, [paymentForm.service_price,paymentForm.count]);

    const handleClose = () => {
        dispatch(toggleMoneyOpDialog(false))
    };

    return (
        <React.Fragment>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{type===1?'Оплата по договору':type===2?'Операция с деньгами':null}</DialogTitle>
                <DialogContent>
                    <InputRow>
                        <TextField
                            id="datetime-local"
                            label="Дата, время"
                            type="datetime-local"
                            value={paymentForm.date_of_payment}
                            onChange={
                                (event) => {
                                    dispatch(setDateOfPayment(event.target.value))
                                }
                            }
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="standard-basic"
                            label="Создал" />
                    </InputRow>
                    {type===1?null:
                    <InputRow>
                        <TextField
                            id="standard-basic"
                            label="Операция"
                            value={paymentForm.operation}
                            onChange={
                                (event) => {
                                    dispatch(setOperation(event.target.value))
                                }
                            }
                            />
                    </InputRow>}
                    {type===1?
                        <React.Fragment>
                            <InputRow>
                                <TextField value={contractForm.uch_number} onChange={(event) => dispatch(setContractNumber(event.target.value))} id="filled-basic" label="Договор №" style={{ marginRight: '20px', width: '30%' }} />
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '75%'
                                }}>
                                    <TextField readOnly value={contractForm.client_name} id="filled-basic" label="Клиент" style={{ width: '95%' }} />
                                    <ClientDialog />
                                </div>
                            </InputRow>
                            <InputRow>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '30%'
                                }}>
                                    <TextField value={contractForm.gos_number} readOnly id="filled-basic" label="Автомобиль"  style={{ width: '90%' }} />
                                    <AutoDialog />
                                </div>
                                <TextField id="filled-basic" value={contractForm.auto_name} style={{ width: '70%', marginTop: 'auto' }} />
                            </InputRow>
                        </React.Fragment>
                        :null
                    }
                    <InputRow>
                            <TextField
                                id="standard-basic"
                                label="Сотрудник"
                                style={{width: '90%'}}
                                value={paymentForm.employee_name}
                            />
                            <ManagerPaymentDialog />

                    </InputRow>
                    <InputRow>
                        <div
                            style={{
                                display: 'flex',
                                width: '100%'
                            }}
                        >
                            <TextField
                                id="standard-basic"
                                label="Услуга"
                                style={{width: '100%'}}
                                value={paymentForm.service_name}
                            />
                            {type===1?null:
                            <ServicesDialog />}
                        </div>
                    </InputRow>

                    <InputRow>
                        <TextField
                            id="standard-basic"
                            label="Тариф"
                            value={paymentForm.service_price}
                            />
                        <div style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            width: '50%'
                        }}>
                            <TextField value={paymentForm.firm_name} id="filled-basic" label="Фирма" style={{ width: '87%' }} />
                            <FirmDialog/>
                        </div>
                    </InputRow>
                    <InputRow style={{display: 'flex', justifyContent: 'start'}}>
                        <IconButton color="primary"
                                    onClick={
                                        () => {
                                            dispatch(setCountPayment(+paymentForm.count - 1 >= 1 ? +paymentForm.count - 1 : 1))
                                        }
                                    }
                        >
                            <ArrowLeftIcon />
                        </IconButton>
                        <TextField id="filled-basic" label={type===1?'Дней':'Количество'} value={'' + paymentForm.count} onChange={(event) =>event.target.value>0?dispatch(setCountPayment(event.target.value)):dispatch(setCountPayment(1))} type="number" />
                        <IconButton color="primary"
                                    onClick={
                                        () => {
                                            dispatch(setCountPayment(+paymentForm.count + 1))
                                        }
                                    }
                        >
                            <ArrowRightIcon />
                        </IconButton>
                    </InputRow>
                    <InputRow>
                        <TextField
                            id="standard-basic"
                            label="Сумма"
                            value={+paymentForm.sum_of_money}
                        />
                        <IconButton color="primary"
                                    onClick={
                                        () => {
                                            dispatch(setSumOfMoney(paymentForm.accrued))
                                        }
                                    }
                        >
                            <ArrowBackIcon />
                        </IconButton>
                        <TextField
                            id="standard-basic"
                            label="Начислено"
                            type='number'
                            value={''+paymentForm.accrued}
                            onChange={(event) =>dispatch(setAccruedPayment(event.target.value))}
                        />
                    </InputRow>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Отменить
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Записать
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}