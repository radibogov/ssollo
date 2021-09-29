const SET_ALL_COMMENT = 'SET_ALL_COMMENT'
const SET_ORDERID_COMMENT = 'SET_ORDERID_COMMENT'
const SET_COMMENT_COMMENT = 'SET_COMMENT_COMMENT'
const SET_ACTION_COMMENT = 'SET_ACTION_COMMENT'
const SET_DATE_COMMENT = 'SET_DATE_COMMENT'
const SET_IMAGE_COMMENT = 'SET_IMAGE_COMMENT'
const CLEAR_COMMENT_FORM = 'CLEAR_COMMENT_FORM'


const defaultState = {
    order_id: null,
    image: null,
    img_flag: false,
    action: '',
    date: '',
    comment: ''
}

export const commentReducer = (state = defaultState, action) => {

    switch (action.type) {
        case SET_ALL_COMMENT:
            return {
                id: action.payload.id,
                order_id: action.payload.order_id,
                action: action.payload.action,
                image: action.payload.image,
                img_flag: false,
                date: action.payload.date,
                comment: action.payload.comment
            }
        case SET_ORDERID_COMMENT:
            return {
                ...state,
                order_id: action.payload
            }
        case SET_IMAGE_COMMENT:
            return {
                ...state,
                image: action.payload.img,
                img_flag: action.payload.flag
            }
        case SET_ACTION_COMMENT:
            return {
                ...state,
                action: action.payload,
            }
        case SET_DATE_COMMENT:
            return {
                ...state,
                date: action.payload,
            }
        case SET_COMMENT_COMMENT:
            return {
                ...state,
                comment: action.payload
            }
        case CLEAR_COMMENT_FORM:
            return {
                ...defaultState
            }
        default:
            return state
    }
}


export const setAllComment = payload => { return { type: SET_ALL_COMMENT, payload } }
export const setOrderIdComment = payload => { return { type: SET_ORDERID_COMMENT, payload } }
export const setImageComment = payload => { return { type: SET_IMAGE_COMMENT, payload } }
export const setCommentComment = payload => { return { type: SET_COMMENT_COMMENT, payload } }
export const setActionComment = payload => { return { type: SET_ACTION_COMMENT, payload } }
export const setDateComment = payload => { return { type: SET_DATE_COMMENT, payload } }
export const clearCommentForm = _ => { return { type: CLEAR_COMMENT_FORM } }
