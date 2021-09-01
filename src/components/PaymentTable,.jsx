import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import PaymentTableRow from './PaymentTableRow';

const Wrapper = styled.div`
max-width: 100%;
overflow: scroll;
display: flex;
flex-direction: column;
height: 400px;
`;
const Row = styled.div`
white-space: nowrap;
flex-direction: row;
`;
const Cell = styled.div`
background-color: #dfdfdf;
white-space: nowrap;
display: inline-block;
padding: 2px 6px;
border-left: 1px solid #000;
border-right: 1px solid #000;
overflow: hidden;
min-width: 230px;
text-align: center;
`;

const PaymentTable = (props) => {
    const list = useSelector(state => state.calculation.list)

    return (
        <Wrapper>
            <Row>
                <Cell
                    style={{
                        backgroundColor: '#dfdfdf'
                    }}
                >
                    Дата платежа
                </Cell>
                <Cell
                    style={{
                        backgroundColor: '#dfdfdf'
                    }}
                >
                    Операция
                </Cell>
                <Cell
                    style={{
                        backgroundColor: '#dfdfdf'
                    }}
                >
                    Период с
                </Cell>
                <Cell
                    style={{
                        backgroundColor: '#dfdfdf'
                    }}
                >
                    По дату
                </Cell>
                <Cell
                    style={{
                        backgroundColor: '#dfdfdf'
                    }}
                >
                    Колличество
                </Cell>
                <Cell
                    style={{
                        backgroundColor: '#dfdfdf'
                    }}
                >
                    Начислено
                </Cell>
                <Cell
                    style={{
                        backgroundColor: '#dfdfdf'
                    }}
                >
                    Сумма
                </Cell>
                <Cell
                    style={{
                        backgroundColor: '#dfdfdf'
                    }}
                >
                    Услуга
                </Cell>
            </Row>
            {list.map(el =>
                <PaymentTableRow
                    date_payment
                    operation
                    period
                    po_datu
                    collichestvo
                    nachisleno
                    summa
                    usluga
                />
            )}
        </Wrapper>
    )
}

export default React.memo(PaymentTable)