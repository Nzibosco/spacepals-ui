import React from 'react';
import {Redirect} from 'react-router';
import {ManagerDashboard} from './managers/ManagerDashboard';
import {DashboardComponent} from './regular-user/DashboardComponent';

// this file will track user roles and render dashboards accordingly.
// if a user is a company manager, the dashboard rendered should be imported from managers folder and vice versa

interface IDashboardState {
    role: string


}

interface IDashboardProps {
    currentUser: any;
    
}

export class Dashboard extends React.Component<IDashboardProps, IDashboardState> {

    constructor(props:any){
        super(props)
        this.state ={
            role: ''
        }
    }

render(){
    // return(
    //     <>

if(!this.state.role) {
            return(
                <Redirect to='/home'/>
            )
        }
        if(this.state.role == 'FLIGHT_MANAGER') {
            return(
                <Redirect to='/mandash'/> 
            )
        }
        else {
            return (
                <Redirect to='/usedash'/>
            )
        }

    //         {
    //              this.props.currentUser === "basic_user" ? 
    //              <DashboardComponent/> :
    //              <ManagerDashboard/>
    //          }

    //      </>
    // )
}


}