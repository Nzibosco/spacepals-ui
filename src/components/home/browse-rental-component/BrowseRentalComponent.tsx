import React from 'react';
import { BrowseRentalDisplayComponent } from './browse-rental-display-component/BrowseRentalDisplayComponent';

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
        return(
            <h3>
                Not sure how you all want this set up yet, such as pagination etc.
            </h3>
        )
    }
}