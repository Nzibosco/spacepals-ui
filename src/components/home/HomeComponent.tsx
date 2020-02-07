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
                <div className = "jumbotron text-center" 
                style = {{backgroundColor: "white", 
                //backgroundImage: "url(https://cdnb.artstation.com/p/assets/images/images/006/585/191/large/malte-madsen-spaceship-concept-refined-final.jpg?1499717461)",
                backgroundSize: "100%",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat"
                
        
                }}>
                    <h1 className="display-4 text-danger" style = {{fontWeight: 800, fontSize: "90px"}}>SpacePals</h1>
                    <h1 className="lead">Enabling inter-planetary travels</h1>
                    <hr></hr>
                    <blockquote className = "lead"><h2>
                    "It’s one small step for man, one giant leap for mankind."</h2>
                    <h4 className = "lead">_Neil Armstrong</h4>
                    </blockquote>

                    <a className="btn btn-primary btn-lg" href="/login" data-toggle="modal" role="button">Login</a>
            <p className="lead">New user? Click <a href="/register" role="button">here to register</a></p>
                </div>
            </div>
        )
    }
}