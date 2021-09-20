
const SET_EMPLOYEE_ID = 'SET_EMPLOYEE_ID'
const SET_CLIENT_ID = 'SET_CLIENT_ID'
const SET_CAR_ID = 'SET_CAR_ID'
const SET_OPERATION = 'SET_OPERATION'
const SET_PAYMENT = 'SET_PAYMENT'
const SET_SERVICE = 'SET_SERVICE'
const SET_COUNT = 'SET_COUNT'
const SET_ACCRUED = 'SET_ACCRUED'
const SET_SUM_OF_MONEY = 'SET_SUM_OF_MONEY'
const SET_DOC_NUMBER = 'SET_DOC_NUMBER'
const SET_FIRM_ID = 'SET_FIRM_ID'
const SET_DATE_OF_PAYMENT = 'SET_DATE_OF_PAYMENT'
const SET_ORDER_ID = 'SET_ORDER_ID'
const CLEAR_FORM = 'CLEAR_FORM'





const defaultState = {
    employee_id: '',
    employee_name: '',
    client_id: '',

    car_id: '',

    operation: '',
    payment: '',

    count: '',

    service_id: '',
    service_name: '',
    service_price: '',

    accrued:'',

    sum_of_money: '',
    doc_number: '',

    firm_id: '',
    firm_name: '',

    date_of_payment: '',
    order_id: ''
}


export const paymentReducer = (state = defaultState, action) => {

    switch (action.type) {
        case SET_EMPLOYEE_ID:
            return {
                ...state,
                employee_id: action.payload.id,
                employee_name: action.payload.name
            }
        case SET_CLIENT_ID:
            return {
                ...state,
                client_id: action.payload
            }
        case SET_CAR_ID:
            return {
                ...state,
                car_id: action.payload
            }
        case SET_OPERATION:
            return {
                ...state,
                operation: action.payload
            }
        case SET_PAYMENT:
            return {
                ...state,
                payment: action.payload
            }
        case SET_SERVICE:
            return {
                ...state,
                service_id: action.payload.id,
                service_name: action.payload.name,
                service_price: action.payload.price,
            }
        case SET_COUNT:
            return {
                ...state,
                count: action.payload
            }
        case SET_ACCRUED:
            return {
                ...state,
                accrued: action.payload
            }
        case SET_SUM_OF_MONEY:
            return {
                ...state,
                sum_of_money: action.payload
            }
        case SET_DOC_NUMBER:
            return {
                ...state,
                doc_number: action.payload
            }
        case SET_FIRM_ID:
            return {
                ...state,
                firm_id: action.payload.id,
                firm_name: action.payload.name
            }
        case SET_DATE_OF_PAYMENT:
            return {
                ...state,
                date_of_payment: action.payload
            }
        case SET_ORDER_ID:
            return {
                ...state,
                order_id: action.payload
            }
        case CLEAR_FORM:
            return {
                ...defaultState
            }
        default:
            return state
    }
}


export const setEmployeePayment = payload => { return { type: SET_EMPLOYEE_ID, payload } }
export const setClientId = payload => { return { type: SET_CLIENT_ID, payload } }
export const setCarIdPayment = payload => { return { type: SET_CAR_ID, payload } }
export const setOperation = payload => { return { type: SET_OPERATION, payload } }
export const setPayment = payload => { return { type: SET_PAYMENT, payload } }
export const setService = payload => { return { type: SET_SERVICE, payload } }
export const setCountPayment = payload => { return { type: SET_COUNT, payload } }
export const setAccruedPayment = payload => { return { type: SET_ACCRUED, payload } }
export const setSumOfMoney = payload => { return { type: SET_SUM_OF_MONEY, payload } }
export const setDocNumber = payload => { return { type: SET_DOC_NUMBER, payload } }
export const setFirmIdPayment = payload => { return { type: SET_FIRM_ID, payload } }
export const setDateOfPayment = payload => { return { type: SET_DATE_OF_PAYMENT, payload } }
export const setOrderId = payload => { return { type: SET_ORDER_ID, payload } }
export const clearPaymentForm = () => { return { type: CLEAR_FORM } }