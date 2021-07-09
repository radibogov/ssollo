import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const FormWrapper = styled.form`
width: 70%;
margin: 20px auto;
`;
const InputRow = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
margin: 10px 0;
`;

const PaymentForm = () => {
    const [checked, setChecked] = React.useState(false)

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };


    return <FormWrapper>
        <InputRow>
            <TextField id="filled-basic" label="Залог" variant="filled" style={{ marginRight: '20px' }} />
            <Button variant="contained" color="primary" style={{ marginRight: '20px' }}>
                Залог
            </Button>
            <Button variant="contained" color="primary" style={{ marginRight: '20px' }}>
                Возврат
            </Button>
            <TextField id="filled-basic" label="Топливо в начале" variant="filled" style={{ marginRight: '20px' }} />
            <TextField id="filled-basic" label="Пробег начало" variant="filled" style={{ marginRight: '20px' }} />
        </InputRow>
        <InputRow>
            <TextField id="filled-basic" label="Просрочка" variant="filled" style={{ marginRight: '20px' }} />
            <Button variant="contained" color="primary" style={{ marginRight: '20px', width: '200px' }}>
                Просрочка
            </Button>

            <TextField id="filled-basic" label="Топливо в конце" variant="filled" style={{ marginRight: '20px' }} />
            <TextField id="filled-basic" label="Пробег конец" variant="filled" style={{ marginRight: '20px' }} />
        </InputRow>
        <InputRow>
            <TextField id="filled-basic" label="Дней" variant="filled" style={{ marginRight: '240px' }} />
            <TextField id="filled-basic" label="Топливо разница" variant="filled" style={{ marginRight: '20px' }} />
            <TextField id="filled-basic" label="Километраж" variant="filled" style={{ marginRight: '20px' }} />
        </InputRow>
        <InputRow>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        name="checkedB"
                        color="primary"
                    />
                }
                label="Задержан"
                style={{ marginRight: '600px' }}
            />
            <TextField id="filled-basic" label="Перепробег" variant="filled" style={{ marginRight: '20px' }} />
        </InputRow>
        <InputRow>
            <TextField id="filled-basic" label="За перепробег" variant="filled" style={{ marginLeft: '705px' }} />
        </InputRow>
    </FormWrapper>
}


export default PaymentForm;