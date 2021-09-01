import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTableRows } from '../redux-state/async-actions/fetchTableRows';
import LeftTable from '../components/LeftTable';
import RightTable from '../components/RightTable';
import ContractDialog from '../components/ContractDialog';

const Wrapper = styled.div`
display: flex;
width: 100vw;
`;

const TableContainer = () => {
    const dispatch = useDispatch()
    const tables = useSelector(state => state.tableRows)

    React.useEffect(() => {
        dispatch(fetchTableRows(true))
        dispatch(fetchTableRows(false))
    }, [])
    console.log(tables)
    return <Wrapper>
        <ContractDialog />
        <LeftTable
            rows={tables.left}
        />
        <RightTable
            rows={tables.right}
        />
    </Wrapper>
}

export default TableContainer;


// [
//     {
//         time: '10:20',
//         numberAuto: '0634BK750',
//         model: 'Skoda Rapid',
//         place: 'Москва, ул Маломосковская',
//         client: 'Алексей Викторович',
//         payment: '5000.00',
//         balance: '5000.00',
//         days: '1',
//         returnDate: '20.20.2021',
//         contract: '1-23-45-67',
//         comment: 'Москва, ул Маломосковская',
//         mark: 'Москва, ул Маломосковская',
//     }
// ]