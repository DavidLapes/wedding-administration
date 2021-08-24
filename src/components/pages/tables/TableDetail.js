import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchTableDetail} from "../../../services/actions/tables/fetchTableDetail";

class TableDetail extends Component {

    state = {
        id:             null,
        description:    null,
        number:         null,
        capacity:       null
    }

    componentDidMount() {
        this.props.dispatch(fetchTableDetail(this.props.match.params.id));
        if (this.props.table) {
            this.setState({
                ...this.props.table
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.table !== this.props.table) {
            this.setState({
                ...this.props.table
            })
        }
    }

    render() {
        //TODO
        return (
            <div className="page-component-container">
                Table detail
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id;
    let table = state.fetchTablesDetails[id];
    return (
        {
            table: table
        }
    )
}

export default connect(mapStateToProps)(TableDetail);
