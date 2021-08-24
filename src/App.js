import React, {Component} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "./components/pages/home/Home";
import NavBar from "./components/layout/navigation/NavBar";
import {connect} from "react-redux";
import AuthPage from "./components/pages/auth/AuthPage";
import PrivateRoute from "./components/route/PrivateRoute";
import GuestList from "./components/pages/guests/GuestList";
import GuestDetail from "./components/pages/guests/GuestDetail";
import CreateGuest from "./components/pages/guests/CreateGuest";
import TableDetail from "./components/pages/tables/TableDetail";
import TableList from "./components/pages/tables/TableList";
import CreateTable from "./components/pages/tables/CreateTable";

class App extends Component {
    render() {
        if(this.props.isAuthenticated) {
            return (
                <div>
                    <NavBar/>
                    <Switch>
                        <PrivateRoute exact path="/" component={Home}/>
                        <PrivateRoute exact path="/create-guest" component={CreateGuest}/>
                        <PrivateRoute exact path="/guests" component={GuestList}/>
                        <PrivateRoute exact path="/guests/:id" component={GuestDetail}/>
                        <PrivateRoute exact path="/create-table" component={CreateTable}/>
                        <PrivateRoute exact path="/tables" component={TableList}/>
                        <PrivateRoute exact path="/tables/:id" component={TableDetail}/>
                        <Redirect from="*" to="/"/>
                    </Switch>
                </div>
            )
        } else {
            return (
                <div>
                    <Switch>
                        <Route exact path="/" component={ AuthPage }/>
                        <Redirect from="*" to="/"/>
                    </Switch>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps)(App);
