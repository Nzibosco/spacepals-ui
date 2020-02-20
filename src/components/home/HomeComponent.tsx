import React from 'react';
import Navbar from '../../../src/utils/navbar/Navbar';
import { Link } from 'react-router-dom';

// our landing page

interface IHomeState {

}

export class HomeComponent extends React.Component {
    constructor(props:any) {super(props);}

    render() {
        return (
            <div>
                <Navbar/>
                <div className = "jumbotron text-center" 
                style = {{ 
                backgroundImage: "url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fgiphy.com%2Fgifs%2Fspaceship-fY4AX6yKzcQHS&psig=AOvVaw1mcYiYew-IRSJKQy3qq9FL&ust=1581903200846000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCF_dfm3ecCFQAAAAAdAAAAABAD)",
                
                
        
                }}>
                    <h1 className="display-4 text-danger" style = {{fontWeight: 800, fontSize: "90px"}}>SpacePals</h1>
                    <h1 className="lead">Enabling inter-planetary travels</h1>
                    <hr></hr>
                    <blockquote className = "lead"><h2>
                    "It’s one small step for man, one giant leap for mankind."</h2>
                    <h4 className = "lead">- Neil Armstrong</h4>
                    </blockquote>

                    <a className="btn btn-primary btn-lg" href="/login" data-toggle="modal" role="button">Login</a>
            <p className="lead">New user? Click <Link to='/register'>Register</Link> here to register</p>
                </div>
                <img src= {"https://www.google.com/url?sa=i&url=https%3A%2F%2Fgiphy.com%2Fgifs%2Fspaceship-fY4AX6yKzcQHS&psig=AOvVaw1mcYiYew-IRSJKQy3qq9FL&ust=1581903200846000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCF_dfm3ecCFQAAAAAdAAAAABAD"} alt="spaceship" />
            </div>
        )
    }
}