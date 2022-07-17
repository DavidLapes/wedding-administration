import React, {Component} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Audit from "./components/pages/audit/Audit";
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
import EditGuest from "./components/pages/guests/EditGuest";
import AssignRoomToGuest from "./components/pages/guests/AssignRoomToGuest";
import Statistics from "./components/pages/statistics/Statistics";
import RSVPAnswered from "./components/pages/statistics/RSVPAnswered";
import RSVPUnanswered from "./components/pages/statistics/RSVPUnanswered";
import AccommodationAccepted from "./components/pages/statistics/AccommodationAccepted";
import AccommodationDeclined from "./components/pages/statistics/AccommodationDeclined";
import BeerDrinkers from "./components/pages/statistics/BeerDrinkers";
import WineDrinkers from "./components/pages/statistics/WineDrinkers";
import GuestsWithRoom from "./components/pages/statistics/GuestsWithRoom";
import GuestsWithoutRoom from "./components/pages/statistics/GuestsWithoutRoom";
import CreateRoom from "./components/pages/rooms/CreateRoom";
import RoomDetail from "./components/pages/rooms/RoomDetail";
import RoomList from "./components/pages/rooms/RoomList";
import EditRoom from "./components/pages/rooms/EditRoom";

class App extends Component {
    render() {
        if(this.props.isAuthenticated) {
            return (
                <div>
                    <NavBar/>
                    <Switch>
                        <PrivateRoute exact path="/" component={Audit}/>
                        <PrivateRoute exact path="/create-guest" component={CreateGuest}/>
                        <PrivateRoute exact path="/guests" component={GuestList}/>
                        <PrivateRoute exact path="/guests/:id" component={GuestDetail}/>
                        <PrivateRoute exact path="/guests/:id/edit" component={EditGuest}/>
                        <PrivateRoute exact path="/guests/:id/assign-room" component={AssignRoomToGuest}/>
                        <PrivateRoute exact path="/create-table" component={CreateTable}/>
                        <PrivateRoute exact path="/tables" component={TableList}/>
                        <PrivateRoute exact path="/tables/:id" component={TableDetail}/>
                        <PrivateRoute exact path="/create-room" component={CreateRoom}/>
                        <PrivateRoute exact path="/rooms" component={RoomList}/>
                        <PrivateRoute exact path="/rooms/:id" component={RoomDetail}/>
                        <PrivateRoute exact path="/rooms/:id/edit" component={EditRoom}/>
                        <PrivateRoute exact path="/statistics" component={Statistics}/>
                        <PrivateRoute exact path="/statistics/rsvp-answered" component={RSVPAnswered}/>
                        <PrivateRoute exact path="/statistics/rsvp-unanswered" component={RSVPUnanswered}/>
                        <PrivateRoute exact path="/statistics/accommodation-accepted" component={AccommodationAccepted}/>
                        <PrivateRoute exact path="/statistics/accommodation-declined" component={AccommodationDeclined}/>
                        <PrivateRoute exact path="/statistics/beer-drinkers" component={BeerDrinkers}/>
                        <PrivateRoute exact path="/statistics/wine-drinkers" component={WineDrinkers}/>
                        <PrivateRoute exact path="/statistics/guests-with-room" component={GuestsWithRoom}/>
                        <PrivateRoute exact path="/statistics/guests-without-room" component={GuestsWithoutRoom}/>
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
