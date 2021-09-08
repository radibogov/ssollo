const TOGGLE_CONTRACT_DIALOG = 'TOGGLE_CONTRACT_DIALOG'
const TOGGLE_AUTO_DIALOG = 'TOGGLE_AUTO_DIALOG'
const TOGGLE_TARIFF_DIALOG = 'TOGGLE_TARIFF_DIALOG'
const TOGGLE_CLIENT_DIALOG = 'TOGGLE_CLIENT_DIALOG'
const TOGGLE_FIRM_DIALOG = 'TOGGLE_FIRM_DIALOG'
const TOGGLE_TERRITORY_DIALOG = 'TOGGLE_TERRITORY_DIALOG'
const TOGGLE_MANAGER_PR_DIALOG = 'TOGGLE_MANAGER_PR_DIALOG'
const TOGGLE_MANAGER_OT_DIALOG = 'TOGGLE_MANAGER_OT_DIALOG'
const TOGGLE_PLACE_PR_DIALOG = 'TOGGLE_PLACE_PR_DIALOG'
const TOGGLE_PLACE_OT_DIALOG = 'TOGGLE_PLACE_OT_DIALOG'
const TOGGLE_MONEY_OP_DIALOG = 'TOGGLE_MONEY_OP_DIALOG'

const defaultState = {
    contract: false,
    auto: false,
    tariff: false,
    client: false,
    firm: false,
    place: false,
    territory: false,
    manager_pr: false,
    manager_ot: false,
    place_pr: false,
    place_ot: false,
    moneyOp: false,
    moneyOpType: ''
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
        case TOGGLE_TARIFF_DIALOG:
            return {
                ...state,
                tariff: action.payload
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
        case TOGGLE_TERRITORY_DIALOG:
            return {
                ...state,
                territory: action.payload
            }
        case TOGGLE_MANAGER_OT_DIALOG:
            return {
                ...state,
                manager_ot: action.payload
            }
        case TOGGLE_MANAGER_PR_DIALOG:
            return {
                ...state,
                manager_pr: action.payload
            }
        case TOGGLE_PLACE_OT_DIALOG:
            return {
                ...state,
                place_ot: action.payload
            }
        case TOGGLE_PLACE_PR_DIALOG:
            return {
                ...state,
                place_pr: action.payload
            }
        case TOGGLE_MONEY_OP_DIALOG:
            return {
                ...state,
                moneyOp: action.payload.flag,
                moneyOpType: action.payload.type
                // 1 - оплата
                // 2 - добавить
            }
        default:
            return state
    }

}


export const toggleContractDialog = payload => { return { type: TOGGLE_CONTRACT_DIALOG, payload } }
export const toggleAutoDialog = payload => { return { type: TOGGLE_AUTO_DIALOG, payload } }
export const toggleTaiffDialog = payload => { return { type: TOGGLE_TARIFF_DIALOG, payload } }
export const toggleClientDialog = payload => { return { type: TOGGLE_CLIENT_DIALOG, payload } }
export const toggleFirmDialog = payload => { return { type: TOGGLE_FIRM_DIALOG, payload } }
export const toggleTerritoryDialog = payload => { return { type: TOGGLE_TERRITORY_DIALOG, payload } }
export const toggleManagerPrDialog = payload => { return { type: TOGGLE_MANAGER_PR_DIALOG, payload } }
export const toggleManagerOtDialog = payload => { return { type: TOGGLE_MANAGER_OT_DIALOG, payload } }
export const togglePlacePrDialog = payload => { return { type: TOGGLE_PLACE_PR_DIALOG, payload } }
export const togglePlaceOtDialog = payload => { return { type: TOGGLE_PLACE_OT_DIALOG, payload } }
export const toggleMoneyOpDialog = payload => { return { type: TOGGLE_MONEY_OP_DIALOG, payload } }