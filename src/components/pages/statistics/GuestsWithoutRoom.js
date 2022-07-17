import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchStatisticsGuestsWithoutRoom} from "../../../services/actions/statistics/fetchStatisticsGuestsWithoutRoom";
import {push} from "connected-react-router";
import MUIDataTable from "mui-datatables";
import StatisticsMenu from "./StatisticsMenu";

class GuestsWithoutRoom extends Component {

    state = {
        guests: []
    }

    componentDidMount() {
        this.props.dispatch(fetchStatisticsGuestsWithoutRoom());
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
                    title={"Hosté čekající na ubytování"}
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
                            name: "full_name",
                            label: "Jméno",
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
        guests: state.fetchStatisticsGuestsWithoutRoom.data
    }
}

export default connect(mapStateToProps)(GuestsWithoutRoom);
