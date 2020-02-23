import React from 'react'
import {getFlights} from '../remote/company-flight-data/company-flight-data';


export const flightDataTypes = {
    SUCCESSFUL_GET_COMANY_FLIGHTS: 'FLIGHT_SUCCESSFUL_GET_FLIGHTS',
    UNSUCCESSFUL_GET_COMPANY_FLIGHTS: 'FLIGHT_UNSUCCESSFUL_GET_FLIGHTS'
}

export const getAllClosedCompanyFlights = () => async (dispatch:any) =>{


        let flights:any = await getFlights;
    if(flights.body){
        dispatch({
            type:flightDataTypes.SUCCESSFUL_GET_COMANY_FLIGHTS,
            payload: {
                allFlights: flights
            }
        })
    }else{
        dispatch({
            type: flightDataTypes.UNSUCCESSFUL_GET_COMPANY_FLIGHTS
        })
    }
}