


const SET_MANAGER_OT_ID = 'SET_MANAGER_OT_ID'
const SET_MANAGER_PR_ID = 'SET_MANAGER_PR_ID'
const SET_AUTOMIBILE_ID = 'SET_AUTOMIBILE_ID'
const SET_CONTRACT_NUMBER = 'SET_CONTRACT_NUMBER'
const SET_UCH_NUMBER = 'SET_UCH_NUMBER'
const SET_GOD_NUMBER = 'SET_GOD_NUMBER'
const SET_REAL_AUTO_ID = 'SET_REAL_AUTO_ID'
const SET_USER_ID = 'SET_USER_ID'
const SET_RESPRESENTATIVE_FIRST = 'SET_RESPRESENTATIVE_FIRST'
const SET_RESPRESENTATIVE_SECOND = 'SET_RESPRESENTATIVE_SECOND'
const SET_START_DATETIME = 'SET_START_DATETIME'
const SET_END_DATETIME = 'SET_END_DATETIME'
const SET_TARIFF_DATE = 'SET_TARIFF_DATE'
const SET_IS_GIVEN = 'SET_IS_GIVEN'
const SET_IS_RETURNED = 'SET_IS_RETURNED'
const SET_DAYS_FIRST = 'SET_DAYS_FIRST'
const SET_DAYS_SECOND = 'SET_DAYS_SECOND'
const SET_DISCOUNDS_PERCENTS = 'SET_DISCOUNDS_PERCENTS'
const SET_DISCOUNT_SUM = 'SET_DISCOUNT_SUM'
const SET_DISCOUNT_REASON = 'SET_DISCOUNT_REASON'
const SET_SUMMA_PROKATA = 'SET_SUMMA_PROKATA'
const SET_PROKATA_TARIF = 'SET_PROKATA_TARIF'
const SET_FIRM_ID = 'SET_FIRM_ID'
const CLEAR_FORM = 'CLEAR_FORM'



const defaultState = {
    manager_ot_id: null,
    manager_pr_id: null,
    automobile_id: null,
    contract_number: null,
    uch_number: null,
    god_number: null,
    real_auto_id: '',
    auto_name: '',
    user_id: null,
    client_name: '',
    representative_first: null,
    representative_second: null,
    start_datetime: '',
    end_datetime: '',
    tariff_date: null,
    is_given: false,
    is_returned: false,
    days_first: null,
    days_second: null,
    discount_percents: null,
    discount_sum: null,
    discount_reason: null,
    summa_prokata: 0,
    summa_prokata_tarif: 8200,
    firm_id: null,
    firm_name: ''
}

