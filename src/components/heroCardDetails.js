import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import Collapse from "@material-ui/core/Collapse";
import "../components/heroCardDetails.scss";
import md5 from "md5";
import axios from "axios";

const HeroCardDetails = ({ hero, reveal, index }) => {
	const [marvelHeroDetails, setMarvelHeroDetails] = useState("");
	useEffect(() => {
		var time = Date.now();
		const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
		const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
		var hash = md5(time + privateKey + publicKey);
		axios
			.get(
				`https://gateway.marvel.com:443/v1/public/characters/${hero.id}?ts=${time}&apikey=${publicKey}&hash=${hash}`,
			)
			.then(res => {
				setMarvelHeroDetails(res.data.data.results[0]);
			})
			.catch(err => {
				return console.log(err);
			});
	}, [hero.id]);

	if (marvelHeroDetails) {
		const { name, description } = marvelHeroDetails;
		return (
			<Collapse in={reveal} time={800}>
				<div>
					<h1 className="hero__heroName">{name}</h1>
					{hero.name && <h2 className="hero__name">{hero.name}</h2>}
					<p className="hero__description">{description || hero.description}</p>
					<span className="cta__box">
						<Link to="/donate">
							<h4 className="cta__support button">Support {hero.usedName}</h4>
						</Link>
						{index < 8 ? (
							<Scroll to={`hero-${index + 1}`}>
								<h4 className="cta__nextHero button">Next Hero</h4>
							</Scroll>
						) : (
							<Scroll to={"intro"}>
								<h4 className="cta__nextHero button">Back to the top</h4>
							</Scroll>
						)}
					</span>
				</div>
			</Collapse>
		);
	} else {
		return (
			<div>
				<p className="hero__description">loading....</p>
			</div>
		);
	}
};

export default HeroCardDetails;
