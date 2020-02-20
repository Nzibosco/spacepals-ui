import { getOpenFlights } from '../remote/api-open-status-flights/api-open-status-flights';


export const openFlightTypes = {
    SUCCESSFULL_GET_FLIGHTS: 'FLIGHT_SUCCESSFULL_GET_FLIGHT',
    UNSUCCESSFULL_GET_FLIGHTS: 'FLIGHT_UNSUCCESSFULL_GET_FLIGHT'
}

export const getAllOpenFlights = () => async (dispatch: any) => {
    let flights: any = await getOpenFlights;
    if (flights.body) {
        dispatch({
            type: openFlightTypes.SUCCESSFULL_GET_FLIGHTS,
            payload: {
                allFlights: flights.body
            }
        })
    } else {
        dispatch({
            type: openFlightTypes.UNSUCCESSFULL_GET_FLIGHTS
        })
    }
}