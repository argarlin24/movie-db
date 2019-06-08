import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Search extends Component {
	state = {
		value: "",
		search: false,
	};

	onComponentDidMount() {
		this.setState({ search: false });
	}

	handleChange = event => {
		this.setState({ value: event.target.value });
	};

	handleSubmit = event => {
		event.preventDefault();
		const searchTerm = this.state.value
			.toLocaleLowerCase()
			.replace(/ /g, "+");
		this.props.history.push(`/search/${searchTerm}`);
		this.setState({
			search: !this.state.searchTerm,
			value: "",
		});
	};

	render() {
		return (
			<form>
				<label>
					Search
					<input
						type="text"
						name="Search"
						placeholder="Search a title or actor..."
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</label>
				<input
					type="submit"
					value="Submit"
					onClick={this.handleSubmit}
				/>
			</form>
		);
	}
}

export default withRouter(Search);
