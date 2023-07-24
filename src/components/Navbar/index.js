import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/" activeStyle>
						Home
					</NavLink>
					<NavLink to="/NewPlayer" activeStyle>
						New Player
					</NavLink>
					<NavLink to="/EditPlayer" activeStyle>
						Edit Player
					</NavLink>
					<NavLink to="/Search" activeStyle>
						Search
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
