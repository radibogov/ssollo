import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import PaymentTableRow from './PaymentTableRow';
import moment from 'moment';
import MoneyOperationDialog from './MoneyOperationDialog';
import { fetchServices } from '../redux-state/async-actions/services/fetchServices';

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
    const dispatch = useDispatch()
    const list = useSelector(state => state.calculation.list)
    const current = useSelector(state => state.currentRow.payment)
    React.useEffect(() => {
        dispatch(fetchServices())
    }, [])
    return (
        <Wrapper>
            <MoneyOperationDialog/>
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
                    date_payment={el.date_of_payment && moment(el.date_of_payment).format('DD / MM / YYYY')}
                    operation={el.operation}
                    collichestvo
                    nachisleno={el.payment}
                    summa={el.sum_of_money}
                    isCurrent={el.id === current}
                    id={el.id}
                    key={el.id}
                />
            )}
        </Wrapper>
    )
}

export default React.memo(PaymentTable)