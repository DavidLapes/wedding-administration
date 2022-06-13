import React, {Component} from "react"
import {connect} from "react-redux";
import Select from "react-select";
import {editGuest} from "../../../services/actions/guests/editGuest";
import {fetchGuestDetail} from "../../../services/actions/guests/fetchGuestDetail";
import {removeEmpty} from "../../../lib/object";
import {push} from "connected-react-router";
import {fetchGuests} from "../../../services/actions/guests/fetchGuests";

class EditGuest extends Component {

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
        table_id: null,
        is_meat_eater: null,
        is_beer_drinker: null,
        is_wine_drinker: null,
        is_invitation_sent: null,
        invitation_delivery_type: null,
        escort_id: null,
        type: null
    }

    componentDidMount() {
        this.props.dispatch(fetchGuestDetail(this.props.match.params.id));
        if (this.props.guest) {
            this.setState({
                ...this.props.guest
            })
        }

        this.props.dispatch(fetchGuests());
        if(this.props.guests) {
            this.setState({
                guests: this.props.guests
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.guest !== this.props.guest) {
            this.setState({
                ...this.props.guest
            })
        }

        if(prevProps.guests !== this.props.guests) {
            this.setState({
                guests: this.props.guests
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleAccommodation = (e) => {
        this.setState({
            accommodation: e.value
        })
    };

    handleBeer = (e) => {
        this.setState({
            is_beer_drinker: e.value
        })
    };

    handleWine = (e) => {
        this.setState({
            is_wine_drinker: e.value
        })
    };

    handleInvitationDelivery = (e) => {
        this.setState({
            is_invitation_sent: e.value
        })
    };

    handleLanguage = (e) => {
        this.setState({
            language: e.value
        })
    };

    handleType = (e) => {
        this.setState({
            type: e.value
        })
    }

    handleEscort = (e) => {
        this.setState({
            escort_id: e.value
        })
    }

    handleInvitationDeliveryType = (e) => {
        this.setState({
            invitation_delivery_type: e.value
        })
    };

    handleMeat = (e) => {
        this.setState({
            is_meat_eater: e.value
        })
    }

    handleStatus = (e) => {
        this.setState({
            status: e.value
        })
    }

    handleSubmit = () => {
        this.props.dispatch(editGuest(
            this.state.id,
            removeEmpty({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                middle_name: this.state.middle_name,
                greeting_name: this.state.greeting_name,
                phone: this.state.phone,
                email: this.state.email,
                state: this.state.state,
                city: this.state.city,
                street: this.state.street,
                postal_code: this.state.postal_code,
                note: this.state.note,
                language: this.state.language,
                accommodation: this.state.accommodation,
                table_id: this.state.table_id,
                is_meat_eater: this.state.is_meat_eater,
                is_beer_drinker: this.state.is_beer_drinker,
                is_wine_drinker: this.state.is_wine_drinker,
                type: this.state.type,
                is_invitation_sent: this.state.is_invitation_sent,
                invitation_delivery_type: this.state.invitation_delivery_type,
                escort_id: this.state.escort_id
            })
        ));
    };

    handleMoveBack = () => {
        this.props.dispatch(push("/guests/" + this.state.id))
    }

    render() {

        const accommodationOptions = [
            {
                id: 1,
                value: true,
                label: "Ano"
            },
            {
                id: 2,
                value: false,
                label: "Ne"
            }
        ];

        const beerOptions = [
            {
                id: 1,
                value: true,
                label: "Ano"
            },
            {
                id: 2,
                value: false,
                label: "Ne"
            }
        ];

        const wineOptions = [
            {
                id: 1,
                value: true,
                label: "Ano"
            },
            {
                id: 2,
                value: false,
                label: "Ne"
            }
        ];

        const isInvitationSentOptions = [
            {
                id: 1,
                value: true,
                label: "Ano"
            },
            {
                id: 2,
                value: false,
                label: "Ne"
            }
        ];

        const invitationDeliveryTypeOptions = [
            {
                id: 1,
                value: "IN_PERSON",
                label: "Osobní předání"
            },
            {
                id: 2,
                value: "MAIL",
                label: "Pošta"
            }
        ];

        const statusOptions = [
            {
                id: 1,
                value: "ACCEPTED",
                label: "Přijatý"
            },
            {
                id: 2,
                value: "REJECTED",
                label: "Odmítnutý"
            }
        ];

        const typeOptions = [
            {
                id: 1,
                value: "PRIMARY",
                label: "Primární host"
            },
            {
                id: 2,
                value: "PLUS_ONE",
                label: "Host jako plus jedna"
            }
        ];

        const escortOptions = this.props.guests.data.map(
            item => (
                {
                    id: item.id,
                    value: item.id,
                    label: item.first_name + " " + item.last_name + ", " + item.city
                }
            )
        );

        const languageOptions = [
            {
                id: 1,
                value: "czech",
                label: "Čeština"
            },
            {
                id: 2,
                value: "english",
                label: "Angličtina"
            }
        ]

        const meatEaterOptions = [
            {
                id: 1,
                value: true,
                label: "Ano"
            },
            {
                id: 2,
                value: false,
                label: "Ne"
            }
        ];

        return (
            <div className="page-component-container">
                <div className="form-container middle-align">
                    <button className="form-submit-button" onClick={this.handleMoveBack}>Zpět na detail</button>
                    <label htmlFor="first_name">Jméno</label>
                    <input className="form-input" type="text" id="first_name" name="first_name"
                           onChange={this.handleChange}
                           value={this.state.first_name}
                    />
                    <label htmlFor="last_name">Příjmení</label>
                    <input className="form-input" type="text" id="last_name" name="last_name"
                           onChange={this.handleChange}
                           value={this.state.last_name}
                    />
                    <label htmlFor="middle_name">Druhé jméno</label>
                    <input className="form-input" type="text" id="middle_name" name="middle_name"
                           onChange={this.handleChange}
                           value={this.state.middle_name}
                    />
                    <label htmlFor="greeting_name">Oslovení</label>
                    <input className="form-input" type="text" id="greeting_name" name="greeting_name"
                           onChange={this.handleChange}
                           value={this.state.greeting_name}
                    />
                    <label htmlFor="greeting_name">Typ hosta</label>
                    <Select className="form-input"
                            id="type"
                            placeholder="Typ hosta"
                            options={typeOptions}
                            onChange={this.handleType}
                            value={typeOptions.find(item => item.value === this.state.type)}
                    />
                    <label htmlFor="greeting_name">Eskort</label>
                    <Select className="form-input"
                            id="escort_id"
                            placeholder="Eskort"
                            options={escortOptions}
                            onChange={this.handleEscort}
                            value={escortOptions.find(item => item.value === this.state.escort_id)}
                    />
                    <label htmlFor="greeting_name">Město</label>
                    <input className="form-input" type="text" id="city" name="city"
                           onChange={this.handleChange}
                           value={this.state.city}
                    />
                    <label htmlFor="greeting_name">Ulice</label>
                    <input className="form-input" type="text" id="street" name="street"
                           onChange={this.handleChange}
                           value={this.state.street}
                    />
                    <label htmlFor="greeting_name">PSČ</label>
                    <input className="form-input" type="text" id="postal_code" name="postal_code"
                           onChange={this.handleChange}
                           value={this.state.postal_code}
                    />
                    <label htmlFor="greeting_name">Stát</label>
                    <input className="form-input" type="text" id="state" name="state"
                           onChange={this.handleChange}
                           value={this.state.state}
                    />
                    <label htmlFor="greeting_name">E-mail</label>
                    <input className="form-input" type="text" id="email" name="email"
                           onChange={this.handleChange}
                           value={this.state.email}
                    />
                    <label htmlFor="greeting_name">Telefon</label>
                    <input className="form-input" type="text" id="phone" name="phone"
                           onChange={this.handleChange}
                           value={this.state.phone}
                    />
                    <label htmlFor="greeting_name">Ubytování</label>
                    <Select className="form-input"
                            id="accommodation"
                            placeholder="Bude chtít ubytování?"
                            options={accommodationOptions}
                            onChange={this.handleAccommodation}
                            value={accommodationOptions.find(item => item.value === this.state.accommodation)}
                    />
                    <label htmlFor="greeting_name">Poznámka</label>
                    <input className="form-input" type="text" id="note" name="note"
                           onChange={this.handleChange}
                           value={this.state.note}
                    />
                    <label htmlFor="is_beer_drinker">Pije pivo?</label>
                    <Select className="form-input"
                            id="is_beer_drinker"
                            placeholder="Pije pivo?"
                            options={beerOptions}
                            onChange={this.handleBeer}
                            value={beerOptions.find(item => item.value === this.state.is_beer_drinker)}
                    />
                    <label htmlFor="is_wine_drinker">Pije víno?</label>
                    <Select className="form-input"
                            id="is_wine_drinker"
                            placeholder="Pije víno?"
                            options={wineOptions}
                            onChange={this.handleWine}
                            value={wineOptions.find(item => item.value === this.state.is_wine_drinker)}
                    />
                    <label htmlFor="is_meat_eater">Jí maso?</label>
                    <Select className="form-input"
                            id="is_meat_eater"
                            placeholder="Jí maso?"
                            options={meatEaterOptions}
                            onChange={this.handleMeat}
                            value={meatEaterOptions.find(item => item.value === this.state.is_meat_eater)}
                    />
                    <label htmlFor="is_invitation_sent">Pozvánka poslána?</label>
                    <Select className="form-input"
                            id="is_invitation_sent"
                            placeholder="Pozvánka poslána?"
                            options={isInvitationSentOptions}
                            onChange={this.handleInvitationDelivery}
                            value={isInvitationSentOptions.find(item => item.value === this.state.is_invitation_sent)}
                    />
                    <label htmlFor="greeting_name">Způsob doručení pozvánky</label>
                    <Select className="form-input"
                            id="invitation_delivery_type"
                            placeholder="Způsob doručení pozvánky"
                            options={invitationDeliveryTypeOptions}
                            onChange={this.handleInvitationDeliveryType}
                            value={invitationDeliveryTypeOptions.find(item => item.value === this.state.invitation_delivery_type)}
                    />
                    <label htmlFor="greeting_name">Jazyk</label>
                    <Select className="form-input"
                            id="language"
                            placeholder="Jazyk e-mailů"
                            options={languageOptions}
                            onChange={this.handleLanguage}
                            value={languageOptions.find(item => item.value === this.state.language)}
                    />
                    <button className="form-submit-button" onClick={this.handleSubmit}>Změnit</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id;
    let guest = state.fetchGuestsDetails[id];
    let guests = state.fetchGuests;
    return (
        {
            guest: guest,
            guests: guests
        }
    )
}

export default connect(mapStateToProps)(EditGuest);
