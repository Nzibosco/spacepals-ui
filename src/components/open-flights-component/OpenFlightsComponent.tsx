import React from 'react';
import { Table, Navbar } from 'reactstrap';
import { BrowseRentalDisplayComponent } from '../browse-rentals-component/browse-rental-display-component/BrowseRentalDisplayComponent';

interface IOpenFlightsState {

}

interface IOpenFlightsProps {

    allFlights: any[]
    getAllOpenFlights: () => void
    /*flightId:number
    aircraftName:string
    Company:string
    Destination:string
    arrivalTime:string
    departurePoint:string
    depatureTime:string
    flightDuration:string
    availableSeats:number
    totalSeats:number
    points:number
    cost:number*/
}


export class OpenFlightsComponent extends React.Component<IOpenFlightsProps,IOpenFlightsState> {
    constructor(props:any) {
        super(props);

        this.state = {}
    }

    async componentDidMount() {
        if (this.props.allFlights.length === 0) {
            this.props.getAllOpenFlights()
        }
    }

    render() {
        const flightHistory = this.props.allFlights.map((flight:any) => {
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
                        <td>{flight.id}</td>
                        <td>{flight.name}</td>
                        <td>{flight.company}</td>
                        <td>{flight.destination}</td>
                        <td>{flight.arrivalTime}</td>
                        <td>{flight.departurePoint}</td>
                        <td>{flight.departureTime}</td>
                        <td>{flight.flightTime}</td>
                        <td>{flight.seats}</td>
                        <td>{flight.points}</td>
                        <td>{flight.cost}</td>
                    </thead>
                </Table>
            )
        })
        if (this.props.allFlights) {
            return(
                <>
                    <Navbar/>
                    {BrowseRentalDisplayComponent}
                </>
        )} else {
            return(
                <>
                    <p>An unexpected error occurred</p>
                </>
            )
        }
    }
/*  flightHistory() {
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
    } */
}