import ironMan from "../images/ironman.png";
import blackPanther from "../images/blackpanther.png";
import blackWidow from "../images/blackWidow.png";
import captainAmerica from "../images/captainAmerica.png";
import hawkeye from "../images/hawkeye.png";
import hulk from "../images/hulk.png";
import thor from "../images/thor.png";
import vision from "../images/vision.png";
import scarletWitch from "../images/scarletWitch.png";

import kingTchalla from "../images/intro-blackPanther.png";
import soldier from "../images/intro-soldier-f.png";
import police from "../images/intro-police.png";
import tonyStark from "../images/intro-ironMan.png";
import soldier2 from "../images/intro-soldier-m.png";
import wanda from "../images/intro-scarletWitch.png";
import doctor from "../images/intro-doctor.png";
import steveRogers from "../images/intro-captainAmerica.png";
import firefighter from "../images/intro-firefighter.png";
import nurse from "../images/intro-nurse.png";

import man1 from "../images/intro-man1.png";
import man2 from "../images/intro-man2.png";
import teen from "../images/intro-teen.png";
import woman1 from "../images/intro-woman1.png";
import woman2 from "../images/intro-woman2.png";
import woman3 from "../images/intro-woman3.png";

// You will see slugs values in each item of the lists. This was mean to be used for gatsbyImage which did not get to be implemented
export const superHeroList = [
	{
		id: "1009368",
		heroName: "Iron Man",
		name: "Tony Stark",
		usedName: "Tony",
		pictureTransparent: {
			slug: "ironman.png",
			img: ironMan,
		},
	},
	{
		id: "1009189",
		heroName: "Black Widow",
		name: "Natasha Romanoff",
		usedName: "Nat",
		description:
			"Trusted by some and feared by most, the Black Widow strives to make up for the bad she had done in the past by helping the world, even if that means getting her hands dirty in the process. Despite super spy Natasha Romanoff’s checkered past, she became one of S.H.I.E.L.D.’s most formidable agents before joining the Avengers.",
		pictureTransparent: {
			slug: "blackWidow.png",
			img: blackWidow,
		},
	},
	{
		id: "1009664",
		heroName: "Thor",
		name: "God of Thunder",
		usedName: "Thor",
		pictureTransparent: {
			slug: "thor.png",
			img: thor,
		},
	},
	{
		id: "1009220",
		heroName: "Captain America",
		name: "Steve Rogers",
		usedName: "Steve",
		pictureTransparent: {
			slug: "captainAmerica.png",
			img: captainAmerica,
		},
	},
	{
		id: "1009187",
		heroName: "Black Panther",
		name: "King T'Challa",
		usedName: "T'Challa",
		description:
			"T’Challa is the king of the secretive and highly advanced African nation of Wakanda - as well as the powerful warrior known as the Black Panther. As the king of the African nation of Wakanda, T’Challa protects his people as the latest in a legacy line of Black Panther warriors.",
		pictureTransparent: {
			slug: "captainAmerica.png",
			img: blackPanther,
		},
	},
	{
		id: "1009351",
		heroName: "Hulk",
		name: "Bruce Banner",
		usedName: "Bruce",
		pictureTransparent: {
			slug: "hulk.png",
			img: hulk,
		},
	},
	{
		id: "1009562",
		heroName: "scarletWitch",
		name: "Wanda Maximoff",
		usedName: "Wanda",
		description:
			"Notably powerful, Wanda Maximoff has fought both against and with the Avengers, attempting to hone her abilities and do what she believes is right to help the world.",
		pictureTransparent: {
			slug: "scarletWitch.png",
			img: scarletWitch,
		},
	},
	{
		id: "1009338",
		heroName: "Hawk Eye",
		name: "Clint Barton",
		usedName: "Clint",
		description:
			"An expert marksman and fighter, Clint Barton puts his talents to good use by working for S.H.I.E.L.D. as a special agent. The archer known as Hawkeye also boasts a strong moral compass that at times leads him astray from his direct orders.",
		pictureTransparent: {
			slug: "hawkeye.png",
			img: hawkeye,
		},
	},
	{
		id: "1009697",
		heroName: "Vision",
		usedName: "Vision",
		pictureTransparent: {
			slug: "vision.png",
			img: vision,
		},
	},
];

export const heroList = [
	{
		hero: "Police",
		picture: police,
		type: "hero",
		slug: "intro-police.png",
	},
	{
		hero: "Black Panther",
		picture: kingTchalla,
		type: "superhero",
		slug: "intro-blackPanther.png",
	},
	{
		hero: "Nurse",
		picture: nurse,
		type: "hero",
		slug: "intro-nurse.png",
	},
	{
		hero: "Doctor",
		picture: doctor,
		type: "hero",
		slug: "intro-doctor.png",
	},
	{
		hero: "Captain America",
		picture: steveRogers,
		type: "superhero",
		slug: "intro-captainAmerica.png",
	},
	{
		hero: "Wanda",
		picture: wanda,
		type: "superhero",
		slug: "intro-scarletWitch.png",
	},
	{
		hero: "Fire Fighter",
		picture: firefighter,
		type: "hero",
		slug: "intro-firefighter.png",
	},
	{
		hero: "Soldier",
		picture: soldier2,
		type: "hero",
		slug: "intro-soldier-m.png",
	},
	{
		hero: "Soldier",
		picture: soldier,
		type: "hero",
		slug: "intro-soldier-f.png",
	},
	{
		hero: "Iron Man",
		picture: tonyStark,
		type: "superhero",
		slug: "intro-ironMan.png",
	},
];

export const peopleList = [
	{
		picture: man1,
		alt: "Regular hipster man",
		type: "normal",
		slug: "intro-man1.png",
	},
	{
		picture: teen,
		alt: "Teenage boy with his backpack",
		type: "normal",
		slug: "intro-teen.png",
	},
	{
		picture: woman2,
		alt: "Strong business woman",
		type: "normal",
		slug: "intro-woman2.png",
	},
	{
		picture: woman1,
		alt: "Beautiful woman dressed in a saree dress",
		type: "normal",
		slug: "intro-woman1.png",
	},
	{
		picture: man2,
		alt: "Old man",
		type: "normal",
		slug: "intro-man2.png",
	},
	{
		picture: woman3,
		alt: "Old woman",
		type: "normal",
		slug: "intro-woman3.png",
	},
];
