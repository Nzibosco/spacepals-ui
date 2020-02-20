import React from 'react';

import {ManagerDashboard} from './managers/ManagerDashboard';
import {DashboardComponent} from './regular-user/DashboardComponent';

// this file will track user roles and render dashboards accordingly.
// if a user is a company manager, the dashboard rendered should be imported from managers folder and vice versa

interface IDashboardState {
    currentUserRole: string;
}

interface IDashboardProps {
    role: string
}

export class Dashboard extends React.Component<IDashboardState, IDashboardProps> {

    constructor(props:any){
        super(props)
        this.state ={
            role: ''
        }
    }

render(){
    return(
        <>

            {
                this.props.currentUserRole === "basic_user" ? 
                <DashboardComponent/> :
                <ManagerDashboard/>
            }

        </>
    )
}


}