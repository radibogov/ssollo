import React from 'react'
import styled from 'styled-components'

import { useDispatch, useSelector } from 'react-redux';
import { setCalcList } from '../redux-state/reducers/calculationReducer';
import { setCurrentLeft, setCurrentRight } from '../redux-state/reducers/currentRowReducer';
import { toggleContractDialog } from '../redux-state/reducers/DialogsReducer';

const Row = styled.div`
white-space: nowrap;
width: 2440px;
transition: .2s;
    :hover{
        background: #eee;

        cursor: pointer;
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
    height: 100%;
    text-align: center;
`;



const TableRow = (props) => {
    const dispatch = useDispatch()
    const rowRef = React.useRef()


    
    return <>




        <Row
            style={{
                background: props.isCurrent ? 'lightblue' : ''
            }}
            ref={rowRef}
            onClick={
                () => {
                    if (props.side === 'right') {
                        dispatch(setCurrentRight(props.id))
                    } else if (props.side === 'left') {
                        dispatch(setCurrentLeft(props.id))
                    }

                }
            }
            onDoubleClick={
                () => {
                    dispatch(setCalcList(props.list))
                    dispatch(toggleContractDialog(true))
                }
            }
        >
            <Cell>
                {props.time}
            </Cell>
            <Cell>
                {props.numberAuto}
            </Cell>
            <Cell>
                {props.model}
            </Cell>
            <Cell>
                {props.place}
            </Cell>
            <Cell>
                {props.client}
            </Cell>
            <Cell>
                {props.payment}
            </Cell>
            <Cell>
                {props.balance}
            </Cell>
            <Cell>
                {props.days}
            </Cell>
            <Cell>
                {props.returnDate}
            </Cell>
            <Cell>
                {props.contract}
            </Cell>
            {/* <Cell>
                {props.comment}
            </Cell>
            <Cell>
                {props.mark}
            </Cell> */}
        </Row>
    </>
}

export default React.memo(TableRow)