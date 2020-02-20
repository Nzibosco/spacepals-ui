import React, { useState } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import Navbar from '../../../src/utils/navbar/Navbar';


export class FlightManagerDashboard extends React.Component {

    render() {
        return (
            <div>
            <Navbar/>
            <Row>
                <Col sm="6">
                    <Card body>
                        <CardTitle>Make Flights</CardTitle>
                        <CardText>Book with us and travel today!</CardText>
                        <Button href='/flights'>Go somewhere</Button>
                    </Card>
                    <Card body>
                        <CardTitle>Open flights</CardTitle>
                        <CardText>View all previous flight</CardText>
                        <Button href='/current-flights'>Past flights</Button>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card body>
                        <CardTitle>Closed Flights</CardTitle>
                        <CardText>View your current flights</CardText>
                        <Button href='past-flights'>Current flights</Button>
                    </Card>
                </Col>
            </Row>
            </div>
        );
    };
}
