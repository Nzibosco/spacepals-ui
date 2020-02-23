import React, { SyntheticEvent, useState } from 'react'
import { Form, FormGroup, Label, Col, Input, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import Axios from 'axios'
import { Redirect } from 'react-router'
import {withRouter} from 'react-router-dom'

interface ICreateFlightProps {
    currentUser: any
    destinations: any[]
    getAllPlanets: () => void
}

export class CreateFlightComponent extends React.Component<ICreateFlightProps,any> {
    constructor(props:ICreateFlightProps) {
        super(props)
        this.state= {
            cid:0,      //company id
            sid:0,      //ship id
            dept:'',    //departure
            deptobj:'',
            dest:'',    //destination
            destobj:'',
            cost:0,     //cost
            errorMessage:'',
            redirect:false,
            open:false

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

        // Axios.get('http://localhost:8080/spacepals/planets/byname/' + this.state.dept).then( res => {
        //     console.log(res);
        //     this.setState({
        //         ...this.state,
        //         deptobj:res.data
        //     })
        // })

        // Axios.get('http://localhost:8080/spacepals/planets/byname/' + this.state.dest).then( res => {
        //     console.log(res);
        //     this.setState({
        //         ...this.state,
        //         destobj:res.data
        //     })
        // })

        let flight = {
            //departure:this.state.deptobj,
            //destination:this.state.destobj,
            cost:this.state.cost
        }
        let flightdto = {
            companyId:this.state.cid,
            shipId:this.state.sid,
            deptName:this.state.dept,
            destName:this.state.dest,
            flight:flight
        }
        console.log(flightdto)
        //Axios.post('http://projecttwodo-env.fryh9swbjr.us-east-2.elasticbeanstalk.com/flights', flightdto).then(res => {
         Axios.post('http://projecttwodo-env.fryh9swbjr.us-east-2.elasticbeanstalk.com/flights', flightdto).then(res=> {
             console.log(res);
         })

    }

    componentDidMount(){
        for(let i = 0 ; i < this.props.currentUser.companies.length; i++) {
            if(this.props.currentUser.companies[i].aircrafts.length !== 0) {
                this.setState({
                    ...this.state,
                    sid:this.props.currentUser.companies[i].aircrafts[0].id
                })

                if (this.props.destinations.length === 0) {
                    this.props.getAllPlanets()
                }

                return
            }
        }
        if(this.state.sid === 0) {
            this.setState({
                ...this.state,
                errorMessage:'Must Register Aircraft First',
                redirect:true
            })
        }
       
    }

    render() {

        const toggle = () => {
            this.setState({
                ...this.state,
                open:!this.state.open
            })
        }

        const dropdownDisplay = this.props.destinations.map(planet => {
            return <option key={planet.englishName} value={planet.englishName}>{planet.englishName}</option>
        })
        
        if(this.state.redirect) {
        return <Redirect to="/ship"/> 
        }
        
        return(
             
            <div className='no'>
                
                <div style = {{
                    margin:"10% 30%"
                }}>
                    <div style={{
                    backgroundColor:"inherit",
                    outlineWidth:"2px",
                    outlineColor:"black", color: "white"
                }} className='appender'>
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
                            <Label for="exampleDeparture" sm={2}>Departing</Label>
                            <Col sm={10}>
                                <select onChange={this.updateDept}>
                                    {dropdownDisplay}
                                </select>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleDestination" sm={2}>Destination</Label>
                            <Col sm={10}>
                            <select onChange={this.updateDest}>
                                    {dropdownDisplay}
                                </select>
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
                        <Button className='redirect' color="primary">Create Flight</Button>
                    </Form>
                    <p>{this.state.errorMessage}</p>
                    </div>
                </div>
            </div>
        )
    }
}