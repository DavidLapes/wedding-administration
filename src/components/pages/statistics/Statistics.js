import React, {Component} from "react";
import {connect} from "react-redux";
import {push} from "connected-react-router";
import {fetchStatistics} from "../../../services/actions/statistics/fetchStatistics";

class Statistics extends Component {

    state = {
        statistics: {
            rsvp_answered_count:          0,
            rsvp_unanswered_count:        0,
            accommodation_accepted_count: 0,
            accommodation_declined_count: 0
        }
    }

    componentDidMount() {
        this.props.dispatch(fetchStatistics());
        if(this.props.statistics) {
            this.setState({
                statistics: this.props.statistics
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.statistics !== this.props.statistics) {
            this.setState({
                statistics: this.props.statistics
            })
        }
    }

    render() {
        return (
            <div className="page-component-container">
                <div className="grid-container">
                    <div className="grid-column" onClick={() => this.props.dispatch(push("/statistics/rsvp-answered"))}>
                        <span className="grid-column-label">RSVP vyplnilo</span>
                        <span className="grid-column-value">{this.state.statistics.rsvp_answered_count}</span>
                    </div>
                    <div className="grid-column" onClick={() => this.props.dispatch(push("/statistics/rsvp-unanswered"))}>
                        <span className="grid-column-label">RSVP nevyplnilo</span>
                        <span className="grid-column-value">{this.state.statistics.rsvp_unanswered_count}</span>
                    </div>
                </div>
                <div className="grid-container">
                    <div className="grid-column" onClick={() => this.props.dispatch(push("/statistics/accommodation-accepted"))}>
                        <span className="grid-column-label">Ubytování chce</span>
                        <span className="grid-column-value">{this.state.statistics.accommodation_accepted_count}</span>
                    </div>
                    <div className="grid-column" onClick={() => this.props.dispatch(push("/statistics/accommodation-declined"))}>
                        <span className="grid-column-label">Ubytování nechce</span>
                        <span className="grid-column-value">{this.state.statistics.accommodation_declined_count}</span>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        statistics: state.fetchStatistics.data
    }
}

export default connect(mapStateToProps)(Statistics);
