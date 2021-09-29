import React from 'react'
import styled from 'styled-components'
import {useDispatch} from 'react-redux';
import {setCurrentPayment} from '../../redux-state/reducers/currentRowReducer';
import {toggleMoneyOpDialog} from '../../redux-state/reducers/DialogsReducer';
import {getOnePayment} from "../../redux-state/async-actions/payment/getOnePayment";


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
    return (
        <Row
        style={{
            background: props.isCurrent ? 'lightblue' : ''
        }}
            onClick={
                () => {
                    dispatch(setCurrentPayment(props.id))

                }
            }
            onDoubleClick={
                () => {
                    dispatch(getOnePayment(props.id))
                    setTimeout(() => {
                        dispatch(toggleMoneyOpDialog({flag: true, type: props.type}))
                    }, 200)
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