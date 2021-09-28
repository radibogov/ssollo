import React from 'react'
import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux';
import { setCurrentPayment } from '../../redux-state/reducers/currentRowReducer';
import { toggleMoneyOpDialog } from '../../redux-state/reducers/DialogsReducer';
import {getOnePayment} from "../../redux-state/async-actions/payment/getOnePayment";
import { setAllPayment} from "../../redux-state/reducers/paymentReducer";


const Row = styled.div`
white-space: nowrap;
flex-direction: row;
transition: .2s;
cursor: pointer;
width: 1220px;
&:hover{
    background-color: #eee;
}
`;
const Cell = styled.div`
white-space: nowrap;
display: inline-block;
padding: 2px 6px;
border-left: 1px solid #000;
border-right: 1px solid #000;
overflow: hidden;
min-width: 230px;
text-align: center;
height: 100%;
`;

const PaymentTableRow = (props) => {
    const dispatch = useDispatch()
    const activePayment = useSelector(state => state.currentRow.payment_active)
    return (
        <Row
        style={{
            background: props.isCurrent ? 'lightblue' : ''
        }}
            onClick={
                () => {
                    dispatch(setCurrentPayment(props.id))
                    dispatch(getOnePayment(props.id))
                }
            }
            onDoubleClick={
                () => {
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
                            service_name: activePayment?.service_name,
                            service_price: activePayment?.service_price,
                            sum_of_money: activePayment?.sum_of_money,
                            // doc_number: activePayment?.doc_number,
                            // firm_id: activePayment?.firm?.id,
                            date_of_payment: activePayment?.date_of_payment,
                            order_id: activePayment?.order?.id
                        }
                    ))
                    setTimeout(() => {
                        dispatch(toggleMoneyOpDialog({flag: true, type: props.type} ))
                    }, 500)
                }
            }
        >
            <Cell>
                {props.date_payment}
            </Cell>
            <Cell>
                {props.operation}
            </Cell>
            <Cell>
                {props.count}
            </Cell>
            <Cell>
                {props.nachisleno}
            </Cell>
            <Cell>
                {props.summa}
            </Cell>
        </Row>
    )

}


export default PaymentTableRow