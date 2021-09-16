import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useDispatch, useSelector } from 'react-redux';
import { setDelay, setDeposit, setFuelAfter, setFuelBefore, setMileageAfter, setMileageBefore } from '../../redux-state/reducers/calculationReducer';
import PaymentTable from './PaymentTable,';
import MoneyOperationDialog from "./MoneyOperationDialog";
import PaymentBtnPanel from "./PaymentBtnPanel";

const FormWrapper = styled.form`
width: 70%;
margin: 20px auto;
`;
const InputRow = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
margin: 10px 0;
`;

const PaymentForm = () => {
    const [checked, setChecked] = React.useState(false)
    const calculation = useSelector(state => state.calculation)
    const activeCar = useSelector(state => state.lists.active_car)
    const dispatch = useDispatch()
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return <FormWrapper>
        <InputRow>
            <TextField
                type="number"
                value={calculation.deposit}
                onChange={
                    (event) => {
                        dispatch(setDeposit(event.target.value))
                    }
                }
                id="filled-basic" label="Залог" variant="filled" style={{ marginRight: '20px' }} />
            <Button variant="contained" color="primary" style={{ marginRight: '20px' }}>
                Залог
            </Button>
            <Button variant="contained" color="primary" style={{ marginRight: '20px' }}>
                Возврат
            </Button>
            <TextField
                type="number"
                value={calculation.fuel_before}
                onChange={
                    (event) => {
                        dispatch(setFuelBefore(event.target.value))
                    }
                }
                id="filled-basic" label="Топливо в начале" variant="filled" style={{ marginRight: '20px' }} />
            <TextField
                type="number"
                value={calculation.mileage_before}
                onChange={
                    (event) => {
                        dispatch(setMileageBefore(event.target.value))
                    }
                }
                id="filled-basic" label="Пробег начало" variant="filled" style={{ marginRight: '20px' }} />
        </InputRow>
        <InputRow>
            <TextField
                type="number"
                value={activeCar?.tarif_one_two*calculation?.delay}
                id="filled-basic" label="Просрочка" variant="filled" style={{ marginRight: '20px' }} />
            <Button variant="contained" color="primary" style={{ marginRight: '20px', width: '200px' }}>
                Просрочка
            </Button>

            <TextField
                type="number"
                value={calculation.fuel_after}
                onChange={
                    (event) => {
                        dispatch(setFuelAfter(event.target.value))
                    }
                }
                id="filled-basic" label="Топливо в конце" variant="filled" style={{ marginRight: '20px' }} />
            <TextField
                type="number"
                value={calculation.mileage_after}
                onChange={
                    (event) => {
                        dispatch(setMileageAfter(event.target.value))
                    }
                }
                id="filled-basic" label="Пробег конец" variant="filled" style={{ marginRight: '20px' }} />
        </InputRow>
        <InputRow>
            <TextField
                type="number"
                value={calculation.delay}
                onChange={
                    (event) => {
                        dispatch(setDelay(event.target.value))
                    }
                }
                id="filled-basic" label="Дней" variant="filled" style={{ marginRight: '240px' }} />
            <TextField value={calculation.fuel_before-calculation.fuel_after} id="filled-basic" label="Топливо разница" variant="filled" style={{ marginRight: '20px' }} />
            <TextField value={calculation.mileage_after-calculation.mileage_before} id="filled-basic" label="Километраж" variant="filled" style={{ marginRight: '20px' }} />
        </InputRow>
        <InputRow>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        name="checkedB"
                        color="primary"
                    />
                }
                label="Задержан"
                style={{ marginRight: '600px' }}
            />
            <TextField id="filled-basic" label="Перепробег" variant="filled" style={{ marginRight: '20px' }} />
        </InputRow>
        <InputRow>
            <PaymentBtnPanel />
            <MoneyOperationDialog />
            <TextField id="filled-basic" label="За перепробег" variant="filled" style={{ marginLeft: '220px' }} />
        </InputRow>
        <PaymentTable />
        <InputRow>
            <TextField
                type="number" id="filled-basic" label="Дней" variant="filled" style={{ marginRight: '30px' }} />
            <TextField
                type="number" id="filled-basic" label="Начислено" variant="filled" style={{ marginRight: '30px' }} />
            <TextField
                type="number" id="filled-basic" label="Оплачено" variant="filled" style={{ marginRight: '30px' }} />
            <TextField
                type="number" id="filled-basic" label="Баланс" variant="filled" style={{ marginRight: '30px' }} />
        </InputRow>
    </FormWrapper>
}


export default PaymentForm;