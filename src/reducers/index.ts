import { combineReducers } from "redux";
import { loginReducer } from "./login-reducer";
import {planetReducer} from "./planet-reducer";
import { flightStatusReducer } from "./flight-status-reducer";



export interface IUserState {
    currentUser:any
    loginMessage:string
}

// planet/ destination reduce / state

export interface IDestinationState {
    allDestinations: any[]
}

// flight status
export interface IFlightStatusState {
    allFlights: any[]
}

export interface IState {
    userState: IUserState
    planetState: IDestinationState
    flightStatusState: IFlightStatusState
}

export const state = combineReducers<IState>({
    userState: loginReducer,
    planetState: planetReducer,
    flightStatusState: flightStatusReducer
})