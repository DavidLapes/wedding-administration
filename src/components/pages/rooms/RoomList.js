import React, {Component} from "react";
import {connect} from "react-redux";
import { push } from "connected-react-router";
import {deleteRoom} from "../../../services/actions/rooms/deleteRoom";
import {fetchRooms} from "../../../services/actions/rooms/fetchRooms";
import MUIDataTable from "mui-datatables";

class RoomList extends Component {

    state = {
        rooms: []
    }

    componentDidMount() {
        this.props.dispatch(fetchRooms());
        if(this.props.rooms) {
            this.setState({
                rooms: this.props.rooms
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.rooms !== this.props.rooms) {
            this.setState({
                rooms: this.props.rooms
            })
        }
    }

    render() {
        return (
            <div className="page-component-container">
                <MUIDataTable
                    title={"Rooms"}
                    data={this.state.rooms}
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
                            name: "number",
                            label: "Number",
                            options: {
                                filter: false,
                                sort: false
                            }
                        },
                        {
                            name: "bed_count",
                            label: "Bed count",
                            options: {
                                filter: false,
                                sort: false
                            }
                        },
                        {
                            name: "allocated_count",
                            label: "Allocated count",
                            options: {
                                filter: false,
                                sort: false
                            }
                        },
                        {
                            name: "available_beds_count",
                            label: "Available beds",
                            options: {
                                filter: false,
                                sort: false
                            }
                        }
                    ]}
                    options={{
                        filterType: "checkbox",
                        filter: false,
                        print: false,
                        download: false,
                        onRowClick: (rowData) => {
                            this.props.dispatch(push("/rooms/" + rowData[0]))
                        },
                        onRowsDelete: (rows) => {
                            let lookup = rows.lookup;
                            let deletedData = Object.keys(lookup);
                            let dataIndexes = deletedData.map(x => parseInt(x));
                            dataIndexes.forEach(index => {
                                let room = this.state.rooms[index];
                                this.props.dispatch(deleteRoom(room.id))
                            })
                        }
                    }}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        rooms: state.fetchRooms.data
    }
}

export default connect(mapStateToProps)(RoomList);
