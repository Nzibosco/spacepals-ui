import React, { SyntheticEvent } from 'react';
import { Table, Navbar, Form, Button } from 'reactstrap';
import axios from 'axios';
import { getFlights } from '../../remote/get-flights/get-all-flights';

interface IFlightState {
body: any
check: String
}

interface IFlightProps {
    allFlights: any[]
    getAllFlights: () => void
}

export class ViewAllFlights extends React.Component<IFlightProps, IFlightState> {
    constructor(props: any) {
        super(props);

        this.state = {
            body: null,
            check:""

        };
    }

    // async componentDidMount() {
    //     if (this.props.allFlights.length === 0) {
    //         this.props.getAllFlights()
    //     }
    // }

    // aysnc getAll() {
    //     const res = await axios.get('http://projecttwodo-env.fryh9swbjr.us-east-2.elasticbeanstalk.com/flights')
    //     const data = res.data
    //         console.log(res);
    //         console.log(res.data);
    //         console.log(this.props)
    //         this.setState({
    //             allFlights:data
    //         })
    //         return res;
    //     }

    async componentDidMount() {
        let body1 = await getFlights()
        this.setState({
            ...this.state,
            body: body1
        })
    }

    render() {
        if(this.state.body != null){
            console.log("hohoho"+this.state.body[0].id)
            return (
            <Table bordered>
            <thead>
                <tr>
                <th>Flight Id</th>
                <th>Flight Cost</th>
                <th>Total Flight Duration</th>
                <th>Available Seats</th>
                <th>Destination</th>
                <th>Departure Point</th>
                <th>Status</th>
                </tr>
                <td>{this.state.body[0].id}</td>
                <td>{this.state.body[0].cost}</td>
                <td>{this.state.body[0].flightDate}</td>
                <td>{this.state.body[0].availableSeats}</td>
                <td>{this.state.body[0].destination.planetName}</td>
                <td>{this.state.body[0].departure.planetName}</td>
                <td>{this.state.body[0].status}</td>
                {/* <td>{flight.departurePoint}</td>
                <td>{flight.departureTime}</td>
                <td>{flight.flightTime}</td>
                <td>{flight.seats}</td>
                <td>{flight.points}</td>
                <td>{flight.cost}</td> */}
            </thead>
        </Table>
            )
        }


        //const currentFlights = this.props.allFlights.map((flight:any) => {
        return (

            <div>
                <Form >
                    <Button>Le's Button</Button>
                </Form>
            </div>

        )
        //     })
        //     if (this.props.allFlights) {
        //         return (
        //             <>
        //                 <Navbar/>
        //                 {currentFlights}
        //             </>
        //         )
        //     } else {
        //         return(
        //             <>
        //                 <p>An unexpected error occurred</p>
        //             </>
        //         )
        //     } 
    }
} 