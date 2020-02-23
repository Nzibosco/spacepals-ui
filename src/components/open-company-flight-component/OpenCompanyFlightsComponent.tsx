import React, {useState} from 'react';
import { Navbar, Modal , ModalBody,ModalHeader, Button, ModalFooter} from 'reactstrap';
import Axios from 'axios'
import { NONAME } from 'dns';

interface IOMFlightState{
    body: []
    modal: boolean
    selectedFlight: any
    check: String
}


interface IOMFlightProps{
    allOpenCompanyFlights: any[],
    getAllOpenCompanyFlights: ()=> void
    setModal: ()=> boolean
}

export class OpenCompanyFlightsComponent extends React.Component<IOMFlightProps,IOMFlightState>{
    constructor(props:any){
        super(props)
        this.state={
        body: [],
        modal: false,
        selectedFlight: "",
        check: ''
    }}

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

    showModal = () => {
        this.setState({ modal: true });
      };
    
      hideModal = () => {
        this.setState({ modal: false });
      };

    setChosenFlight = (event: any) => {

        //const { name, value } = event.target;
        this.setState({
            ...this.state,
            selectedFlight: event.target.value,
            modal: true
        });
        console.log('selected id is: ' + this.state.selectedFlight)
        console.log('the state of modal is ' + this.state.modal)
    };

     

    adjustFlightModal = () =>{

        return(
            <div>
                
                {
                    this.state.body.filter((fl:any) =>{
                        return fl.id === this.state.selectedFlight
                           }).map((flights:any, e:any) => {
                               return(
                                <div  /*hidden={this.state.modal}*/ >
                                    <span onClick={this.hideModal}>&times;</span>
                                    <h3 style={{}} /*hidden={this.state.modal}*/>Flight ID of {flights.id}</h3>
                                    <body>
                                        <br/>Date of Departure: {flights.flightDate}

                                        <br/>Flight Destination: {flights.destination.planetName}<br/>Flight Departure Point: {flights.departure.planetName}
                
                                        <br/>Available Seats: {flights.availableSeats}<br/>Booked Seats: {flights.passenger.length}
                
                                        <br/>Flight Cost: ${flights.cost}<br/>Flight Status: {flights.status}
                                    </body>
                                            <div>
                                                <button  /*onClick={}*/>submit</button>{' '}
                                                <button color="secondary" onClick={this.hideModal}>Cancel</button>
                                            </div>
                                </div>
                               )
                           })
                }
            </div>
        )
    }
        
        
renderFlightData= () =>{
    if(this.state.body.length > 0){
        console.log("...... logging the body state");
        console.log(this.state.body);

        return (
        
        
<table>
   <thead>
   <tr>
       <th></th>
        <th>Flight ID</th>
          <th>Flight Cost</th>
          <th>Arrival Planet</th>
          <th>Departure Planet</th>
          <th>Flight Status</th>
        
        </tr>
   </thead>
   <tbody>
       {
           this.state.body.filter((f:any) =>{
return f.status === 'OPEN'
           }).map((flight:any, e:any) =>{
               return (
            <tr id={e}>
                 <th scope="row">
                    <button  name="flight" value={flight.id} onClick={this.setChosenFlight}>View Flight Details</button>
                </th>
            <td>{flight.id}</td>
            <td>{flight.cost}</td>
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
        <p>Click a flight to adjust The status or view more details</p>
            {
                this.renderFlightData()
                }
                {
                
                this.state.modal?this.adjustFlightModal():null
            }
        </>

        
    
)}
    }

