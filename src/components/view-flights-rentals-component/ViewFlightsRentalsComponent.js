import React, { Component } from 'react';
import {Table} from 'reactstrap';
import Navbar from '../../../src/utils/navbar/Navbar';

export class ViewFlightsRentalsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            flights: [
                { id: 1, name: 'The Enterprise', company: 'Entertainment SpaceWide', destination: 'Saturn'},
                { id: 2, name: 'The Entripid', company: 'NYC Space Travel', destination: 'Venus'},
                { id: 3, name: 'The Black Pearl', company: 'Pirates off the Carribean', destination: 'Mars'},
                { id: 4, name: 'The Dingy', company: 'SSE', destination: 'Earth'}
            ]
        }
    }

    flightHistory() {
        return this.state.flights.map((flight, index) => {
            const {id, name, company, destination} = flight;
            return (
                
                    
                <Table bordered>
                    <thead>
                    <tr>
                        <th>Flight Id</th>
                        <th>Aircraft Name</th>
                        <th>Company</th>
                        <th>Destination Point</th>
                        <th>Arrival Time</th>
                        <th>Departure Point</th>
                        <th>Departure Time</th>
                        <th>Total Flight Duration</th>
                        <th>Available Seats</th>
                        <th>Total Seats</th>
                        <th>Frequent Flyer <br/>Points Upon Purchase</th>
                        <th>Flight Cost</th>
                    </tr>
                    </thead>
                    <tbody>
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{company}</td>
                    <td>{destination}</td>
                </tr>
                </tbody>
                </Table>
               
            )
        })
    }

    flightHeader() {
        let header = Object.keys(this.state.flights[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    render() {
        return (
            <div>
                <Navbar/>
                <table id='flights'>
                    <tbody>
                        {this.flightHistory()}
                    </tbody>
                </table>
            </div>
        )
    }
}