export const contractFormReducer = (state = defaultState, action) => {



    switch (action.type) {
        case SET_MANAGER_OT_ID:
            return {
                ...state,
                manager_ot_id: action.payload
            }
        case SET_MANAGER_PR_ID:
            return {
                ...state,
                manager_pr_id: action.payload
            }
        case SET_AUTOMIBILE_ID:
            return {
                ...state,
                automobile_id: action.payload
            }
        case SET_CONTRACT_NUMBER:
            return {
                ...state,
                contract_number: action.payload
            }
        case SET_UCH_NUMBER:
            return {
                ...state,
                uch_number: action.payload
            }
        case SET_GOD_NUMBER:
            return {
                ...state,
                god_number: action.payload
            }
        case SET_REAL_AUTO_ID:
            return {
                ...state,
                real_auto_id: action.payload.id,
                auto_name: action.payload.name
            }
        case SET_USER_ID:
            return {
                ...state,
                user_id: action.payload.id,
                client_name: action.payload.name,
            }
        case SET_RESPRESENTATIVE_FIRST:
            return {
                ...state,
                representative_first: action.payload
            }
        case SET_RESPRESENTATIVE_SECOND:
            return {
                ...state,
                representative_second: action.payload
            }
        case SET_START_DATETIME:
            return {
                ...state,
                start_datetime: action.payload
            }
        case SET_END_DATETIME:
            return {
                ...state,
                end_datetime: action.payload
            }
        case SET_TARIFF_DATE:
            return {
                ...state,
                tariff_date: action.payload
            }
        case SET_IS_GIVEN:
            return {
                ...state,
                is_given: action.payload
            }
        case SET_IS_RETURNED:
            return {
                ...state,
                is_returned: !state.is_returned
            }
        case SET_DAYS_FIRST:
            return {
                ...state,
                days_first: action.payload
            }
        case SET_DAYS_SECOND:
            return {
                ...state,
                days_second: action.payload
            }
        case SET_DISCOUNDS_PERCENTS:
            return {
                ...state,
                discount_percents: action.payload
            }
        case SET_DISCOUNT_SUM:
            return {
                ...state,
                discount_sum: action.payload
            }
        case SET_DISCOUNT_REASON:
            return {
                ...state,
                discount_reason: action.payload
            }
        case SET_SUMMA_PROKATA:
            return {
                ...state,
                summa_prokata: action.payload
            }
        case SET_PROKATA_TARIF:
            return {
                ...state,
                summa_prokata_tarif: action.payload
            }
        case SET_FIRM_ID:
            return {
                ...state,
                firm_id: action.payload.id,
                firm_name: action.payload.name
            }
        case CLEAR_FORM:
            return {
                manager_ot_id: null,
                manager_pr_id: null,
                automobile_id: null,
                contract_number: null,
                uch_number: null,
                god_number: null,
                real_auto_id: '',
                auto_name: '',
                user_id: null,
                client_name: '',
                representative_first: null,
                representative_second: null,
                start_datetime: '',
                end_datetime: '',
                tariff_date: null,
                is_given: false,
                is_returned: false,
                days_first: null,
                days_second: null,
                discount_percents: null,
                discount_sum: null,
                discount_reason: null,
                summa_prokata: 0,
                summa_prokata_tarif: 8200,
                firm_id: null,
                firm_name: ''
            }



        default:
            return state
    }


}


export const setManagerOtId = (payload) => { return { type: SET_MANAGER_OT_ID, payload } }
export const setManagerPrId = (payload) => { return { type: SET_MANAGER_PR_ID, payload } }
export const setAutomobileId = (payload) => { return { type: SET_AUTOMIBILE_ID, payload } }
export const setContractNumber = (payload) => { return { type: SET_CONTRACT_NUMBER, payload } }
export const setUchNumber = (payload) => { return { type: SET_UCH_NUMBER, payload } }
export const setGodNumber = (payload) => { return { type: SET_GOD_NUMBER, payload } }
export const setRealAutoId = (payload) => { return { type: SET_REAL_AUTO_ID, payload } }
export const setUserID = (payload) => { return { type: SET_USER_ID, payload } }
export const setRepresentativeFirst = (payload) => { return { type: SET_RESPRESENTATIVE_FIRST, payload } }
export const setRepresentativeSecond = (payload) => { return { type: SET_RESPRESENTATIVE_SECOND, payload } }
export const setStartDateTime = (payload) => { return { type: SET_START_DATETIME, payload } }
export const setEndDatetime = (payload) => { return { type: SET_END_DATETIME, payload } }
export const setTariffDate = (payload) => { return { type: SET_TARIFF_DATE, payload } }
export const setIsGiven = (payload) => { return { type: SET_IS_GIVEN, payload } }
export const setIsReturned = (payload) => { return { type: SET_IS_RETURNED, payload } }
export const setDaysFirst = (payload) => { return { type: SET_DAYS_FIRST, payload } }
export const setDaysSecond = (payload) => { return { type: SET_DAYS_SECOND, payload } }
export const setDiscoundsPercents = (payload) => { return { type: SET_DISCOUNDS_PERCENTS, payload } }
export const setDiscountSum = (payload) => { return { type: SET_DISCOUNT_SUM, payload } }
export const setDIscountReason = (payload) => { return { type: SET_DISCOUNT_REASON, payload } }
export const setSummaProkata = (payload) => { return { type: SET_SUMMA_PROKATA, payload } }
export const setProkataTarif = (payload) => { return { type: SET_PROKATA_TARIF, payload } }
export const setFirmId = (payload) => { return { type: SET_FIRM_ID, payload } }
export const clearContractForm = () => { return { type: CLEAR_FORM } }

