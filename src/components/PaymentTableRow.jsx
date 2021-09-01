import React from 'react'
import styled from 'styled-components'



const Row = styled.div`
white-space: nowrap;
flex-direction: row;
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
`;

const PaymentTableRow = (props) => {


    return (
        <Row>
            <Cell>
                {props.date_payment}
            </Cell>
            <Cell>
                {props.operation}
            </Cell>
            <Cell>
                {props.period}
            </Cell>
            <Cell>
                {props.po_datu}
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