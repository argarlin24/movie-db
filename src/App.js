import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";

import MoviesList from "./components/MoviesList";
import MovieDetail from "./components/MovieDetail";
import SearchList from "./components/SearchList";
import Search from "./components/Search";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<header className="App-header">
						<Link to="/">
							<h1>MovieDB</h1>
						</Link>
						<Search />
					</header>
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
