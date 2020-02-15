import React, { Component } from 'react';

export class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            confirm_password: '',
            errors: '',
        }
        
        this.submit = this.submit.bind(this);
        this.change = this.change.bind(this);
    }

    submit(event) {
        const {
            email,
            password,
            confirm_password,
            errors
        } = this.state;

        event.preventDefault();
        console.log('I am not sure how this should be handled');
    }

    change(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div>
               <form onSubmit = {this.submit}>
                   <input type="email" name="email" 
                   placeholder="Enter a valid email address" 
                   value={this.state.email} 
                   onChange={this.change} required />

                   <input type="password" name="password" 
                   placeholder="Enter your desried password" 
                   value={this.state.password} 
                   onChange={this.change} required />

                   <input type="password" name="confirm_password" 
                   placeholder="confirm your password" 
                   value={this.state.confirm_password} 
                   onChange={this.change} required />

                   <button type="submit">Registration</button>
               </form>
            </div>
        );
    }
}