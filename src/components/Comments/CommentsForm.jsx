import React from 'react'
import styled from 'styled-components'
import moment from "moment";
import CommentsFormBottom from './CommentsFormBottom'
import {useDispatch, useSelector} from "react-redux";
import {fetchComment} from "../../redux-state/async-actions/comments/fetchComment";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import {deleteComment} from "../../redux-state/async-actions/comments/deleteComment";
import {setAllComment} from "../../redux-state/reducers/commentReducer";

const Wrapper = styled.div`
width: 90%;
margin: 20px auto;
`;
const Row = styled.div`
position: relative;
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
display: flex;
flex-direction: column;
width: 60%;
`;
const FormBtn = styled.div`
position: absolute;
display: flex;
flex-direction: row;
bottom: 0;
right: 0;
`;
const Header = styled.h2`
  padding-top: 7px;
  font-size: 20px;
  margin-bottom: 0;
`;
const Text = styled.p`
    margin-bottom: 0;
`;
const FormDate = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 200px;
`;

const CommentsForm = () => {
    const dispatch = useDispatch();
    const id = useSelector(state => state.contractForm.id);
    const commentsRow = useSelector(state => state.commentsRow);

    React.useEffect(() => {
        dispatch(fetchComment(id))
    }, [dispatch, id]);


    return <Wrapper>
        {commentsRow.comments?.map((item) =>
                <Row key={item.id}>
                    <Image
                        src={item.image}
                    />
                    <FormText>
                        <Header>Комментарий</Header>
                        <Text>
                            {item.comment}
                        </Text>
                        <Text style={{fontWeight: 'bold', marginBottom: '10px'}}>{
                            item.action==="return"?
                                'Будет возвращать'
                                :
                            item.action==="extend"?
                                'Будет продлевать'
                            : null
                        }</Text>
                    </FormText>
                    <FormDate>
                        {moment(item.date).format('DD-MM-YYYY')}
                    </FormDate>
                    <FormBtn >
                        <Tooltip title="Изменить">
                            <IconButton onClick={
                                () => {
                                    dispatch(setAllComment({
                                        id: item.id,
                                        order_id: item.order_id,
                                        image: item.image,
                                        date: item.date,
                                        action: item.action,
                                        comment: item.comment
                                    }))
                                    try {
                                        const el = document.getElementById('comment-form');
                                        el.scrollIntoView({behavior: "smooth"});
                                    } catch {

                                    }
                                }
                            }>
                                <CreateIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Удалить">
                            <IconButton onClick={
                                () => {
                                    dispatch(deleteComment(item.id));
                                    setTimeout(() => {
                                        dispatch(fetchComment(id))
                                    }, 200)
                                }
                            }>
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                    </FormBtn>
                </Row>
            )
        }
        <CommentsFormBottom />
    </Wrapper>
}

export default CommentsForm;