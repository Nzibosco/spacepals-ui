import React from 'react';
import Navbar from '../../utils/navbar/Navbar';
import { Jumbotron } from 'reactstrap';
import {Link} from 'react-router-dom'



interface IDestinationState {
    //planets: any[]
}

interface IDestinationProps {
    allDestinations: any[],
    getAllPlanets: () => void
}

export class DestinationComponent extends React.Component<IDestinationProps, IDestinationState>{

    constructor(props: any) {
        super(props)
        this.state={
            //planets: []
        }
    }

    async componentDidMount(){
        if(this.props.allDestinations.length === 0) {
            this.props.getAllPlanets()
            
        }
    }



    render(){
        const displayPlanets = this.props.allDestinations.map((planet:any) => {
            return (
                <div className = "card">
                    <h4>{planet.englishName}</h4>
            <p><strong>Aphelion: </strong>{planet.aphelion}</p>
            <p><strong>Gravity: </strong>{planet.gravity}</p>
            <p><strong>Discovery Date: </strong>{planet.discoveryDate}</p>
            <p><strong>Discovered By: </strong>{planet.discoveredBy}</p>
        
                    {planet.moons?(
                        <div>
                            <strong>Moons:</strong>                           
                            {
                                planet.moons.map((m:any) => {                               
                                    return (
                                    <p>{m.moon}</p>
                                    )
                                })                           
                            }
                        </div>
                        
                    ):(<p>This planet has no moons</p>)}
                    <br></br>
                    
                    <Link to = "/schedule-flight">Schedule a flight to this planet</Link>
                    <br></br>
                </div>
            )
        })

        if(this.props.allDestinations){
        return (
            <>
            <Navbar/>
           
             {displayPlanets}
            </>
        )
        } else {
            return (
                
                <>                
                <p>Sorry, we are unable to get you some planets</p>
                <Link to = "/">Click to go back to home page</Link>
                </>
            )
        }        
    }
}
