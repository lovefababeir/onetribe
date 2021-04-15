import React from "react";
import "../components/heroesLineup.scss";
import { v4 as uuidv4 } from "uuid";

const HeroesLineup = props => {
	const { showSuperHero, showHero, showPeople, list, list2 } = props;
	const moveBack = i => {
		const initialPosition = ((i + 1) % 2) * -10;
		return !showPeople ? initialPosition : initialPosition - 10;
	};

	return (
		<div className="heroes">
			{list.map((hero, i) => {
				return (
					<img
						key={uuidv4()}
						src={hero.picture}
						className="heroes__pictures"
						alt={hero.hero}
						style={{
							left: `${(i * 65) / 7}%`,
							transform: `translateZ(${moveBack(i)}rem`,
							opacity: `${
								hero.hero === "Black Panther" ||
								(hero.type === "hero" && showHero) ||
								showSuperHero
									? 1
									: 0
							}`,
							zIndex: `${i % 2}`,
							transofrmStyle: "preserve-3d",
						}}
					/>
				);
			})}

			{list2.map((hero, i) => {
				return (
					<img
						key={uuidv4()}
						src={hero.picture}
						className="heroes__pictures"
						alt={hero.alt}
						style={{
							left: `${(i * 100) / 6}%`,
							zIndex: `${3}`,
							opacity: `${showPeople ? "1" : "0"}`,
							transform: `translateZ(4rem)`,
							transofrmStyle: "preserve-3d",
						}}
					/>
				);
			})}
		</div>
	);
};

export default HeroesLineup;
