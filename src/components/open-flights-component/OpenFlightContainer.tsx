import React from 'react';
import { IState } from '../../reducers';
import { OpenFlightsComponent } from './OpenFlightsComponent';
import { getAllOpenFlights } from '../../action-mappers/open-flight-action';
import { connect } from 'react-redux';

const mapStateToProps = (state: IState) => {

    return {
        allFlights: state.flightStatusState.allFlights
    }
}

const mapDispatchToProps = {
    getAllOpenFlights
}

export default connect (mapStateToProps, mapDispatchToProps)(OpenFlightsComponent)