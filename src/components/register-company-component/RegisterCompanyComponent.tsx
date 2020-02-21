import React, { SyntheticEvent } from 'react';
import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap';
import Axios from 'axios';
import SpaceNav from '../../utils/navbar/Navbar';

export class RegisterCompanyComponent extends React.Component<any,any> {

    constructor(props: any) {
        super(props)
        this.state={
            name:'',
            address:''
        }
    }

    updateCompanyname = (event:any) => {
        this.setState({
            ...this.state,
            name:event.target.value
        })
    }

    updateAddress = (event:any) => {
        this.setState({
            ...this.state,
            address:event.target.value
        })
    }

    submitCompany = (event: SyntheticEvent) => {
        event.preventDefault()
        let comp = {
            name:this.state.name,
            address:this.state.address
        }
        Axios.put('http://localhost:8080/spacepals/users', comp).then(res => {
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
                    <Form onSubmit={this.submitCompany}>
                        <FormGroup row>
                            <Label for="exampleCompanyName" sm={2}>Company Name</Label>
                            <Col sm={10}>
                                <Input required
                                    type="text"
                                    name="CompanyName"
                                    id="exampleCompanyName"
                                    placeholder="put company name here"
                                    value={this.state.name}
                                    onChange={this.updateCompanyname} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleAddress" sm={2}>Address</Label>
                            <Col sm={10}>
                                <Input required
                                    type="text"
                                    name="address"
                                    id="exampleAddress"
                                    placeholder="put address here"
                                    value={this.state.address}
                                    onChange={this.updateAddress} />
                            </Col>
                        </FormGroup>
                        <Button color="primary">Create Company</Button>
                    </Form>
                    <p>{this.props.loginMessage}</p>
                    </div>
                </div>
            </div>
        )
    }
}
