import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { setCalcList } from "../redux-state/reducers/calculationReducer";
import {
  setCurrentLeft,
  setCurrentRight,
} from "../redux-state/reducers/currentRowReducer";
import { toggleContractDialog } from "../redux-state/reducers/DialogsReducer";
import moment from "moment";
import {setContractForm} from "../redux-state/reducers/contractFormReducer";
import {setActiveCar} from "../redux-state/reducers/listsReducer";

const Row = styled.div`
white-space: nowrap;
width: 2930px;
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
                    dispatch(setActiveCar(props.automobile));
                    dispatch(setContractForm(props))
                    dispatch(setCalcList(props.list))
                    dispatch(toggleContractDialog(true))
                }
            }
        >
            <Cell>
                {props.side==='left'?moment(props.start_datetime).format('HH:mm DD-MM-YYYY '):moment(props.end_datetime).format('HH:mm DD-MM-YYYY ')}
            </Cell>
            <Cell>
                {props.gos_number}
            </Cell>
            <Cell>
                {props.auto_name}
            </Cell>
            <Cell>
                {props.side==='left'?props.address_gave:props.address_received}
            </Cell>
            <Cell>
                {props.client_name}
            </Cell>
            <Cell>
                {props.summa_prokata}
            </Cell>
            <Cell>
                {props.balance}
            </Cell>
            <Cell>
                {props.days_first}
            </Cell>
            <Cell>
                {props.side==='right'?moment(props.start_datetime).format('HH:mm DD-MM-YYYY '):moment(props.end_datetime).format('HH:mm DD-MM-YYYY ')}
            </Cell>
            <Cell>
                {props.contract_number}
            </Cell>
            <Cell>
                {props.comment}
            </Cell>
            <Cell>
                {props.marks}
            </Cell>
        </Row>
    </>
  );
};

export default React.memo(TableRow);
