import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { tableRowsReducer } from "./reducers/tableRowsReducer";
import { dateReducer } from "./reducers/dateReducer";
import { contractFormReducer } from "./reducers/contractFormReducer";
import { listsReducer } from "./reducers/listsReducer";
import { calculationReducer } from "./reducers/calculationReducer";
import { currentRowReducer } from "./reducers/currentRowReducer";
import { dialogReducer } from "./reducers/DialogsReducer";
import { paymentReducer } from "./reducers/paymentReducer";
import {serviceFormReducer} from "./reducers/serviceFormReduser";


const rootReducer = combineReducers({
    tableRows: tableRowsReducer,
    date: dateReducer,
    contractForm: contractFormReducer,
    lists: listsReducer,
    calculation: calculationReducer,
    currentRow: currentRowReducer,
    dialogs: dialogReducer,
    paymentForm: paymentReducer,
    serviceForm: serviceFormReducer,
})



export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))