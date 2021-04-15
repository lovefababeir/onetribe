import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
import { v4 as uuidv4 } from "uuid";

const Header = () => {
	const listItems = [
		{
			page: "donate",
			link: "/donate",
		},
	];

	return (
		<header className="header">
			<NavLink to="/">
				<h1 className="header__logo">#OneTribe</h1>
			</NavLink>
			<nav className="menu">
				<ul className="menu__list">
					{listItems.map((item, i) => {
						return (
							<li key={uuidv4()}>
								<NavLink
									to={item.link}
									className={`menu__listItem ${item.page === "donate" ? "button" : ""}`}
									activeClassName="menu__activeItem"
								>
									{item.page}
								</NavLink>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
