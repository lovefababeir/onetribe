import React from "react";
import "../components/footer.scss";

const Footer = () => {
	return (
		<footer className="footer">
			<p className="footer__copyright">
				Created by{" "}
				<a className="footer__link" href="https://lovefababeir.com/" target="blank">
					Love Fababeir
				</a>{" "}
				- Copyright 2021 <br />{" "}
				<a href="https://www.marvel.com/" target="blank" className="footer__link">
					Data provided by Marvel. © 2014 Marvel
				</a>
			</p>
		</footer>
	);
};

export default Footer;
