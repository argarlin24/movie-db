import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import MoviesList from "./components/MoviesList";
import MovieDetail from "./components/MovieDetail";
import SearchList from "./components/SearchList";
import Header from "./components/Header"

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Header/>
					<Switch>
						<Route exact path="/" component={MoviesList} />
						<Route exact path="/:id" component={MovieDetail} />
						<Route
							exact
							path="/search/:term"
							component={SearchList}
						/>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
