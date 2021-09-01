import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPayment } from '../redux-state/reducers/currentRowReducer';
import { toggleMoneyOpDialog } from '../redux-state/reducers/DialogsReducer';


const Row = styled.div`
white-space: nowrap;
flex-direction: row;
transition: .2s;
cursor: pointer;
width: 1450px;
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
                    dispatch(toggleMoneyOpDialog(true))
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
                {props.collichestvo}
            </Cell>
            <Cell>
                {props.nachisleno}
            </Cell>
            <Cell>
                {props.summa}
            </Cell>
            <Cell>
                {props.usluga}
            </Cell>
        </Row>
    )

}


export default PaymentTableRow