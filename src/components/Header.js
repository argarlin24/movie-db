import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Search from "./Search";

const AppHeader = styled.header`
	display: flex;
	flex-wrap: wrap;
	background-color: #111;
	min-height: 100px;
	color: white;
	align-items: center;
	justify-content: space-between;
	padding-left: 60px;
	padding-right: 60px;

	@media (max-width: 414px) {
		flex-direction: column;
		padding: 30px 0px;
	}
`;

const Header = () => (
	<AppHeader>
		<div>
			<Link to="/">
				<h1>MovieDB</h1>
			</Link>
		</div>
		<div>
			<Search />
		</div>
	</AppHeader>
);

export default Header;
