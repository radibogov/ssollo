import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { tableRowsReducer } from "./reducers/tableRowsReducer";
import { dateReducer } from "./reducers/dateReducer";
import { contractFormReducer } from "./reducers/contractFormReducer";
import { listsReducer } from "./reducers/listsReducer";
import { calculationReducer } from "./reducers/calculationReducer";
import { currentRowReducer } from "./reducers/currentRowReducer";


const rootReducer = combineReducers({
    tableRows: tableRowsReducer,
    date: dateReducer,
    contractForm: contractFormReducer,
    lists: listsReducer,
    calculation: calculationReducer,
    currentRow: currentRowReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))