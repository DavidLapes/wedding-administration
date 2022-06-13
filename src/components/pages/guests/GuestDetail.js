import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchGuestDetail} from "../../../services/actions/guests/fetchGuestDetail";
import {push} from "connected-react-router";

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
        postal_code: null,
        note: null,
        language: null,
        accommodation: null,
        rsvp_answered: null,
        email_sent: null,
        is_invitation_sent: null,
        invitation_delivery_type: null,
        invitation_delivery_type_name: null,
        table_id: null,
        is_meat_eater: null,
        is_beer_drinker: null,
        is_wine_drinker: null,
        escort_id: null,
        escort_name: null,
        type: null,
        type_name: null
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
        return (
            <div className="page-component-container">
                <div className="detail-container">
                    <div className="detail-row">
                        <div className="detail-row-title">
                            <span>ID</span>
                        </div>
                        <div className="detail-row-value">
                            <span>{this.state.id}</span>
                        </div>
                    </div>
                    <div className="detail-row">
                        <div className="detail-row-title">
                            <span>Jméno</span>
                        </div>
                        <div className="detail-row-value">
                            <span>{this.state.first_name}</span>
                        </div>
                    </div>
                    <div className="detail-row">
                        <div className="detail-row-title">
                            <span>Druhé jméno</span>
                        </div>
                        <div className="detail-row-value">
                            <span>{this.state.middle_name}</span>
                        </div>
                    </div>
                    <div className="detail-row">
                        <div className="detail-row-title">
                            <span>Příjmení</span>
                        </div>
                        <div className="detail-row-value">
                            <span>{this.state.last_name}</span>
                        </div>
                    </div>
                    <div className="detail-row">
                        <div className="detail-row-title">
                            <span>Oslovení</span>
                        </div>
                        <div className="detail-row-value">
                            <span>{this.state.greeting_name}</span>
                        </div>
                    </div>
                    <div className="detail-row">
                        <div className="detail-row-title">
                            <span>Ulice</span>
                        </div>
                        <div className="detail-row-value">
                            <span>{this.state.street}</span>
                        </div>
                    </div>
                    <div className="detail-row">
                        <div className="detail-row-title">
                            <span>Město</span>
                        </div>
                        <div className="detail-row-value">
                            <span>{this.state.city}</span>
                        </div>
                    </div>
                    <div className="detail-row">
                        <div className="detail-row-title">
                            <span>PSČ</span>
                        </div>
                        <div className="detail-row-value">
                            <span>{this.state.postal_code}</span>
                        </div>
                    </div>
                    <div className="detail-row">
                        <div className="detail-row-title">
                            <span>Země</span>
                        </div>
                        <div className="detail-row-value">
                            <span>{this.state.state}</span>
                        </div>
                    </div>
                    <div className="detail-row">
                        <div className="detail-row-title">
                            <span>E-mail</span>
                        </div>
                        <div className="detail-row-value">
                            <span>{this.state.email}</span>
                        </div>
                    </div>
                    <div className="detail-row">
                        <div className="detail-row-title">
                            <span>Telefon</span>
                        </div>
                        <div className="detail-row-value">
                            <span>{this.state.phone}</span>
                        </div>
                    </div>
                    <div className="detail-row">
                        <div className="detail-row-title">
                            <span>Typ hosta</span>
                        </div>
                        <div className="detail-row-value">
                            <span>{this.state.type_name}</span>
                        </div>
                    </div>
                    <div className="detail-row">
                        <div className="detail-row-title">
                            <span>Eskort</span>
                        </div>
                        <div className="detail-row-value" onClick={() => {
                            this.props.dispatch(fetchGuestDetail(this.state.escort_id));
                            this.props.dispatch(push("/guests/" + this.state.escort_id));
                        }}>
                            <span>{this.state.escort_name}</span>
                        </div>
                    </div>
                    <div className="detail-row">
                        <div className="detail-row-title">
                            <span>RSVP</span>
                        </div>
                        <div className="detail-row-value">
                            <span>{this.state.rsvp_answered ? "Ano" : "Ne"}</span>
                        </div>
                    </div>
                    <div className="detail-row">
                        <div className="detail-row-title">
                            <span>Ubytování</span>
                        </div>
                        <div className="detail-row-value">
                            <span>{this.state.accommodation ? "Ano" : "Ne"}</span>
                        </div>
                    </div>
                    <div className="detail-row">
                        <div className="detail-row-title">
                            <span>Jí maso</span>
                        </div>
                        <div className="detail-row-value">
                            <span>{this.state.is_meat_eater !== null
                                ? this.state.is_meat_eater ? "Ano" : "Ne"
                                : ""}</span>
                        </div>
                    </div>
                    <div className="detail-row">
                        <div className="detail-row-title">
                            <span>Pivař</span>
                        </div>
                        <div className="detail-row-value">
                            <span>{this.state.is_beer_drinker !== null
                                ? this.state.is_beer_drinker ? "Ano" : "Ne"
                                : ""}</span>
                        </div>
                    </div>
                    <div className="detail-row">
                        <div className="detail-row-title">
                            <span>Vinař</span>
                        </div>
                        <div className="detail-row-value">
                            <span>{this.state.is_wine_drinker !== null
                                ? this.state.is_wine_drinker ? "Ano" : "Ne"
                                : ""}</span>
                        </div>
                    </div>
                    <div className="detail-row">
                        <div className="detail-row-title">
                            <span>E-mail zaslán</span>
                        </div>
                        <div className="detail-row-value">
                            <span>{this.state.email_sent ? "Ano" : "Ne"}</span>
                        </div>
                    </div>
                    <div className="detail-row">
                        <div className="detail-row-title">
                            <span>Pozvánka poslána</span>
                        </div>
                        <div className="detail-row-value">
                            <span>{this.state.is_invitation_sent ? "Ano" : "Ne"}</span>
                        </div>
                    </div>
                    <div className="detail-row">
                        <div className="detail-row-title">
                            <span>Způsob doručení</span>
                        </div>
                        <div className="detail-row-value">
                            <span>{this.state.invitation_delivery_type_name}</span>
                        </div>
                    </div>
                    <div className="detail-row">
                        <div className="detail-row-title">
                            <span>Poznámka</span>
                        </div>
                        <div className="detail-row-value">
                            <span>{this.state.note}</span>
                        </div>
                    </div>
                    <div className="detail-row">
                        <div className="detail-row-title">
                            <span>ID stolu</span>
                        </div>
                        <div className="detail-row-value">
                            <span>{this.state.table_id}</span>
                        </div>
                    </div>
                    <div className="detail-row">
                        <div className="detail-row-title">
                            <span>Jazyk</span>
                        </div>
                        <div className="detail-row-value">
                            <span>{this.state.language}</span>
                        </div>
                    </div>
                    <div className="detail-row">
                        <button
                            className="form-submit-button"
                            onClick={() => this.props.dispatch(push("/guests/" + this.state.id + "/edit"))}
                        >
                            Editovat
                        </button>
                    </div>
                </div>
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
