import React from 'react';
import { Navbar, Table } from 'reactstrap';


export class OpenCompanyFlightsComponent extends React.Component<any,any>{
    constructor(props:any){
        super(props)
    }


    render(){return(
        <div>
            <Navbar/>
            <Table>
      <thead>
        <tr>
          <th>Flight ID</th>
          <th>Aircraft ID</th>
          <th>Destination ID</th>
          <th>Departure ID</th>
          <th>Arrival Time</th>
          <th>Departure Time</th>
          <th>Flight Cost</th>
          <th>Flight Status</th>
        </tr>
      </thead>
        <tbody>
            
        </tbody>
        </Table>
        </div>
    )}
}