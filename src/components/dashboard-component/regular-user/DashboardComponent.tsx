import React from 'react'


interface IDashboardState{

}

interface IDashboardProps{
    currentUser: any

}

export class DashboardComponent extends React.Component<IDashboardState, IDashboardProps>{

    constructor(props:any){
        super(props)
        this.state = {
            currentUser: null
        }
    }



    render(){
        return(
            <div className= "container">
            <div style= {{
                borderStyle: "solid",
                borderColor: "white",
                borderRadius: "25px",
                fontStyle: "italic"
            }}>
            <h3 style = {{color: "white"}} className="text-center">Welcome {}</h3>
            <div className = "row" style = {{}}>
                <div className = "col-4">
                    <h2 style = {{color: "white", paddingLeft: "10px"}}>Select ...</h2>
                    <div style = {{color: "white", paddingLeft: "15px", textAlign: "center"}}>
                        <h5 style = {{borderStyle: "solid", borderColor: "violet", borderRadius: "25px",}}>view Scheduled Flights</h5>
                        <h5 style = {{borderStyle: "solid", borderColor: "violet", borderRadius: "25px",}}>Book a flight</h5>
                        <h5 style = {{borderStyle: "solid", borderColor: "violet", borderRadius: "25px",}}>View your flights history</h5>
                        <h5 style = {{borderStyle: "solid", borderColor: "violet", borderRadius: "25px",}}>Facts about planets</h5>
                        <h5 style = {{borderStyle: "solid", borderColor: "violet", borderRadius: "25px",}}>Open a business account</h5>
                    </div>
                </div>
                <div className = "col-8">

                </div>
            </div>
            </div>
            </div>
        )
    }
}