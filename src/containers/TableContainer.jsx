import React from 'react'
import styled from 'styled-components'
import Table from '../components/Table';

const Wrapper = styled.div`
display: flex;
width: 100vw;
`;

const TableContainer = () => {


    return <Wrapper>
        <Table />
        <Table />
    </Wrapper>
}

export default TableContainer;