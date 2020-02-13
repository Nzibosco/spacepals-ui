import { rentalReducer } from "./browse-rental-reducer";
import { combineReducers } from 'redux';


export interface IBrowseRentalsState {
    availableRentals: any[]
}

export interface IState {
    browseRentalsState: IBrowseRentalsState
}

export const state = combineReducers<IState>({
    browseRentalsState: rentalReducer

})