import React, { useState, useEffect } from "react";
import HeroCardDetails from "../components/heroCardDetails.js";
import "../components/heroCard.scss";

const HeroCard = ({ hero, index }) => {
	const cardId = `hero-${index}`;

	const [animation, setAnimation] = useState(false);

	const updatePosition = () => {
		const cardYPos = window.document.getElementById(cardId).offsetTop;
		const cardHeight = window.document.getElementById(cardId).offsetHeight;
		if (window.pageYOffset > cardYPos - cardHeight / 2) {
			setTimeout(() => {
				setAnimation(true);
			}, 500);
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", updatePosition);
		return () => window.removeEventListener("scroll", updatePosition);
	});

	return (
		<div className="hero" id={cardId}>
			<HeroCardDetails hero={hero} index={index} reveal={animation} />
			<div>
				<img
					src={hero.pictureTransparent.img}
					className="hero__picture"
					alt={`${hero.name} in a fighting position`}
				/>
			</div>
		</div>
	);
};

export default HeroCard;
