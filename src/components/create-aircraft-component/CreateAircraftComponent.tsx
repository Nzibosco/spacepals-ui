import React, { SyntheticEvent } from 'react';
import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap';
import Axios from 'axios';
import { Redirect } from 'react-router';

export class CreateAircraftComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            name: '',
            size: '',
            cid: 0
        }

    }

    updateSize = (event: any) => {
        this.setState({
            ...this.state,
            size: event.target.value
        })
    }

    updateName = (event: any) => {
        this.setState({
            ...this.state,
            name: event.target.value
        })
    }

    updateID = (event: any) => {
        this.setState({
            ...this.state,
            cid: event.target.value
        })
    }

    submitShip = (event: SyntheticEvent) => {
        event.preventDefault()
        let aircraft = {
            name: this.state.name,
            capacity: this.state.size
        }
        let shipdto = {
            id: this.state.cid,
            aircraft: aircraft
        }
        console.log(shipdto)
        Axios.post('http://projecttwodo-env.fryh9swbjr.us-east-2.elasticbeanstalk.com/aircrafts', shipdto).then(res => {
            console.log(res)
        })
    }

    companiesDisplay = () => {
        if(this.props.currentuser.companies.length){
            this.props.currentUser.companies.map((comp:any) => {
                return <option key={comp.id} value={comp.name}>{comp.name}</option>
            })
        } else{
            return(
                <option value = "">No companies found</option>
            )
        }
    }
    

    render() {
        if (this.props.currentUser.companies.length) {

            return (
                <div>
                    {/* <SpaceNav/> */}
                    <div style={{
                        margin: "10% 30%"
                    }}>
                        <div style={{
                            background: "inherit",
                            outlineWidth: "2px",
                            outlineColor: "black",
                            color: "white"
                        }}>
                            <h1>Create your Ship</h1>
                            <br></br>
                            <br></br>
                            <Form onSubmit={this.submitShip}>
                                <FormGroup row>
                                    <Label for="exampleShipname" sm={2}>Ship Name</Label>
                                    <Col sm={10}>
                                        <Input required
                                            type="text"
                                            name="shipname"
                                            id="exampleShipname"
                                            placeholder="put ship name here"
                                            value={this.state.name}
                                            onChange={this.updateName} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="companyID" sm={2}>Company ID</Label>
                                    {/* <Col sm={10}>
                                        <Input required
                                            type="number"
                                            name="companyID"
                                            id="exampleCompanyID"
                                            placeholder="company id"
                                            value={this.state.cid}
                                            onChange={this.updateID} />
                                            <Label for="exampleDeparture" sm={2}>Departing</Label> */}
                            <Col sm={10}>
                                <select onChange={this.updateID}>
                                    {this.companiesDisplay()}
                                </select>
                            </Col>
                                    {/* </Col> */}
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="exampleSize" sm={2}>Capacity</Label>
                                    <Col sm={10}>
                                        <Input required
                                            type="select"
                                            name="select"
                                            id="exampleSelect"
                                            value={this.state.size}
                                            onChange={this.updateSize} >
                                            <option >SMALL</option>
                                            <option>MEDIUM</option>
                                            <option>LARGE</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <Button color="primary">Create Ship</Button>
                            </Form>
                            <p>{this.props.loginMessage}</p>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <>
                    <Redirect to="/registerCompany" />
                </>
            )
        }
    }
}