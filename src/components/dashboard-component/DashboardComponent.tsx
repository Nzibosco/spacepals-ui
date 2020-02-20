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
}