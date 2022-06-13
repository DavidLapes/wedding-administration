import React, {Component} from "react";
import {connect} from "react-redux";
import { push } from "connected-react-router";
import {deleteGuest} from "../../../services/actions/guests/deleteGuest";
import {fetchGuests} from "../../../services/actions/guests/fetchGuests";
import MUIDataTable from "mui-datatables";

class GuestList extends Component {

    state = {
        guests: []
    }

    componentDidMount() {
        this.props.dispatch(fetchGuests());
        if(this.props.guests) {
            this.setState({
                guests: this.props.guests
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.guests !== this.props.guests) {
            this.setState({
                guests: this.props.guests
            })
        }
    }

    render() {
        return (
            <div className="page-component-container">
                <MUIDataTable
                    title={"Hosti"}
                    data={this.state.guests}
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
                            name: "first_name",
                            label: "Jméno",
                            options: {
                                filter: false,
                                sort: false
                            }
                        },
                        {
                            name: "last_name",
                            label: "Příjmení",
                            options: {
                                filter: false,
                                sort: false
                            }
                        },
                        {
                            name: "rsvp_answered",
                            label: "RSVP",
                            options: {
                                filter: false,
                                sort: false,
                                customBodyRender: value => {
                                    if(value === true) {
                                        return <span>Ano</span>
                                    } else {
                                        return <span>Ne</span>
                                    }
                                }
                            }
                        },
                        {
                            name: "is_beer_drinker",
                            label: "Pivař",
                            options: {
                                filter: false,
                                sort: false,
                                customBodyRender: value => {
                                    if(value !== null) {
                                        if(value === true) {
                                            return <span>Ano</span>
                                        } else {
                                            return <span>Ne</span>
                                        }
                                    } else {
                                        return <span></span>
                                    }
                                }
                            }
                        },
                        {
                            name: "is_wine_drinker",
                            label: "Vinař",
                            options: {
                                filter: false,
                                sort: false,
                                customBodyRender: value => {
                                    if(value !== null) {
                                        if(value === true) {
                                            return <span>Ano</span>
                                        } else {
                                            return <span>Ne</span>
                                        }
                                    } else {
                                        return <span></span>
                                    }
                                }
                            }
                        },
                        {
                            name: "is_invitation_sent",
                            label: "Pozvánka poslána",
                            options: {
                                filter: false,
                                sort: false,
                                customBodyRender: value => {
                                    if(value !== null) {
                                        if(value === true) {
                                            return <span>Ano</span>
                                        } else {
                                            return <span>Ne</span>
                                        }
                                    } else {
                                        return <span></span>
                                    }
                                }
                            }
                        },
                        {
                            name: "escort_name",
                            label: "Eskort",
                            options: {
                                filter: false,
                                sort: false
                            }
                        },
                        {
                            name: "type",
                            label: "Typ",
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
                            this.props.dispatch(push("/guests/" + rowData[0]))
                        },
                        onRowsDelete: (rows) => {
                            let lookup = rows.lookup;
                            let deletedData = Object.keys(lookup);
                            let dataIndexes = deletedData.map(x => parseInt(x));
                            dataIndexes.forEach(index => {
                                let guest = this.state.guests[index];
                                this.props.dispatch(deleteGuest(guest.id))
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
        guests: state.fetchGuests.data
    }
}

export default connect(mapStateToProps)(GuestList);
