import { combineReducers } from "redux";
import { loginReducer } from "./login-reducer";
import {planetReducer} from "./planet-reducer";
import {flightStateReducer} from "./flight-state-reducer";
import {companyFlightReducer} from './company-flight-reducer'



export interface IUserState {
    currentUser:any
    loginMessage:string
}

// planet/ destination reduce / state

export interface ICompanyFlightState{
 allCompanyFlights: any[]
}

export interface IDestinationState {
    allDestinations: any[]
}

export interface IFlightState {
    allFlights: any[]
}

export interface IState {
    userState: IUserState
    planetState: IDestinationState
    flightState: IFlightState
    companyFlightState: ICompanyFlightState
}

export const state = combineReducers<IState>({
    userState: loginReducer,
    planetState: planetReducer,
    flightState: flightStateReducer,
    companyFlightState: companyFlightReducer
})