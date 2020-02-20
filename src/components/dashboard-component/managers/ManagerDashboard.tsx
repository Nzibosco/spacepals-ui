import React from 'react'


interface IDashboardState{

}

interface IDashboardProps{
    currentUser: any

}

export class ManagerDashboard extends React.Component<IDashboardState, IDashboardProps>{

    constructor(props:any){
        super(props)
        this.state = {
            currentUser: null
        }
    }



    render(){
        return(
            <>
            <div><p>Welcome {}</p></div>
            <div className = "row" style = {{}}>
                <div className = "col-4">
                    <h2>Choose from options below</h2>
                    <div style = {{color: "white"}}>
                        <h5>view Scheduled Flights</h5>
                        {/* <h5>Book a flight</h5> */}
                        <h5>View your flights history</h5>
                        <h5>Facts about planets</h5>
                        <h5>Your Companies</h5>
                        <h5>Your Space Ships</h5>
                    </div>
                </div>
                <div className = "col-8">

                </div>
            </div>
            </>
        )
    }
}