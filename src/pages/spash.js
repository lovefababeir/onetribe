import React from "react";
import Layout from "../components/layout.js";
import Intro from "../components/intro.js";
import HeroCard from "../components/heroCard.js";
import {
	superHeroList,
	heroList,
	peopleList,
} from "../assets/lists/heroList.js";
import { v4 as uuidv4 } from "uuid";

const Splash = () => {
	return (
		<Layout id="splash">
			<Intro list={heroList} list2={peopleList} />
			{superHeroList.map((hero, i) => {
				return <HeroCard hero={hero} index={i} key={uuidv4()} />;
			})}
		</Layout>
	);
};

export default Splash;
