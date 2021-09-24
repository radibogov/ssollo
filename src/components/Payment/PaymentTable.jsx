import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import PaymentTableRow from './PaymentTableRow';
import moment from 'moment';
import { fetchServices } from '../../redux-state/async-actions/services/fetchServices';

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
    const uch_number = useSelector(state => state.contractForm.uch_number)
    const current = useSelector(state => state.currentRow.payment)
    React.useEffect(() => {
        dispatch(fetchServices())
    }, [])
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
                    Услуга
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
            </Row>
            {list?.map(el =>
                <PaymentTableRow
                    date_payment={el.date_of_payment && moment(el.date_of_payment).format('HH:mm DD / MM / YYYY')}
                    operation={el.is_deposit? 'Оплата залога':
                                el.is_main_payment? 'За прокат по договору №' + uch_number:
                                el.service?.name
                    }
                    count={el.count}
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