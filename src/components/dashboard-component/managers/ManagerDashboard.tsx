import React from 'react'
import { Redirect } from 'react-router'
import { Navbar, Row, Col, Card, CardTitle, Button, CardText } from 'reactstrap';


interface IDashboardState{
    role:string
}

interface IDashboardProps{
     currentUser:any
}

export class ManagerDashboard extends React.Component<IDashboardProps, IDashboardState>{

    constructor(props:IDashboardProps){
        super(props)
        this.state = {
            role:''
        }
    }



    render() {
        return (
            <div>
            <Navbar/>
            <Row>
                <Col sm="6">
                    <Card body>
                        <CardTitle>Make Flights</CardTitle>
                        <CardText></CardText>
                        <Button href='/flights'>Go som</Button>
                    </Card>
                    <Card body>
                        <CardTitle>Open flights</CardTitle>
                        <CardText>View all currently open flight</CardText>
                        <Button href='/man-open-flights'>Currently Open Flights</Button>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card body>
                        <CardTitle>Closed Flights</CardTitle>
                        <CardText>View all closed flights</CardText>
                        <Button href='/man-past-flights'>Closed Flights</Button>
                    </Card>
                </Col>
            </Row>
            </div>
        );
    }
}