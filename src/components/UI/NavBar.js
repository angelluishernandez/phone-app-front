import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className="NavBar fixed-top navbar-dark bg-primary mb-5">
			<Link className="navbar-brand font-weight-bold" to={"/"}>
				GuideSmiths Phone App
			</Link>
		</nav>
	);
};

export default NavBar;
