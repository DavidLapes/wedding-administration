import React, {Component} from "react"
import {connect} from "react-redux";
import Select from "react-select";
import {fetchGuestDetail} from "../../../services/actions/guests/fetchGuestDetail";
import {push} from "connected-react-router";
import {fetchAvailableRooms} from "../../../services/actions/rooms/fetchAvailableRooms"
import {assignRoomToGuest} from "../../../services/actions/guests/assignRoomToGuest";

class AssignRoomToGuest extends Component {

    state = {
        id: null,
        room_id: null
    }

    componentDidMount() {
        this.props.dispatch(fetchGuestDetail(this.props.match.params.id));
        if (this.props.guest) {
            this.setState({
                ...this.props.guest
            })
        }

        this.props.dispatch(fetchAvailableRooms());
        if(this.props.rooms) {
            this.setState({
                rooms: this.props.rooms
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.guest !== this.props.guest) {
            this.setState({
                ...this.props.guest
            })
        }

        if(prevProps.rooms !== this.props.rooms) {
            this.setState({
                rooms: this.props.rooms
            })
        }
    }

    handleRoom = (e) => {
        this.setState({
            room_id: e.value
        })
    }

    handleSubmit = () => {
        this.props.dispatch(
            assignRoomToGuest(this.state.id, this.state.room_id
        ));
    };

    handleMoveBack = () => {
        this.props.dispatch(push("/guests/" + this.state.id))
    }

    render() {
        const roomOptions = [{
            id: 0,
            value: null,
            label: "-----"
        }].concat(this.props.rooms.data.map(
            item => (
                {
                    id: item.id,
                    value: item.id,
                    label: item.number
                }
            )
        ));

        return (
            <div className="page-component-container">
                <div className="form-container middle-align">
                    <button className="form-submit-button" onClick={this.handleMoveBack}>Zpět na detail</button>
                    <label htmlFor="greeting_name">Číslo pokoje</label>
                    <Select className="form-input"
                            id="room_id"
                            placeholder="Číslo pokoje"
                            options={roomOptions}
                            onChange={this.handleRoom}
                            value={roomOptions.find(item => item.value === this.state.room_id)}
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
    let rooms = state.fetchAvailableRooms;
    return (
        {
            guest: guest,
            rooms: rooms
        }
    )
}

export default connect(mapStateToProps)(AssignRoomToGuest);
