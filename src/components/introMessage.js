import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./introMessage.scss";
import Typist from "react-typist";

const IntroMessage = ({ setShowSuperHero, setShowHero, setShowPeople }) => {
	const [count, setCount] = useState(1);

	return (
		<div className="intro-message">
			<Typist
				cursor={{ show: false }}
				avgTypingDelay={50}
				onTypingDone={() => {
					setTimeout(() => {
						setCount(count + 1);
					}, 500);
				}}
				className="intro-message__quote intro-message__quote--1"
			>
				Now, more than ever, the illusions of division threaten our very existence.
				We all know the truth:
			</Typist>
			{count > 1 && (
				<Typist
					cursor={{ show: false }}
					avgTypingDelay={50}
					onTypingDone={() => {
						setTimeout(() => {
							setShowHero(true);
						}, 500);
						setTimeout(() => {
							setCount(count + 1);
						}, 1500);
					}}
					className="intro-message__quote intro-message__quote--2"
				>
					more connects us than separates us.
				</Typist>
			)}

			{count > 2 && (
				<Typist
					cursor={{ show: false }}
					avgTypingDelay={50}
					onTypingDone={() => {
						setTimeout(() => {
							setCount(count + 1);
						}, 500);
					}}
					className="intro-message__quote "
				>
					But in times of crisis the wise build bridges, while the foolish build
					barriers. We must find a way to look after one another, as if we were
				</Typist>
			)}
			{count > 3 && (
				<Typist
					cursor={{ show: false }}
					avgTypingDelay={50}
					onTypingDone={() => {
						setTimeout(() => {
							setCount(count + 1);
						}, 1500);
						setTimeout(() => {
							setShowSuperHero(true);
						}, 500);
					}}
					className="intro-message__quote intro-message__quote--2"
				>
					one single tribe.
				</Typist>
			)}
			{count > 4 && (
				<Typist
					cursor={{ show: false }}
					avgTypingDelay={50}
					onTypingDone={() => {
						setTimeout(() => {
							setCount(count + 1);
						}, 1500);
						setTimeout(() => {
							setShowPeople(true);
						}, 500);
					}}
					className="intro-message__quote intro-message__reference"
				>
					- King T'Challa
				</Typist>
			)}

			<div
				className="intro-message__punchline"
				style={{ opacity: `${count === 6 ? 1 : 0}` }}
			>
				<h2>We need our heros. All of them. Be a hero. </h2>
				<Link to="/donate">
					<h4 className="cta__support--intro button">Support our Superheros</h4>
				</Link>
				<p>Scroll for more about our super heroes.</p>
			</div>
		</div>
	);
};

export default IntroMessage;
