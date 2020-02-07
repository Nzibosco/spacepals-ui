import React from 'react';
import Navbar from '../../../src/utils/navbar/Navbar';

// our landing page

interface IHomeState {

}

export class HomeComponent extends React.Component {
    constructor(props:any) {super(props);}

    render() {
        return (
            <div>
                <Navbar/>
                <div className = "jumbotron text-center" style = {{backgroundColor: "white"}}>
                    <h1 className="display-4 text-danger" style = {{fontWeight: 800, fontSize: "90px"}}>SpacePals</h1>
                    <p className="lead"><em>Enabling inter-planetary travels</em></p>
                    <hr></hr>
                    <blockquote className = "lead"><b>
                    "It’s one small step for man, one giant leap for mankind."</b>
                    <p className = "lead">_Neil Armstrong</p>
                    </blockquote>

                    <a className="btn btn-primary btn-lg" href="/login" data-toggle="modal" role="button">Login</a>
            <p className="lead">New user? Click <a href="/register" role="button">here to register</a></p>
                </div>
            </div>
        )
    }
}