import { combineReducers } from "redux";
import { loginReducer } from "./login-reducer";
import {planetReducer} from "./planet-reducer";



export interface IUserState {
    currentUser:any
    loginMessage:string
}

// planet/ destination reduce / state

export interface IDestinationState {
    allDestinations: any[]
}

export interface IState {
    userState: IUserState
    planetState: IDestinationState
}

export const state = combineReducers<IState>({
    userState: loginReducer,
    planetState: planetReducer
})