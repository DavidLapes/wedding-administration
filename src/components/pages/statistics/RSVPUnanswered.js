import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchStatisticsRSVPUnanswered} from "../../../services/actions/statistics/fetchStatisticsRSVPUnanswered";
import {push} from "connected-react-router";
import MUIDataTable from "mui-datatables";
import StatisticsMenu from "./StatisticsMenu";

class RSVPUnanswered extends Component {

    state = {
        guests: []
    }

    componentDidMount() {
        this.props.dispatch(fetchStatisticsRSVPUnanswered());
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
                <StatisticsMenu/>
                <MUIDataTable
                    title={"RSVP nevyplnili tihle hosté"}
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
                        }
                    ]}
                    options={{
                        filterType: "checkbox",
                        print: false,
                        download: false,
                        search: false,
                        selectableRows: "none",
                        viewColumns: false,
                        onRowClick: (rowData) => {
                            this.props.dispatch(push("/guests/" + rowData[0]))
                        }
                    }}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        guests: state.fetchStatisticsRSVPUnanswered.data
    }
}

export default connect(mapStateToProps)(RSVPUnanswered);
