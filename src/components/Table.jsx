import React from 'react'
import styled from 'styled-components'
import TableRow from './TableRow';

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

`;

const Table = (props) => {
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
    const Wrapper = styled.div`
    max-width: ${props.width ? props.width + '%' : '50%'};
    overflow: scroll;
    display: flex;
    flex-direction: column;
    height: 400px;
`;


    /*     const [widthState, setWidthState] = React.useState({
            time: 140,
            numberAuto: 140,
            model: 140,
            place: 140,
            client: 140,
            payment: 140,
            balance: 140,
            days: 140,
            returnDate: 140,
            contract: 140,
            comment: 140,
            mark: 140,
        })
        function widthConstructor(prop, value) {
            this.time = widthState.time;
            this.numberAuto = widthState.numberAuto;
            this.model = widthState.model;
            this.place = widthState.place;
            this.client = widthState.client;
            this.payment = widthState.payment;
            this.balance = widthState.balance;
            this.days = widthState.days;
            this.returnDate = widthState.returnDate;
            this.contract = widthState.contract;
            this.comment = widthState.comment;
            this.mark = widthState.mark;
            this[prop] = value;
        } */

    const timeRef = React.useRef(),
        autoRef = React.useRef(),
        modelRef = React.useRef(),
        placeRef = React.useRef(),
        clientRef = React.useRef()
    React.useEffect(() => {
        var p = timeRef.current // element to make resizable

        p.addEventListener('click', function init() {
            p.removeEventListener('click', init, false);
            p.className = p.className + ' resizable';
            var resizer = document.createElement('div');
            resizer.className = 'resizer';
            p.appendChild(resizer);
            resizer.addEventListener('mousedown', initDrag, false);
        }, false);

        var startX, startY, startWidth, startHeight;

        function initDrag(e) {
            startX = e.clientX;
            startY = e.clientY;
            startWidth = parseInt(document.defaultView.getComputedStyle(p).width, 10);
            startHeight = parseInt(document.defaultView.getComputedStyle(p).height, 10);
            document.documentElement.addEventListener('mousemove', doDrag, false);
            document.documentElement.addEventListener('mouseup', stopDrag, false);
        }

        function doDrag(e) {
            p.style.width = (startWidth + e.clientX - startX) + 'px';
            p.style.height = (startHeight + e.clientY - startY) + 'px';
        }

        function stopDrag(e) {
            document.documentElement.removeEventListener('mousemove', doDrag, false);
            document.documentElement.removeEventListener('mouseup', stopDrag, false);
        }
    }, [])

    return <Wrapper>
        <Row>
            <Cell ref={timeRef}>
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
            /*                 widthState={widthState} */
            />
        )}

    </Wrapper>
}

export default Table;