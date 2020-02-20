import React from 'react';
import axios from 'axios';

interface IRegisterState{

}

interface IRegisterProps{
    register: () => void
}

export class Register extends React.Component<IRegisterProps, IRegisterState>{

    constructor(props:any){
        super(props)
        this.state ={}
    }

    registerUser = () =>{
        let userData = {
            firstName: "Dominic",
            lastName: "Nsenga",
            email: "senga@email.co",
            password: "pass",
            gender: "female"
        }
        axios.post("http://localhost:8080/spacepals/users",
            userData
    ).then(response =>{
        console.log(response)
    })
    .catch(err =>{
        console.log(err)
    })
    }


    render(){
        return (
            <div className = "card">
                <div className = "jumbotron">
                    <label>First Name: <input type="text" value="" onChange = {this.props.register}></input></label><br/>
                    <label>Last Name: <input type="text" value="" onChange = {this.props.register}></input></label><br/>
                    <label>Email: <input type="text" value="" onChange = {this.props.register}></input></label><br/>
                    <label>Password: <input type="text" value="" onChange = {this.props.register}></input></label><br/>
                    <button onClick = {this.registerUser}>Register</button>
                </div>
            </div>
        )
    }

}