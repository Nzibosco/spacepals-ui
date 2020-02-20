import React, { useState } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col} from 'reactstrap';
import Navbar from '../../../src/utils/navbar/Navbar';

export class FlightManagerDashboard extends React.Component {

    render() {
        return (
            <div>
            <Navbar/>
            <Row>
                <Col sm="6">
                    <Card body>
                        <CardTitle>Book Flight</CardTitle>
                        <CardText>Book with us and travel today!</CardText>
                        <Button href='/flights'>Go somewhere</Button>
                    </Card>
                    <Card body>
                        <CardTitle>Flight History</CardTitle>
                        <CardText>View all previous flight</CardText>
                        <Button href='/past-flights'>Past flights</Button>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card body>
                        <CardTitle>Current Flight</CardTitle>
                        <CardText>View your current flights</CardText>
                        <Button href='current-flights'>Current flights</Button>
                    </Card>
                    <Card body>
                        <CardTitle>Planet Options</CardTitle>
                        <CardText>Find your next destination here</CardText>
                        <Button href='/planet'>Explore the cosmos!!</Button>
                    </Card>
                </Col>
            </Row>
            </div>
        );
    };
}
