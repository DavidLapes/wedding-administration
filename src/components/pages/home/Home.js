import React, {Component} from "react";
import {fetchAudits} from "../../../services/actions/audit/fetchAudits";
import {connect} from "react-redux";
import MUIDataTable from "mui-datatables";

class Home extends Component {

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
                        filter: false,
                        print: false,
                        download: false,
                        search: false,
                        rowSelected: false,
                        rowsSelected: false,
                        selectableRows: false,
                        viewColumns: false
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

export default connect(mapStateToProps)(Home);
