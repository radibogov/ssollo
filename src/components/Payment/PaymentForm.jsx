import React, {useEffect} from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useDispatch, useSelector} from 'react-redux';
import {
    setDelay,
    setDeposit,
    setFuelAfter,
    setFuelBefore,
    setMileageAfter,
    setMileageBefore,
    setMileagePrice,
    setOrderIdCalc
} from '../../redux-state/reducers/calculationReducer';
import PaymentTable from './PaymentTable';
import MoneyOperationDialog from "./Payment-dialogs/MoneyOperationDialog";
import PaymentBtnPanel from "./PaymentBtnPanel";
import {setOrderId} from "../../redux-state/reducers/paymentReducer";
import {fetchPayment} from "../../redux-state/async-actions/payment/fetchPayment";
import {createPayment} from "../../redux-state/async-actions/payment/createPayment";
import moment from "moment";
import {createCalculation} from "../../redux-state/async-actions/calculation/createCalculation";
import {updateCalculation} from "../../redux-state/async-actions/calculation/updateCalculation";


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
    const calculation = useSelector(state => state.calculation);
    const activeCar = useSelector(state => state.lists.active_car);
    const contractForm = useSelector(state => state.contractForm);
    const dispatch = useDispatch()

    useEffect(() => {
        if (activeCar) {
            dispatch(setDeposit(activeCar.deposit));
            dispatch(setDelay(contractForm.days_first));
            dispatch(setOrderId(contractForm.id));
            dispatch(setOrderIdCalc(contractForm.id));
            dispatch(fetchPayment(contractForm.id))
        }
    },[])

    useEffect(() => {
        let over = calculation.mileage_after-calculation.mileage_before-activeCar.millage*contractForm.days_first;
        if (over > 0) {
            dispatch(setMileagePrice(over*activeCar.over_millage_price))
        }
    },[calculation.mileage_after,calculation.mileage_before])

    const formSubmit = (e) => {
        e.preventDefault()
        if (calculation.id) {
            dispatch(updateCalculation(calculation.id,calculation));
        } else {
            dispatch(createCalculation(calculation));
        }
    };

    return  <div>
        <FormWrapper onSubmit={formSubmit}>
            <InputRow>
                <TextField required
                           type="number"
                           value={calculation.deposit}
                           onChange={
                               (event) => {
                                   dispatch(setDeposit(event.target.value))
                               }
                           }
                           id="filled-basic" label="Залог" variant="filled" style={{ marginRight: 'auto' }} />
                <TextField required
                           type="number"
                           value={calculation.fuel_before}
                           onChange={
                               (event) => {
                                   dispatch(setFuelBefore(event.target.value))
                               }
                           }
                           id="filled-basic" label="Топливо в начале" variant="filled" style={{ marginRight: '20px' }} />
                <TextField required
                           type="number"
                           value={calculation.mileage_before}
                           onChange={
                               (event) => {
                                   dispatch(setMileageBefore(event.target.value))
                               }
                           }
                           id="filled-basic" label="Пробег начало" variant="filled"/>
            </InputRow>
            <InputRow style={{justifyContent: 'flex-end'}}>
                <div style={{ marginRight: 'auto' }}>
                    <Button onClick={()=>{
                        dispatch(createPayment({
                            client_id: contractForm.user_id,
                            car_id: contractForm.real_auto_id,
                            operation: 'Залог',
                            payment: calculation.deposit,
                            count: 1,
                            is_deposit: true,
                            is_main_payment: false,
                            service_name: 'Оплата залога',
                            service_price: calculation.deposit,
                            sum_of_money: calculation.deposit,
                            doc_number: contractForm.uch_number,
                            firm_id: contractForm.firm_id,
                            date_of_payment: moment().format('YYYY-MM-DDTHH:mm'),
                            order_id: contractForm.id
                        },contractForm.id))

                    }} variant="contained" color="primary" style={{ marginRight: '20px' }}>
                        Залог
                    </Button>
                    <Button onClick={()=>{
                        dispatch(createPayment({
                            client_id: contractForm.user_id,
                            car_id: contractForm.real_auto_id,
                            operation: 'Возврат залога',
                            payment: calculation.deposit,
                            count: 1,
                            is_deposit: false,
                            is_deposit_return: true,
                            is_main_payment: false,
                            service_name: 'Возврат залога',
                            service_price: calculation.deposit,
                            sum_of_money: calculation.deposit,
                            doc_number: contractForm.uch_number,
                            firm_id: contractForm.firm_id,
                            date_of_payment: moment().format('YYYY-MM-DDTHH:mm'),
                            order_id: contractForm.id
                        },contractForm.id))
                    }}

                            variant="contained" color="primary" style={{ marginRight: '20px' }}>
                        Возврат
                    </Button>
                </div>

                <TextField required
                           type="number"
                           value={calculation.fuel_after}
                           onChange={
                               (event) => {
                                   dispatch(setFuelAfter(event.target.value))
                               }
                           }
                           id="filled-basic" label="Топливо в конце" variant="filled" style={{ marginRight: '20px' }} />
                <TextField required
                           type="number"
                           value={calculation.mileage_after}
                           onChange={
                               (event) => {
                                   dispatch(setMileageAfter(event.target.value))
                               }
                           }
                           id="filled-basic" label="Пробег конец" variant="filled"/>
            </InputRow>
            <InputRow style={{justifyContent: 'flex-end'}}>
                <TextField value={calculation.fuel_before-calculation.fuel_after} id="filled-basic" label="Топливо разница" variant="filled" style={{ marginLeft: '240px',marginRight: '20px' }} />
                <TextField value={calculation.mileage_after-calculation.mileage_before} id="filled-basic" label="Километраж" variant="filled" />
            </InputRow>
            <InputRow style={{justifyContent: 'flex-end'}}>
                {(calculation.mileage_after-calculation.mileage_before-activeCar.millage*contractForm.days_first)>=0?
                    <Button onClick={()=>{
                        dispatch(createPayment({
                            client_id: contractForm.user_id,
                            car_id: contractForm.real_auto_id,
                            operation: 'Оплата за перепробег',
                            payment: calculation.mileage_after - calculation.mileage_before - activeCar.millage * contractForm.days_first,
                            count: 1,
                            service_name: 'Оплата за перепробег',
                            service_price: calculation.mileage_after - calculation.mileage_before - activeCar.millage * contractForm.days_first,
                            sum_of_money: calculation.sum_for_mileage_over,
                            doc_number: contractForm.uch_number,
                            firm_id: contractForm.firm_id,
                            date_of_payment: moment().format('YYYY-MM-DDTHH:mm'),
                            order_id: contractForm.id
                        },contractForm.id))
                    }} variant="contained" color="primary" style={{ marginRight: '20px' }}>
                        Оплата за перепробег
                    </Button>:null
                }

                <TextField id="filled-basic" value={(calculation.mileage_after-calculation.mileage_before-activeCar.millage*contractForm.days_first)>=0?calculation.mileage_after-calculation.mileage_before-activeCar.millage*contractForm.days_first:0} label="Перепробег" variant="filled" />
            </InputRow>
            <InputRow>
                <PaymentBtnPanel />
                <TextField id="filled-basic" value={+calculation.sum_for_mileage_over} label="За перепробег" variant="filled" style={{ marginLeft: 'auto' }} />
            </InputRow>
            <PaymentTable />
            <InputRow>
                <TextField
                    type="number" id="filled-basic" value={''+calculation.delay} label="Дней" variant="filled" style={{ marginRight: '30px' }} />
                <TextField value={+calculation.sum_one}
                           type="number" id="filled-basic" label="Начислено" variant="filled" style={{ marginRight: '30px' }} />
                <TextField value={+calculation.sum_two}
                           type="number" id="filled-basic" label="Оплачено" variant="filled" style={{ marginRight: '30px' }} />
                <TextField value={+calculation.balance}
                           type="number" id="filled-basic" label="Баланс" variant="filled" style={{ marginRight: '30px' }} />
            </InputRow>
            <Button type='submit' style={{marginLeft: 'auto'}} variant="contained" color="primary">
                Сохранить
            </Button>
        </FormWrapper>
        <MoneyOperationDialog />
    </div>

}


export default PaymentForm;