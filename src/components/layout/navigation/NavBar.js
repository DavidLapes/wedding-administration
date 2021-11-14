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
                            <Link to="/guests">Hosti</Link>
                            <ul className="nav-link-dropdown">
                                <li>
                                    <Link to="/create-guest">Přidat hosta</Link>
                                </li>
                                <li>
                                    <Link to="/guests">Zobrazit hosty</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/tables">Stoly</Link>
                            <ul className="nav-link-dropdown">
                                <li>
                                    <Link to="/create-table">Přidat stůl</Link>
                                </li>
                                <li>
                                    <Link to="/tables">Zobrazit stoly</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button className="nav-logout-button" onClick={this.handleLogout}>Odhlásit se</button>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default connect()(NavBar);
