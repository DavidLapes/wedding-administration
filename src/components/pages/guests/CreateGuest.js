import React, {Component} from "react"
import {connect} from "react-redux";
import {createGuest} from "../../../services/actions/guests/createGuest";

class CreateGuest extends Component {

    state = {
        first_name: null,
        last_name: null,
        table_id: null,
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
                    <label htmlFor="name">Name</label>
                    <input className="form-input" type="text" id="name" name="name"
                           onChange={this.handleChange}/>

                    <button className="form-submit-button" onClick={this.handleSubmit}>Create</button>
                </div>
            </div>
        )
    }
}

export default connect()(CreateGuest);
