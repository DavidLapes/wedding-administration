import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchGuestDetail} from "../../../services/actions/guests/fetchGuestDetail";

class GuestDetail extends Component {

    state = {
        id: null,
        first_name: null,
        last_name: null,
        middle_name: null,
        greeting_name: null,
        phone: null,
        email: null,
        state: null,
        city: null,
        street: null,
        orientation_number: null,
        descriptive_number: null,
        postal_code: null,
        accommodation: null,
        rsvp_answered: null,
        email_sent: null,
        table_id: null
    }

    componentDidMount() {
        this.props.dispatch(fetchGuestDetail(this.props.match.params.id));
        if (this.props.guest) {
            this.setState({
                ...this.props.guest
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.guest !== this.props.guest) {
            this.setState({
                ...this.props.guest
            })
        }
    }

    render() {
        //TODO
        return (
            <div className="page-component-container">
                Guest detail
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id;
    let guest = state.fetchGuestsDetails[id];
    return (
        {
            guest: guest
        }
    )
}

export default connect(mapStateToProps)(GuestDetail);
