import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const Wrapper = styled.form`
width: 100%;
height: 100px;
margin: 20px auto;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
color: #fff;
border: 1px solid #dfdfdf;
border-radius: .5rem;
`;
const HiddenFileInput = styled.input`
display: none;
`;

const CommentsFormHeader = () => {
    const hiddenInp = React.useRef()


    return <Wrapper>
        <Button
            variant="contained"
            color="default"
            startIcon={<CloudUploadIcon />}
            onClick={
                () => {
                    hiddenInp.current.click()
                }
            }
        >
            Загрузить фото
        </Button>
        <HiddenFileInput
            type="file"
            ref={hiddenInp}
        />
        <TextField
            id="filled-disabled"
            label="Комментарий"
            style={{width: '50%'}}
        />
        <Button
            variant="contained"
            color="primary"
            startIcon={<SaveIcon />}
        >
            Сохранить
        </Button>
    </Wrapper>
}

export default CommentsFormHeader