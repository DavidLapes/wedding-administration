import React, {Component} from "react";
import {connect} from "react-redux";
import {push} from "connected-react-router";

class StatisticsMenu extends Component {
    render() {
        return (
            <div>
                <div className="grid-container">
                    <div className="grid-column" onClick={() => this.props.dispatch(push("/statistics/rsvp-answered"))}>
                        <span className="grid-column-label">RSVP vyplnilo</span>
                    </div>
                    <div className="grid-column" onClick={() => this.props.dispatch(push("/statistics/rsvp-unanswered"))}>
                        <span className="grid-column-label">RSVP nevyplnilo</span>
                    </div>
                    <div className="grid-column" onClick={() => this.props.dispatch(push("/statistics/accommodation-accepted"))}>
                        <span className="grid-column-label">Ubytování chce</span>
                    </div>
                    <div className="grid-column" onClick={() => this.props.dispatch(push("/statistics/accommodation-declined"))}>
                        <span className="grid-column-label">Ubytování nechce</span>
                    </div>
                </div>
                <div className="grid-container">
                    <div className="grid-column" onClick={() => this.props.dispatch(push("/statistics/beer-drinkers"))}>
                        <span className="grid-column-label">Pivaři</span>
                    </div>
                    <div className="grid-column" onClick={() => this.props.dispatch(push("/statistics/wine-drinkers"))}>
                        <span className="grid-column-label">Vinaři</span>
                    </div>
                    <div className="grid-column" onClick={() => this.props.dispatch(push("/statistics/guests-with-room"))}>
                        <span className="grid-column-label">Ubytovaní hosté</span>
                    </div>
                    <div className="grid-column" onClick={() => this.props.dispatch(push("/statistics/guests-without-room"))}>
                        <span className="grid-column-label">Hosté čekající na pokoj</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(StatisticsMenu);
