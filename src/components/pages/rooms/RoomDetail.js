import React, {Component} from "react";
import {connect} from "react-redux";
import {assignRoomToGuest} from "../../../services/actions/guests/assignRoomToGuest";
import {fetchRoomDetail} from "../../../services/actions/rooms/fetchRoomDetail";
import {push} from "connected-react-router";
import MUIDataTable from "mui-datatables";

class RoomDetail extends Component {

    state = {
        id:                   null,
        number:               null,
        bed_count:            null,
        allocated_count:      null,
        allocated_guests:     [],
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
                            <span>Číslo</span>
                        </div>
                        <div className="detail-row-value">
                            <span>{this.state.number}</span>
                        </div>
                    </div>
                    <div className="detail-row">
                        <div className="detail-row-title">
                            <span>Kapacita</span>
                        </div>
                        <div className="detail-row-value">
                            <span>{this.state.bed_count}</span>
                        </div>
                    </div>
                    <div className="detail-row">
                        <div className="detail-row-title">
                            <span>Počet obsazených</span>
                        </div>
                        <div className="detail-row-value">
                            <span>{this.state.allocated_count}</span>
                        </div>
                    </div>
                    <div className="detail-row">
                        <div className="detail-row-title">
                            <span>Počet volných</span>
                        </div>
                        <div className="detail-row-value">
                            <span>{this.state.available_beds_count}</span>
                        </div>
                    </div>
                    <div className="detail-row">
                        <button
                            className="form-submit-button"
                            onClick={() => this.props.dispatch(push("/rooms/" + this.state.id + "/edit"))}
                        >
                            Editovat
                        </button>
                    </div>
                    {typeof this.state.allocated_guests !== 'undefined' && this.state.allocated_guests.length > 0
                        ?
                        <div className="detail-row">
                            <MUIDataTable
                                title={"Ubytovaní hosté"}
                                data={this.state.allocated_guests}
                                columns={[
                                    {
                                        name: "id",
                                        label: "ID",
                                        options: {
                                            filter: false,
                                            sort: false
                                        }
                                    },
                                    {
                                        name: "full_name",
                                        label: "Jméno",
                                        options: {
                                            filter: false,
                                            sort: false
                                        }
                                    },
                                    {
                                        name: "room_id",
                                        label: "ID pokoje",
                                        options: {
                                            filter: false,
                                            sort: false
                                        }
                                    }
                                ]}
                                options={{
                                    filterType: "checkbox",
                                    print: false,
                                    download: false,
                                    search: false,
                                    selectableRows: "single",
                                    viewColumns: false,
                                    onRowClick: (rowData) => {
                                        this.props.dispatch(push("/guests/" + rowData[0]))
                                    },
                                    onRowsDelete: (rows) => {
                                        console.log(rows);
                                        let lookup = rows.lookup;
                                        let deletedData = Object.keys(lookup);
                                        let dataIndexes = deletedData.map(x => parseInt(x));
                                        console.log("Lookup:", lookup);
                                        console.log("Deleted data:", deletedData);
                                        console.log("Data indexes:", dataIndexes);
                                        dataIndexes.forEach(index => {
                                            let guest = this.state.allocated_guests[index];
                                            this.props.dispatch(assignRoomToGuest(guest.id, null));
                                        });
                                    }
                                }}
                            />
                        </div>
                        : <div/>}
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

export default connect(mapStateToProps)(RoomDetail);
