import React from 'react'
import { ICompanyFlightState } from '.'
import {flightDataTypes} from '../action-mappers/company-flight-action'

const initialState: ICompanyFlightState ={
    allCompanyFlights:[]
}

export const companyFlightReducer = (state= initialState, action: any)=>{

switch(action.type){
    case flightDataTypes.SUCCESSFUL_GET_COMANY_FLIGHTS:{
        return{
            ...state,
            allCompanyFlights: action.payload.allCompanyFlights
        }
    }
    case flightDataTypes.UNSUCCESSFUL_GET_COMPANY_FLIGHTS:{
        return state
    }
    default:
        return state
}

}