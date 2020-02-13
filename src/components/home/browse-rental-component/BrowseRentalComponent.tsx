import React from 'react';
import { BrowseRentalDisplayComponent } from './browse-rental-display-component/BrowseRentalDisplayComponent';
import { CardColumns } from 'reactstrap';

interface IBrowseRentalsState {
    limit: number
    offset: number
}

interface IBrowseRentalsProps {
    availableRentals: any[],
    allAvailableRentals: (l: number, o: number) => void 
}

export class BrowseRentalComponent extends React.Component<IBrowseRentalsProps, IBrowseRentalsState>{
    constructor(props: any) {
        super(props)
        this.state = {
            limit: 6,
            offset: 0
        }
    }
    

    async componentDidMount() {
        if (this.props.availableRentals.length === 0) {
            this.props.allAvailableRentals(6,0)
        }
    }

    render() {

        const displayRentals: BrowseRentalDisplayComponent[] = this.props.availableRentals.map<any>((rentals: any) => {
            return <BrowseRentalDisplayComponent name={rentals.name}
            availableSeats={rentals.availableSeats}
            id={rentals.id}/>
        })

        return (
            <>
                <h3>View Rentals Options Here!!</h3>
                <CardColumns>
                    {displayRentals}
                </CardColumns>
            </>
        )
    
    }
}