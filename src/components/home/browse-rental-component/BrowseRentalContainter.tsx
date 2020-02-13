
import { IState } from "../../../reducers";
import { connect } from 'react-redux';
import { BrowseRentalComponent } from "./BrowseRentalComponent";

const mapStateToProps = (state: IState) => {
    return {
    }
}

const mapDispatchToProps = {
}

export default connect (mapStateToProps,mapDispatchToProps)(BrowseRentalComponent)