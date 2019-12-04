import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const StyledInput = styled.input`
	padding: 8px 15px;
	margin-left: 5px;
	margin-right: 10px;
	border-radius: 5px;
	border-style: none;
	font-size: 12px;
`;

const InputBtn = styled.button`
	font-size: 16px;
	padding: 8px 20px;
	border-radius: 5px;
	border-style: none;
	font-weight: 600;
	cursor: pointer;
`;

const StyledLabel = styled.label`
	font-size: 16px;
	font-weight: bold;
`;

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
		if (this.state.value < 1) {
			alert("Please enter a search term");
		} else {
			const searchTerm = this.state.value
				.toLocaleLowerCase()
				.replace(/ /g, "+");
			this.props.history.push(`/search/${searchTerm}`);
			this.setState({
				search: !this.state.searchTerm,
				value: "",
			});
		}
	};

	render() {
		return (
			<form>
				<StyledLabel>
					Search
					<StyledInput
						type="text"
						name="Search"
						placeholder="Search a title or actor"
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</StyledLabel>
				<InputBtn
					type="submit"
					value="Submit"
					onClick={this.handleSubmit}
				>
					Submit
				</InputBtn>
			</form>
		);
	}
}

export default withRouter(Search);
