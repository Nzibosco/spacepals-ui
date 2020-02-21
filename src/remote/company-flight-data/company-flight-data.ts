import {companyFlightAPI} from '.';

export const getAllClosedCompanyFlights = async(url:string) : Promise<object> =>{
    let response = await companyFlightAPI.get('flights')
    let body = await response.data.bodies
    return body
}