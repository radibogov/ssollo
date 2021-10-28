import React, {useEffect} from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import moment from "moment";
import {useDispatch, useSelector} from "react-redux";
import {
    clearCommentForm,
    setActionComment,
    setCommentComment,
    setDateComment,
    setImageComment, setMarkComment,
    setOrderIdComment
} from "../../redux-state/reducers/commentReducer";
import {createComment} from "../../redux-state/async-actions/comments/createComment";
import {updateComment} from "../../redux-state/async-actions/comments/updateComment";

const Wrapper = styled.form`
width: 100%;
margin: 20px auto;
padding: 20px;
display: flex;
flex-direction: column;
color: #fff;
border: 1px solid #dfdfdf;
border-radius: .5rem;
`;
const HiddenFileInput = styled.input`
display: none;
`;
const InputRow = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: 10px 0;
`;
const InputImg = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100px;
`;
const CommentsFormBottom = () => {
    const dispatch = useDispatch();
    const hiddenInp = React.useRef()
    const id = useSelector(state => state.contractForm.id);
    const commentsForm = useSelector(state => state.commentsForm);

    useEffect(() => {
        if (commentsForm.date === '') {
            dispatch(setDateComment(moment().format('YYYY-MM-DD')))
        }
        if (commentsForm.order_id === null) {
            dispatch(setOrderIdComment(id))
        }
    })

    const fileHandler = event => {
        let reader = new FileReader();
        reader.onload = function (e) {
            dispatch(setImageComment({img: e.target.result, flag: true}))
        };
        reader.readAsDataURL(event.target.files[0]);
    };

    const formSubmit = (e) => {
        e.preventDefault()

        if (commentsForm.id) {
            commentsForm.img_flag ?
                dispatch(updateComment(commentsForm.id, commentsForm,id))
                :
                dispatch(updateComment(commentsForm.id, {
                    order_id: commentsForm.order_id,
                    action: commentsForm.action,
                    date: commentsForm.date,
                    comment: commentsForm.comment
                },id))
        } else {
            dispatch(createComment(commentsForm,id))
        }
        dispatch(clearCommentForm())
    }
    return <Wrapper id={'comment-form'} onSubmit={formSubmit}>
        <InputRow>
            <TextField required
                       id="filled-disabled"
                       variant="filled"
                       label="Замечания"
                       style={{width: '75%'}}
                       value={commentsForm.comment}
                       onChange={(event => {
                           dispatch(setCommentComment(event.target.value))
                       })}
            />
            <TextField required
                       id="date"
                       label="Дата"
                       type="date"
                       value={commentsForm.date}
                       onChange={
                           (event) => {
                               dispatch(setDateComment(event.target.value))
                           }
                       }
                       InputLabelProps={{
                           shrink: true,
                }}
            />
        </InputRow>
        <InputRow>
            <TextField required
                       id="filled-disabled"
                       variant="filled"
                       label="Примечания"
                       style={{width: '75%'}}
                       value={commentsForm.mark}
                       onChange={(event => {
                           dispatch(setMarkComment(event.target.value))
                       })}
            />
        </InputRow>
        <InputRow>
            <RadioGroup aria-label="quiz" name="quiz"
                        value={commentsForm.action}
                        onChange={ event => {
                    dispatch(setActionComment(event.target.value))
                }
            }>
                <FormControlLabel style={{color: 'black'}} value="return" control={<Radio />} label="Будет возвращать" />
                <FormControlLabel style={{color: 'black'}} value="extend" control={<Radio />} label="Будет продлевать" />
            </RadioGroup>
            <InputImg>
                {!commentsForm.image?
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
                    :
                    <img onClick={
                        () => {
                            hiddenInp.current.click()
                        }
                    } style={{height: '100px'}} src={commentsForm.image? commentsForm.image : null} alt={'img'}/>
                }
                <HiddenFileInput
                    onChange={fileHandler}
                    type="file"
                    ref={hiddenInp}
                />
            </InputImg>
            <Button
                variant="contained"
                color="primary"
                startIcon={<SaveIcon/>}
                type='submit'
            >
                Сохранить
            </Button>
        </InputRow>
    </Wrapper>
}

export default CommentsFormBottom