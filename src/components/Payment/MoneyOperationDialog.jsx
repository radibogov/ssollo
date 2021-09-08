import React from 'react';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMoneyOpDialog } from '../../redux-state/reducers/DialogsReducer';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { setDateOfPayment, setOperation } from '../../redux-state/reducers/paymentReducer';
import AutoDialog from "../Dialog/AutoDialog";
import {setContractNumber} from "../../redux-state/reducers/contractFormReducer";
import ClientDialog from "../Dialog/ClientDialog";
import FirmDialog from "../Dialog/firmDialog";

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
    const paymentForm = useSelector(state => state.payment)

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
                            value={paymentForm.dateofPayment}
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

                        <TextField
                            id="standard-basic"
                            label="Сотрудник" 
                            disabled
                            />
                    </InputRow>
                    {type===1?
                        <React.Fragment>
                            <InputRow>
                                <TextField value={contractForm.contract_number} onChange={(event) => dispatch(setContractNumber(event.target.value))} id="filled-basic" label="Договор №" style={{ marginRight: '20px', width: '30%' }} />
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
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <TextField
                                id="standard-basic"
                                label="Услуга"
                                disabled
                            />
                            <IconButton color="primary">
                                <ArrowDropDownCircleIcon />
                            </IconButton>
                        </div>
                    </InputRow>

                    <InputRow>
                        <TextField
                            id="standard-basic"
                            label="Тариф" 
                            
                            />
                        <div style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            width: '50%'
                        }}>
                            <TextField value={contractForm.firm_name} id="filled-basic" label="Фирма" style={{ width: '87%' }} />
                            <FirmDialog/>
                        </div>
                    </InputRow>
                    <InputRow>
                        <TextField
                            id="standard-basic"
                            label="Сумма" />
                        <IconButton color="primary">
                            <ArrowBackIcon />
                        </IconButton>
                        <TextField
                            id="standard-basic"
                            label="Начислено" />
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