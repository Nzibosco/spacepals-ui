import React, { SyntheticEvent } from 'react'
import { Form, FormGroup, Label, Col, Input, Button, Jumbotron } from 'reactstrap'
//import {apiLogin} from '../../remote/login-clients/login-clients'

interface ILoginState {
    username: string
    password: string
}

interface ILoginProps {
    updateCurrentUser:(u:string, p:string) => void
    loginMessage:string
}

export class LoginComponent extends React.Component<ILoginProps, ILoginState> {

    constructor(props: ILoginProps) {
        super(props)
        this.state = {
            username:'',
            password:''
        }
    }

    updateUsername = (event:any) => {
        this.setState({
            ...this.state,
            username:event.target.value
        })
    }

    updatePassword = (event:any) => {
        this.setState({
            ...this.state,
            password:event.target.value
        })
    }

    submitLogin = async(event: SyntheticEvent) => {
        event.preventDefault();
        this.props.updateCurrentUser(this.state.username, this.state.password)
        //apiLogin(this.state.username, this.state.password)

        this.setState({
            ...this.state,
            username: "",
            password:""
        })

    }

    render() {
        return (
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
                <Form onSubmit={this.submitLogin}>
                    <FormGroup row>
                        <Label for="exampleUsername" sm={2}>Username</Label>
                        <Col sm={10}>
                            <Input required
                                type="text"
                                name="email"
                                id="exampleUsername"
                                placeholder="put username here"
                                value={this.state.username}
                                onChange={this.updateUsername} />
                            {/* this is an example of data binding, we take data from the state and put it in our tsx */}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="examplePassword" sm={2}>Password</Label>
                        <Col sm={10}>
                            <Input required
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="put password here"
                                value={this.state.password}
                                onChange={this.updatePassword} />
                        </Col>
                    </FormGroup>
                    <Button color="primary">Login</Button>
                </Form>
                <p>{this.props.loginMessage}</p>
                </div>
            </div>
        )
    }
}