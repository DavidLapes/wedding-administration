import React, {Component} from "react"
import {connect} from "react-redux";
import Select from "react-select";
import {editGuest} from "../../../services/actions/guests/editGuest";
import {fetchGuestDetail} from "../../../services/actions/guests/fetchGuestDetail";
import {removeEmpty} from "../../../lib/object";
import {push} from "connected-react-router";

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

    handleLanguage = (e) => {
        this.setState({
            language: e.value
        })
    };

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
                table_id: this.state.table_id
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
                    <label htmlFor="greeting_name">Jazyk</label>
                    <Select className="form-input"
                            id="accommodation"
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
    return (
        {
            guest: guest
        }
    )
}

export default connect(mapStateToProps)(EditGuest);
