import React, {Component} from "react"
import {connect} from "react-redux";
import {createGuest} from "../../../services/actions/guests/createGuest";

class CreateGuest extends Component {

    state = {
        first_name: null,
        last_name: null,
        middle_name: null,
        greeting_name: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleSubmit = () => {
        this.props.dispatch(createGuest({
            ...this.state
        }));
    };

    render() {
        return (
            <div className="page-component-container">
                <div className="form-container middle-align">
                    <label htmlFor="first_name">First name</label>
                    <input className="form-input" type="text" id="first_name" name="first_name"
                           onChange={this.handleChange}/>
                    <label htmlFor="last_name">Last name</label>
                    <input className="form-input" type="text" id="last_name" name="last_name"
                           onChange={this.handleChange}/>
                    <label htmlFor="middle_name">Middle name</label>
                    <input className="form-input" type="text" id="middle_name" name="middle_name"
                           onChange={this.handleChange}/>
                    <label htmlFor="greeting_name">Greeting name</label>
                    <input className="form-input" type="text" id="greeting_name" name="greeting_name"
                           onChange={this.handleChange}/>
                    <button className="form-submit-button" onClick={this.handleSubmit}>Create</button>
                </div>
            </div>
        )
    }
}

export default connect()(CreateGuest);
