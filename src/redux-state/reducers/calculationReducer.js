
const SET_ORDER_ID = 'SET_ORDER_ID'
const SET_DEPOSIT = 'SET_DEPOSIT'
const SET_DELAY = 'SET_DELAY'
const SET_FUEL_BEFORE = 'SET_FUEL_BEFORE'
const SET_FUEL_AFTER = 'SET_FUEL_AFTER'
const SET_MILEAGE_BEFORE = 'SET_MILEAGE_BEFORE'
const SET_MILEAGE_AFTER = 'SET_MILEAGE_AFTER'
const CLEAR_FORM = 'CLEAR_FORM'
const SET_CALC_LIST = 'SET_CALC_LIST'

const defaultState = {
    order_id: null,
    deposit: null,
    //просроченных дней
    delay: null,
    fuel_before: null,
    fuel_after: null,
    mileage_before: null,
    mileage_after: null,
    list: []
}

export const calculationReducer = (state = defaultState, action) => {

    switch (action.type) {
        case SET_ORDER_ID:
            return {
                ...state,
                order_id: action.payload
            }
        case SET_DEPOSIT:
            return {
                ...state,
                deposit: action.payload
            }
        case SET_DELAY:
            return {
                ...state,
                delay: action.payload
            }
        case SET_FUEL_BEFORE:
            return {
                ...state,
                fuel_before: action.payload
            }
        case SET_FUEL_AFTER:
            return {
                ...state,
                fuel_after: action.payload
            }
        case SET_MILEAGE_BEFORE:
            return {
                ...state,
                mileage_before: action.payload
            }
        case SET_MILEAGE_AFTER:
            return {
                ...state,
                mileage_after: action.payload
            }
        case CLEAR_FORM:
            return {
                order_id: null,
                deposit: null,
                delay: null,
                fuel_before: null,
                fuel_after: null,
                mileage_before: null,
                mileage_after: null
            }
        case SET_CALC_LIST:
            return {
                ...state,
                list: action.payload
            }

        default:
            return state
    }

}


export const setOrderId = (payload) => { return { type: SET_ORDER_ID, payload } }
export const setDeposit = (payload) => { return { type: SET_DEPOSIT, payload } }
export const setDelay = (payload) => { return { type: SET_DELAY, payload } }
export const setFuelBefore = (payload) => { return { type: SET_FUEL_BEFORE, payload } }
export const setFuelAfter = (payload) => { return { type: SET_FUEL_AFTER, payload } }
export const setMileageBefore = (payload) => { return { type: SET_MILEAGE_BEFORE, payload } }
export const setMileageAfter = (payload) => { return { type: SET_MILEAGE_AFTER, payload } }
export const clearCalculateForm = (payload) => { return { type: CLEAR_FORM, payload } }
export const setCalcList = (payload) => { return { type: SET_CALC_LIST, payload } }