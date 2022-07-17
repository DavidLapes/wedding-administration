import React, {Component} from "react"
import {connect} from "react-redux";
import {createRoom} from "../../../services/actions/rooms/createRoom";

class CreateRoom extends Component {

    state = {
        number:    null,
        bed_count: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleSubmit = () => {
        this.props.dispatch(createRoom({
            number:    this.state.number,
            bed_count: parseInt(this.state.bed_count)
        }));
    };

    render() {
        return (
            <div className="page-component-container">
                <div className="form-container middle-align">
                    <label htmlFor="number">Number</label>
                    <input className="form-input" type="text" id="number" name="number"
                           onChange={this.handleChange}/>
                    <label htmlFor="bed_count">Bed count</label>
                    <input className="form-input" type="number" id="bed_count" name="bed_count"
                           onChange={this.handleChange}/>
                    <button className="form-submit-button" onClick={this.handleSubmit}>Create</button>
                </div>
            </div>
        )
    }
}

export default connect()(CreateRoom);
