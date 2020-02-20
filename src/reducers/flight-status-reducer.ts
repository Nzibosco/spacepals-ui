import { IFlightStatusState, state } from ".";
import { openFlightTypes } from "../action-mappers/open-flight-action";


const initialState: IFlightStatusState = {
    allFlights: []
}

export const flightStatusReducer = (state = initialState, action:any) => {
    switch(action.type) {
        case openFlightTypes.SUCCESSFULL_GET_FLIGHTS:{
            return {
                ...state,
                allFlights: action.payload.allFlights
            }
        }
        default: {
            return state;
        }
    }
}