import React from 'react'
import { Table, Navbar } from 'reactstrap'
import axios from 'axios'
import { destinationTypes } from '../../action-mappers/planet-action'
import { getAllClosedCompanyFlights } from '../../action-mappers/company-flight-action'
import {getFlights} from '../../remote/company-flight-data/company-flight-data';
import Axios from 'axios'

interface ICMFlightState{
    body: []
    check: String
}

interface ICMFlightProps{
    allClosedCompanyFlights: any[],
    getAllClosedCompanyFlights: ()=> void
}

export class PastCompanyFlightsComponent extends React.Component<any, ICMFlightState>{
    constructor(props:any){
        super(props)
        this.state ={
            body: [],
            check: ''
        }
    }


 componentDidMount =() => {
    // let body1 = getFlights()
    Axios.get("http://projecttwodo-env.fryh9swbjr.us-east-2.elasticbeanstalk.com/flights")
    .then(res => {
        console.log("res found");
        
        console.log(res.data);
    this.setState({
        ...this.state,
         body: res.data
        
    })
}).catch(err => console.log(err))
       
}


renderFlightData= () =>{
    if(this.state.body.length > 0){
        console.log("...... logging the body state");
        console.log(this.state.body);

        return (
        
        
<table>
   <thead>
   <tr>
          <th>Flight ID</th>
          <th>Flight Cost</th>
          <th>Departure Date</th>
          <th>Flight Capacity</th>
          <th>Arrival Planet</th>
          <th>Departure Planet</th>
          <th>Flight Status</th>
        </tr>
   </thead>
   <tbody>
       {
           this.state.body.filter((f:any) =>{
return f.status === 'CLOSED'
           }).map((flight:any, e:any) =>{
               return (
            <tr id={e}>
            <td>{flight.id}</td>
            <td>${flight.cost}</td>
            <td>{flight.flightDate}</td>
            <td>{flight.availableSeats}</td>
            <td>{flight.destination.planetName}</td>
            <td>{flight.departure.planetName}</td>
            <td>{flight.status}</td>
        </tr>
               )
           })
       }
   </tbody>
</table>
            
        )
    }
    }




    render(){
            console.log('this is the first flight ' + this.state.body)
    

        
        return(
            <>
                {
                    this.renderFlightData()
                }
            </>

            
        
    )}
        }