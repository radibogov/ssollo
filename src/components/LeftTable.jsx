import React from 'react'
import styled from 'styled-components'
import TableRow from './TableRow';
import moment from 'moment';
import { useSelector } from 'react-redux';

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

const LeftTable = (props) => {

    const Wrapper = styled.div`
    max-width: ${props.width ? props.width + '%' : '50%'};
    overflow: scroll;
    display: flex;
    flex-direction: column;
    height: 400px;
    `;
    const current = useSelector(state => state.currentRow.left)

    return <Wrapper>
        <Row>
            <Cell>
                Время
            </Cell>
            <Cell>
                Автомобиль
            </Cell>
            <Cell>
                Модель автомобиля
            </Cell>
            <Cell>
                Место выдачи
            </Cell>
            <Cell>
                Клиент
            </Cell>
            <Cell>
                Оплата
            </Cell>
            <Cell>
                Баланс
            </Cell>
            <Cell>
                Дней
            </Cell>
            <Cell>
                Дата возврата
            </Cell>
            <Cell>
                Дог. №
            </Cell>
            {/* <Cell>
                Примечание
            </Cell>
            <Cell>
                Отметки
            </Cell> */}
        </Row>
        {props.rows.map((item) =>
            <TableRow
                key={item.id}
                time={item.start_datetime && moment(item.start_datetime).format('DD / MM / YYYY')}
                numberAuto={item.real_auto}
                model={item.automobile.name}
                place={item.address_gave}
                // client={item.user !== null ? item.user : ''}
                payment={item.payment}
                balance={item.automobile.deposit}
                days={item.days_second - item.days_first}
                returnDate={item.returnDate}
                contract={item.contract_number}
                // comment={item.comment}
                // mark={item.mark}
                /*                 widthState={widthState} */
                list={item.calculation}
                isCurrent={current == item.id}
                side='left'
                id={item.id}
            />
        )}

    </Wrapper>
}

export default LeftTable;