import React from 'react'
import Navbar from '../../../src/utils/navbar/Navbar';
import { Link } from 'react-router-dom';



export class AboutComponent extends React.Component<any,any> {

    render() {
        return(
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
                    <blockquote className = "lead">
                    <h2>"Spacepals is a platform designed to make inter-planetary travel accessible to everone.</h2>
                    <h2>We connect you with high quality spaceflight providers, making your dream destination a reality."</h2>
                    <h4 className = "lead">- Bosco said this</h4>
                    </blockquote>
                </div>
            </div>
        )
    }


}