


const SET_USERS = "SET_USERS"
const SET_FIRMS = "SET_FIRMS"
const SET_CARS = "SET_CARS"
const SET_SERVICES = "SET_SERVICES"

const defaultState = {
    users: [],
    firms: [],
    cars: [],
    services: []
}


export const listsReducer = (state = defaultState, action) => {

    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case SET_FIRMS:
            return {
                ...state,
                firms: action.payload
            }
        case SET_CARS:
            return {
                ...state,
                cars: action.payload
            }
        case SET_SERVICES:
            return {
                ...state,
                services: action.payload
            }



        default:
            return state
    }

}


export const setUsers = (payload) => { return { type: SET_USERS, payload } }
export const setFirms = (payload) => { return { type: SET_FIRMS, payload } }
export const setCars = (payload) => { return { type: SET_CARS, payload } }
export const setServices = (payload) => { return { type: SET_SERVICES, payload } }
