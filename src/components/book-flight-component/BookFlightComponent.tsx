import React, { useState } from 'react';
import Axios from 'axios';
import { destinationTypes } from '../../action-mappers/planet-action';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap';


interface IBookFlightState {
    destinations: any
    selectedPlanet: string
    flights: any
    booked: string
}

interface IBookFlightProps {

}

export class BookFlightComponent extends React.Component<IBookFlightProps, IBookFlightState>{

    constructor(props: any) {
        super(props)
        this.state = {
            destinations: [],
            selectedPlanet: '',
            flights: [],
            booked: ''
        }
    }

    async componentDidMount() {
        Axios.get('http://projecttwodo-env.fryh9swbjr.us-east-2.elasticbeanstalk.com/planets')
            .then(res => {
                console.log(res.data)
                this.setState({
                    ...this.state,
                    destinations: res.data
                })
            }).catch(err => console.log(err)
            )

        this.getFlights()
    }

    updateSelection = (event: any) => {

        //const { name, value } = event.target;
        this.setState({
            ...this.state,
            selectedPlanet: event.target.value
        });
    };

    getFlights = () => {
        Axios.get('http://projecttwodo-env.fryh9swbjr.us-east-2.elasticbeanstalk.com/flights')
            .then(res => {
                console.log(res.data)
                this.setState({
                    ...this.state,
                    flights: res.data
                })
            })
            .catch(err => console.log(err)
            )
    }

    displayFlights = () => {
        if (this.state.flights) {
            return (
                <div style={{ overflowX: "auto" }}>
                    <table className="table table-hover table-borderless table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">flight Id</th>
                                <th scope="col">Duration</th>
                                <th scope="col">Cost</th>
                                <th scope="col">Available seats</th>
                                <th scope="col">Status</th>
                                <th scope="col">Departure</th>
                                <th scope="col">Destination</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.flights.map((flight: any, i: any) => {
                                    return (
                                        <tr id={i}>
                                            <th scope="row">
                                                <input type="radio" name="flight" value={flight.id}></input>
                                            </th>
                                            <td>{flight.id}</td>
                                            <td>{flight.duration}</td>
                                            <td>${flight.cost}</td>
                                            <td>{flight.availableSeats}</td>
                                            <td>{flight.status}</td>
                                            <td>{flight.departure.planetName}</td>
                                            <td>{flight.destination.planetName}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            )
        }
    }

    bookFlight = () => {
        this.setState({ booked: "booked" })
    }

    handleChange = () => {
        let changed = true
    }

    payment = () => {
        return (
            <div>
                <button className="btn" type="button" data-toggle="collapse" data-target="#payment"><strong style ={{color: "red", fontStyle:"italic", fontWeight:35}}>Click to pay and book your flight</strong></button>
                <div className="collapse col-10" id="payment" style = {{borderStyle: "solid", borderColor:"black", borderRadius: "25px", padding: "10px"}}>
                    <Form>
                        <FormGroup row>
                            <Label for="number" sm={4}>Card Number</Label>
                            <Col sm={5}>
                                <Input required
                                    type="number"
                                    name="number"
                                    id="number"
                                    placeholder="enter card number"
                                    // value={''}
                                    style= {{borderRadius:"25px"}}
                                    onChange={this.handleChange} />

                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="expiration" sm={4}>Expiration date</Label>
                            <Col sm={5}>
                                <Input required
                                    type="date"
                                    name="expiration"
                                    id="expiration"
                                    placeholder="enter expiration date"
                                    style= {{borderRadius:"25px"}}
                                    // value={"this.state.password"}
                                    onChange={this.handleChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="name" sm={4}>Name on card</Label>
                            <Col sm={5}>
                                <Input required
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="enter name"
                                    style= {{borderRadius:"25px"}}
                                    // value={"this.state.password"}
                                    onChange={this.handleChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="csv" sm={4}>Code</Label>
                            <Col sm={2}>
                                <Input required
                                    type="number"
                                    name="code"
                                    id="csv"
                                    placeholder="CSV"
                                    value={"this.state.password"}
                                    style= {{borderRadius:"25px"}}
                                    onChange={this.handleChange} />
                            </Col>
                        </FormGroup>
                        <Button color ="primary" onClick={this.bookFlight}>Book</Button>                 
                    </Form>
                    
                </div>
            </div>
        )
    }



    render() {

        //return(


        if (this.state.destinations.length) {

            return (
                <div style={{ width: "50%", margin: "auto" }} className="jumbotron">
                    <p>Select destination: <select onChange={this.updateSelection}>
                        <option placeholder="select planet ..."></option>
                        {
                            this.state.destinations.map((planet: any, i: any) => {
                                return <option value={planet.planetName} id={i}>{planet.planetName}</option>
                            })
                        }
                    </select>
                    </p>

                    {this.state.selectedPlanet != null ?
                        <div id="flights">
                            <h4>Select flights below: </h4>
                            <p> Available flights for {this.state.selectedPlanet}</p>
                            {this.displayFlights()}
                            <br />
                            {this.payment()}
                            <br />
                            <br />                           
                           
                            <h6 style={{ color: "red" }}>{this.state.booked}</h6>
                            <br />
                            <Link to="/dashboard">Back to dashboard</Link>
                        </div> :
                        <p>Select destination first</p>
                    }

                </div>
            )
        } else {
            return (
                <div>
                    <p>Noop!</p>
                    <Link to="/book">Back to dashboard</Link>
                </div>
            )
        }


        //)
    }

}