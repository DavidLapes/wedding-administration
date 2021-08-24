import React, {Component} from "react"
import {connect} from "react-redux";
import {createTable} from "../../../services/actions/tables/createTable";

class CreateTable extends Component {

    state = {
        description:    null,
        number:         null,
        capacity:       null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleSubmit = () => {
        this.props.dispatch(createTable({
            description: this.state.description,
            number:      parseInt(this.state.number),
            capacity:    parseInt(this.state.capacity)
        }));
    };

    render() {
        return (
            <div className="page-component-container">
                <div className="form-container middle-align">
                    <label htmlFor="description">Description</label>
                    <input className="form-input" type="text" id="description" name="description"
                           onChange={this.handleChange}/>
                    <label htmlFor="number">Number</label>
                    <input className="form-input" type="number" id="number" name="number"
                           onChange={this.handleChange}/>
                    <label htmlFor="capacity">Capacity</label>
                    <input className="form-input" type="number" id="capacity" name="capacity"
                           onChange={this.handleChange}/>
                    <button className="form-submit-button" onClick={this.handleSubmit}>Create</button>
                </div>
            </div>
        )
    }
}

export default connect()(CreateTable);
