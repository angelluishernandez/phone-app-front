import React from "react";
import "./App.css";
import NavBar from "./components/UI/NavBar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/UI/Home";
import PhoneDetails from "./components/UI/PhoneDetails";
import {connect} from "react-redux"
import updatePhones from "./redux/store/store"


function App(props) {
	console.log("props in App=> ", props)
	return (
		<div className="App">
			<NavBar />
			<Switch>
				<Route exact path="/">
					<Home props={props}/>
				</Route>
				<Route exact path={"/:id"}>
					<PhoneDetails />
				</Route>
			</Switch>
		</div>
	);
}

const MapPhones = (state) => {
	return {
		phones: state.phones
	}
}

const MapDispatchPhones = (dispatch) => {
	return {
		updatePhones : () => dispatch(updatePhones)
			}
}

export default connect (MapPhones, MapDispatchPhones)(App);
