import React from 'react';
import Axios from 'axios';
import { destinationTypes } from '../../action-mappers/planet-action';
import { Link } from 'react-router-dom';


interface IBookFlightState {
    destinations: any
    selectedPlanet: string
    flights: any
    booked: string
}

interface IBookFlightProps {

}

export class BookFlightComponent extends React.Component<IBookFlightProps, IBookFlightState>{

    constructor(props:any){
        super(props)
        this.state= {
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

    displayFlights =() =>{
        if(this.state.flights){
            return (
                <div>
                    {
                        this.state.flights.map((flight:any, i:any) => {
                        return <p id = {flight.id}><input type = "radio" ></input> Flight id: {flight.id} duration: {flight.duration} Cost: {flight.cost} Available seats: {flight.availableSeats}</p>
                        })
                    }
                </div>
            )
        }
    }

    bookFlight = () => {
        this.setState({booked: "booked"})
    }



    render(){
        //return(
           
                
                    if(this.state.destinations.length){
                        return (
                            <div style = {{width: "50%", margin: "auto"}} className = "jumbotron">
                                <p>Select destination: <select  onChange = {this.updateSelection}>
                                    {
                                        this.state.destinations.map((planet:any, i:any) =>{
                                        return <option value = {planet.planetName} id= {i}>{planet.planetName}</option>
                                        })
                                    }
                                </select>
                                </p>

                               { this.state.selectedPlanet != null?
                                 <div id = "flights">
                                    <h4>Select flights below: </h4>
                                <p> Available flights for {this.state.selectedPlanet}</p>
                                {this.displayFlights()}
                                <br/>
                                <br/>
                                <button className = "btn btn-primary" onClick = {this.bookFlight}>Book</button>
                                <br/>
                                <br/>
                               <h6 style = {{color: "red"}}>{this.state.booked}</h6>
                                </div> : 
                                <p>Select destination first</p>
                                }
                                
                            </div>
                        )
                    } else{
                        return (
                            <div>
                                <p>Noop!</p>
                            </div>
                        )
                    }
                
        
        //)
    }

}