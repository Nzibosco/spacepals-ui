import React, { useState } from 'react';
import Navbar from '../../../src/utils/navbar/Navbar';
import { Form, Label, Col, Input, FormGroup, Button, Jumbotron, Alert,UncontrolledAlert } from 'reactstrap';



interface IPaymentState {
    CardHolder: string
    CardNumber: any
    expirationMonth: any
    expirationYear: any
    SecurityCode: any
    
}

interface IPaymentProps{
    PAYMENT_SUCCESSFUL: true,
    PAYMENT_UNSUCCESSFUL: false

}
let thisCardNumber;
let thisExpirationMonth;
let thisExpirationYear;
let value = false;
let cardRegex = /[0-9]\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d/;
let secRegex = /[0-9]\d\d\d/g;
let monthRegex = /[0-9]\d\d/;

export class PaymentComponent extends React.Component<IPaymentProps, IPaymentState>{
     constructor(props:any){
        super(props)
        this.state ={ 
        CardHolder: '',
        CardNumber:"",
        expirationMonth:'',
        expirationYear: '',
        SecurityCode: '',
        
        }
    }

    updateSecurityCode= (event:any) => {
        this.setState({
            ...this.state,
            SecurityCode: event.target.value
        })
    }
    

    updateExpirationMonth= (event:any) => {
        this.setState({
            ...this.state,
            expirationMonth: event.target.value
        })
    }
    
    updateExpirationYear= (event:any) => {
        this.setState({
            ...this.state,
            expirationYear: event.target.value
        })
    }
    

    updateCardNumber= (event:any) => {
        this.setState({
            ...this.state,
            CardNumber: event.target.value
        })
    }
    

    updateCardHolder= (event:any) => {
        this.setState({
            ...this.state,
            CardHolder: event.target.value
        })
    }
    

 
    isExpirationMonth = (number: number) =>{
        if (number >= 13 || number <= 0){
            return false;
        }else return true;
    }

    

     handleValues =(event:any) =>{
         
        
        
    }
    
    

    CheckValues = ( event: any) =>{
        
    }

     
    render(){
        
        return (
            <div>
                <Navbar/>
                <Jumbotron>
                    <h6>Please enter you payment credentials:</h6>
                <div>

                    <Input type='text'  label='Name on Credit Card' name='card-holder-name' value={this.state.CardHolder} onChange={this.updateCardHolder}  placeholder='example: John W Hancock'></Input>
                    
                </div>
                <br/>
                <div>
                    <Input type='number' label='Credit Card Number' name='card-number' value={this.state.CardNumber} onChange={this.updateCardNumber} placeholder='example: ####-####-####-####'></Input>
                    
                </div>
                <br/>
                <div>
                    <Input type='number' label='Month of Expiration' name='card-expiration-month' value={this.state.expirationMonth} onChange={this.updateExpirationMonth} placeholder='example: 12'></Input>
                </div>
                <br/>
                <div>
                    <Input type='number' label='Year of Expiration' name='card-expiration-year' value={this.state.expirationYear} onChange={this.updateExpirationYear} placeholder='example: 90'></Input>
                </div>
                <br/>
                <div>
                    <Input type='number' label='Security Code' name='card-security-code' value={this.state.SecurityCode} onChange={this.updateSecurityCode} placeholder='example: 313'></Input>
                </div>
                <br/>
                <Button onClick={this.CheckValues} >Activate Lasers</Button>
                </Jumbotron>
            </div>
        )
    }
}
