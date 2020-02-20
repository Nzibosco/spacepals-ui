import React from 'react'
import { Redirect } from 'react-router'


interface IDashboardState{
    dummy:string
}

interface IDashboardProps{
    currentUser:any
}

export class DashboardComponent extends React.Component<IDashboardProps, IDashboardState>{

    constructor(props:IDashboardProps){
        super(props)
        this.state = {
            dummy:''
        }
    }



    render() {
        if(!this.props.currentUser) {
            return(
                <Redirect to='/home'/>
            )
        }
        if(this.props.currentUser.role == 'FLIGHT_MANAGER') {
            return(
                <>
                <div><p>Welcome {}</p></div>
                <div className = "row" style = {{}}>
                    <div className = "col-4">
                        <h5>Choose from options below</h5>
                    </div>
                    <div className = "col-8">

                    </div>
                </div>
                </>
            )
        }
        else {
            return (
                <div>
                    <h1>BASIC BITCH</h1>
                </div>
            )
        }
    }
}