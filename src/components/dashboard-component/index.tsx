import React from 'react';

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

    constructor(props:IDashboardProps){
        super(props)
        this.state ={
            role: ''
        }
    }

render(){
    console.log(this.props.currentUser)
    return(
        <>

            {/* {
                this.props.currentUser.role === "basic_user" ? 
                <DashboardComponent/> :
                <ManagerDashboard/>
            } */}

        </>
    )
}


}