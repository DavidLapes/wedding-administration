import React, {Component} from "react"
import {connect} from "react-redux";
import {editRoom} from "../../../services/actions/rooms/editRoom";
import {fetchRoomDetail} from "../../../services/actions/rooms/fetchRoomDetail";
import {removeEmpty} from "../../../lib/object";
import {push} from "connected-react-router";

class EditRoom extends Component {

    state = {
        id: null,
        number: null,
        bed_count: null,
        allocated_count: null,
        available_beds_count: null
    }

    componentDidMount() {
        this.props.dispatch(fetchRoomDetail(this.props.match.params.id));
        if (this.props.room) {
            this.setState({
                ...this.props.room
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.room !== this.props.room) {
            this.setState({
                ...this.props.room
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleSubmit = () => {
        this.props.dispatch(editRoom(
            this.state.id,
            Object.assign(removeEmpty({
                number: this.state.number,
                bed_count: this.state.bed_count
            }))
        ));
    };

    handleMoveBack = () => {
        this.props.dispatch(push("/rooms/" + this.state.id))
    }

    render() {
        return (
            <div className="page-component-container">
                <div className="form-container middle-align">
                    <button className="form-submit-button" onClick={this.handleMoveBack}>Zpět na detail</button>
                    <label htmlFor="first_name">Číslo</label>
                    <input className="form-input" type="text" id="number" name="number"
                           onChange={this.handleChange}
                           value={this.state.number}
                    />
                    <label htmlFor="last_name">Kapacita</label>
                    <input className="form-input" type="text" id="bed_count" name="bed_count"
                           onChange={this.handleChange}
                           value={this.state.bed_count}
                    />
                    <button className="form-submit-button" onClick={this.handleSubmit}>Změnit</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id;
    let room = state.fetchRoomsDetails[id];
    return (
        {
            room: room
        }
    )
}

export default connect(mapStateToProps)(EditRoom);
