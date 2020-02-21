import React, { SyntheticEvent } from 'react'
import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap'
import SpaceNav from '../../utils/navbar/Navbar'
import Axios from 'axios'

export class CreateFlightComponent extends React.Component<any,any> {
    constructor(props:any) {
        super(props)
        this.state= {
            cid:0,      //company id
            sid:0,      //ship id
            dept:'',    //departure
            dest:'',    //destination
            cost:0,     //cost

        }
    }

    updateCid = (event:any) => {
        this.setState({
            ...this.state,
            cid:event.target.value
        })
    }

    updateSid = (event:any) => {
        this.setState({
            ...this.state,
            sid:event.target.value
        })
    }
    updateDept = (event:any) => {
        this.setState({
            ...this.state,
            dept:event.target.value
        })
    }
    updateDest = (event:any) => {
        this.setState({
            ...this.state,
            dest:event.target.value
        })
    }
    updateCost = (event:any) => {
        this.setState({
            ...this.state,
            cost:event.target.value
        })
    }

    submitFlight = (event: SyntheticEvent) => {
        event.preventDefault()
        let flight = {
            //departure:this.state.dept,
            //destination:this.state.dest,
            cost:this.state.cost
        }
        let flightdto = {
            companyId:this.state.cid,
            shipId:this.state.sid,
            flight:flight
        }
        console.log(flightdto)
        Axios.post('http://localhost:8080/spacepals/flights', flightdto).then(res => {
            console.log(res);
        })
    }



    render() {
        return(
            <div>
                {/* <SpaceNav/> */}
                <div style = {{
                    margin:"10% 30%"
                }}>
                    <div style={{
                    backgroundColor:"white",
                    outlineWidth:"2px",
                    outlineColor:"black"
                }}>
                    <h1>Welcome</h1>
                    <br></br>
                    <br></br>
                    <Form onSubmit={this.submitFlight}>
                        <FormGroup row>
                            <Label for="exampleCid" sm={2}>Company ID</Label>
                            <Col sm={10}>
                                <Input required
                                    type="number"
                                    name="cid"
                                    id="exampleCid"
                                    placeholder="put company ID here"
                                    value={this.state.cid}
                                    onChange={this.updateCid} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleSid" sm={2}>Ship ID</Label>
                            <Col sm={10}>
                                <Input required
                                    type="number"
                                    name="sid"
                                    id="exampleSid"
                                    placeholder="put ship id here"
                                    value={this.state.sid}
                                    onChange={this.updateSid} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleDeparture" sm={2}>Departure</Label>
                            <Col sm={10}>
                                <Input required
                                    type="text"
                                    name="departure"
                                    id="exampleDeparture"
                                    placeholder="put departure here"
                                    value={this.state.dept}
                                    onChange={this.updateDept} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleDestination" sm={2}>Destination</Label>
                            <Col sm={10}>
                                <Input required
                                    type="text"
                                    name="destination"
                                    id="exampleDestination"
                                    placeholder="put destination here"
                                    value={this.state.dest}
                                    onChange={this.updateDest} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleCost" sm={2}>Cost</Label>
                            <Col sm={10}>
                                <Input required
                                    type="number"
                                    name="cost"
                                    id="exampleCost"
                                    placeholder="put cost here"
                                    value={this.state.cost}
                                    onChange={this.updateCost} />
                            </Col>
                        </FormGroup>
                        <Button color="primary">Create Flight</Button>
                    </Form>
                    <p>{this.props.loginMessage}</p>
                    </div>
                </div>
            </div>
        )
    }
}