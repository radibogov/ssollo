import React from 'react';
import styled from 'styled-components';
import TopNav from '../containers/TopNav';
import TableContainer from '../containers/TableContainer';
import Error from "./Error";

const Wrapper = styled.div`

`;

const MainPage = () => {


    return <Wrapper>
            <TopNav/>
            <TableContainer/>
            <Error />
        </Wrapper>
}

export default MainPage