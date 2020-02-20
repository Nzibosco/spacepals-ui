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
                <Redirect to='/mandash'/> 
            )
        }
        else {
            return (
                <Redirect to='/usedash'/>
            )
        }
    }
}