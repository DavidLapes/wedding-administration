import React, {Component} from "react";
import {connect} from "react-redux";
import { push } from "connected-react-router";
import {deleteTable} from "../../../services/actions/tables/deleteTable";
import {fetchTables} from "../../../services/actions/tables/fetchTables";
import MUIDataTable from "mui-datatables";

class TableList extends Component {

    state = {
        tables: []
    }

    componentDidMount() {
        this.props.dispatch(fetchTables());
        if(this.props.tables) {
            this.setState({
                tables: this.props.tables
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.tables !== this.props.tables) {
            this.setState({
                tables: this.props.tables
            })
        }
    }

    render() {
        return (
            <div className="page-component-container">
                <MUIDataTable
                    title={"Tables"}
                    data={this.state.tables}
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
                            name: "description",
                            label: "Description",
                            options: {
                                filter: false,
                                sort: false,
                                customBodyRender: value => {
                                    if(value !== undefined && value!== null) {
                                        return <span>{value.substring(0,10)}</span>
                                    } else {
                                        return <span/>
                                    }
                                }
                            }
                        },
                        {
                            name: "capacity",
                            label: "Capacity",
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
                        filter: false,
                        print: false,
                        download: false,
                        onRowClick: (rowData) => {
                            this.props.dispatch(push("/tables/" + rowData[0]))
                        },
                        onRowsDelete: (rows) => {
                            let lookup = rows.lookup;
                            let deletedData = Object.keys(lookup);
                            let dataIndexes = deletedData.map(x => parseInt(x));
                            dataIndexes.forEach(index => {
                                let table = this.state.tables[index];
                                this.props.dispatch(deleteTable(table.id))
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
        tables: state.fetchTables.data
    }
}

export default connect(mapStateToProps)(TableList);
