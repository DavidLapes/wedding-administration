import React, {Component} from "react";
import {Link} from "react-router-dom";
import {logout} from "../../../services/actions/auth/authenticateUser";
import {connect} from "react-redux";

class NavBar extends Component {

    handleLogout = () => {
        this.props.dispatch(logout());
    }

    render() {
        return (
            <header className="nav-header">
                <Link className="nav-logo-link" to="/">
                    <img src={"/img/logo.png"} alt="logo"/>
                </Link>
                <nav>
                    <ul className="nav-links">
                        <li>
                            <Link to="/guests">Guests</Link>
                            <ul className="nav-link-dropdown">
                                <li>
                                    <Link to="/create-guest">Add Guest</Link>
                                </li>
                                <li>
                                    <Link to="/guests">Show Guests</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/tables">Tables</Link>
                            <ul className="nav-link-dropdown">
                                <li>
                                    <Link to="/create-table">Add Table</Link>
                                </li>
                                <li>
                                    <Link to="/tables">Show Tables</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button className="nav-logout-button" onClick={this.handleLogout}>Log Out</button>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default connect()(NavBar);
