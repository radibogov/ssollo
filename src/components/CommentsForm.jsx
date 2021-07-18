import React from 'react'
import styled from 'styled-components'
import testImage from '../images/testimg.jpg'
import CommentsFormHeader from './CommentsFormHeader'

const Wrapper = styled.div`
width: 90%;
margin: 20px auto;
`;
const Row = styled.div`
width: 100%;
min-height: 160px;
margin: 20px 0;
border-top: 1px solid #dfdfdf;
border-bottom: 1px solid #dfdfdf;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
`;

const Image = styled.img`
width: 190px;
margin-left: 10px;
`;
const FormText = styled.div`
width: 60%;
`;
const FormDate = styled.div`

`;

const CommentsForm = () => {



    return <Wrapper>
        <CommentsFormHeader/>
        <Row>
            <Image
                src={testImage}
            />
            <FormText>
                очень длинный комментарий
                очень длинный комментарий
                очень длинный комментарий
                очень длинный комментарий
                очень длинный комментарий
                очень длинный комментарий
                очень длинный комментарий
                очень длинный комментарий
                очень длинный комментарий
                очень длинный комментарий
                очень длинный комментарий
                очень длинный комментарий
                очень длинный комментарий
                очень длинный комментарий
            </FormText>
            <FormDate>
                12.23.2021 20:20
            </FormDate>
        </Row>

        <Row>
            <Image
                src={testImage}
            />
            <FormText>
                очень длинный комментарий
                очень длинный комментарий
                очень длинный комментарий
                очень длинный комментарий
                очень длинный комментарий
                очень длинный комментарий
                очень длинный комментарий
                очень длинный комментарий
                очень длинный комментарий
                очень длинный комментарий
                очень длинный комментарий
                очень длинный комментарий
                очень длинный комментарий
                очень длинный комментарий
            </FormText>
            <FormDate>
                12.23.2021 20:20
            </FormDate>
        </Row>

    </Wrapper>
}

export default CommentsForm;