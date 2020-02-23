import React from 'react'
import { connect } from 'react-redux'
import { PastCompanyFlightsComponent } from './PastCompanyFlightComponent'
import {getAllClosedCompanyFlights} from '../../action-mappers/company-flight-action'
import { IState } from '../../reducers'

const mapStateToProps =(state: IState) =>{
    return{
        allClosedCompanyFlights: state.companyFlightState.allCompanyFlights
    }
}
const mapDispatchToProps = {
    getAllClosedCompanyFlights
}

export default connect (mapStateToProps,mapDispatchToProps)(PastCompanyFlightsComponent)