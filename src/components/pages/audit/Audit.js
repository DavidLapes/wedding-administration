import React, {Component} from "react";
import {connect} from "react-redux";
import { push } from "connected-react-router";
import {fetchAudits} from "../../../services/actions/audit/fetchAudits";
import MUIDataTable from "mui-datatables";

class Audit extends Component {

    state = {
        audits: []
    }

    componentDidMount() {
        this.props.dispatch(fetchAudits());
        if(this.props.audits) {
            this.setState({
                audits: this.props.audits
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.audits !== this.props.audits) {
            this.setState({
                audits: this.props.audits
            })
        }
    }

    render() {
        return (
            <div className="page-component-container">
                <MUIDataTable
                    title={"Audit"}
                    data={this.state.audits}
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
                            name: "guest_id",
                            label: "ID hosta",
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
                            name: "email",
                            label: "E-mail",
                            options: {
                                filter: false,
                                sort: false
                            }
                        },
                        {
                            name: "accommodation",
                            label: "Ubytování",
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
                            name: "event",
                            label: "Akce",
                            options: {
                                filter: false,
                                sort: false
                            }
                        },
                        {
                            name: "time_created",
                            label: "Datum vytvoření",
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
                            this.props.dispatch(push("/guests/" + rowData[1]))
                        }
                    }}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        audits: state.fetchAudits.dataReduced
    }
}

export default connect(mapStateToProps)(Audit);
