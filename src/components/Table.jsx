import React from 'react'
import styled from 'styled-components'
import TableHeader from './TableHeader';
import TableRow from './TableRow';

const Wrapper = styled.div`
max-width: 50%;
overflow: scroll;
display: flex;
flex-direction: column;
height: 400px;
`;

const Table = () => {
    const testArr = [
        {
            time: '10:20',
            numberAuto: '0634BK750',
            model: 'Skoda Rapid',
            place: 'Москва, ул Маломосковская',
            client: 'Алексей Викторович',
            payment: '5000.00',
            balance: '5000.00',
            days: '1',
            returnDate: '20.20.2021',
            contract: '1-23-45-67',
            comment: 'Москва, ул Маломосковская',
            mark: 'Москва, ул Маломосковская',
        },
        {
            time: '10:20',
            numberAuto: '0634BK750',
            model: 'Skoda Rapid',
            place: 'Москва, ул Маломосковская',
            client: 'Алексей Викторович',
            payment: '5000.00',
            balance: '5000.00',
            days: '1',
            returnDate: '20.20.2021',
            contract: '1-23-45-67',
            comment: 'Москва, ул Маломосковская',
            mark: 'Москва, ул Маломосковская',
        },
        {
            time: '10:20',
            numberAuto: '0634BK750',
            model: 'Skoda Rapid',
            place: 'Москва, ул Маломосковская',
            client: 'Алексей Викторович',
            payment: '5000.00',
            balance: '5000.00',
            days: '1',
            returnDate: '20.20.2021',
            contract: '1-23-45-67',
            comment: 'Москва, ул Маломосковская',
            mark: 'Москва, ул Маломосковская',
        },
        {
            time: '10:20',
            numberAuto: '0634BK750',
            model: 'Skoda Rapid',
            place: 'Москва, ул Маломосковская',
            client: 'Алексей Викторович',
            payment: '5000.00',
            balance: '5000.00',
            days: '1',
            returnDate: '20.20.2021',
            contract: '1-23-45-67',
            comment: 'Москва, ул Маломосковская',
            mark: 'Москва, ул Маломосковская',
        },
    ]

    return <Wrapper>
        <TableHeader />
        {testArr.map((item) =>
            <TableRow
                time={item.time}
                numberAuto={item.numberAuto}
                model={item.model}
                place={item.place}
                client={item.client}
                payment={item.payment}
                balance={item.balance}
                days={item.days}
                returnDate={item.returnDate}
                contract={item.contract}
                comment={item.comment}
                mark={item.mark}
            />
        )}

    </Wrapper>
}

export default Table;