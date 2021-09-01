const TOGGLE_CONTRACT_DIALOG = 'TOGGLE_CONTRACT_DIALOG'
const TOGGLE_AUTO_DIALOG = 'TOGGLE_AUTO_DIALOG'
const TOGGLE_CLIENT_DIALOG = 'TOGGLE_CLIENT_DIALOG'
const TOGGLE_FIRM_DIALOG = 'TOGGLE_FIRM_DIALOG'
const TOGGLE_MONEY_OP_DIALOG = 'TOGGLE_MONEY_OP_DIALOG'

const defaultState = {
    contract: false,
    auto: false,
    client: false,
    firm: false,
    moneyOp: false,
}

export const dialogReducer = (state = defaultState, action) => {


    switch (action.type) {
        case TOGGLE_CONTRACT_DIALOG:
            return {
                ...state,
                contract: action.payload
            }
        case TOGGLE_AUTO_DIALOG:
            return {
                ...state,
                auto: action.payload
            }
        case TOGGLE_CLIENT_DIALOG:
            return {
                ...state,
                client: action.payload
            }
        case TOGGLE_FIRM_DIALOG:
            return {
                ...state,
                firm: action.payload
            }
        case TOGGLE_MONEY_OP_DIALOG:
            return {
                ...state,
                moneyOp: action.payload
            }
        default:
            return state
    }

}


export const toggleContractDialog = payload => { return { type: TOGGLE_CONTRACT_DIALOG, payload } }
export const toggleAutoDialog = payload => { return { type: TOGGLE_AUTO_DIALOG, payload } }
export const toggleClientDialog = payload => { return { type: TOGGLE_CLIENT_DIALOG, payload } }
export const toggleFirmDialog = payload => { return { type: TOGGLE_FIRM_DIALOG, payload } }
export const toggleMoneyOpDialog = payload => { return { type: TOGGLE_MONEY_OP_DIALOG, payload } }