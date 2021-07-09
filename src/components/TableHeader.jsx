import React from 'react'
import styled from 'styled-components'


const Row = styled.div`


    display: flex;
    flex-direction: row;
`;
const Cell = styled.div`
    background-color: #dfdfdf;
    white-space: nowrap;
    padding: 2px 4px;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    overflow: hidden;
    min-width: 140px;
`;

const TableHeader = () => {


    return <Row>
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
        <Cell>
            Примечание
        </Cell>
        <Cell>
            Отметки
        </Cell>
    </Row>
}

export default React.memo(TableHeader)