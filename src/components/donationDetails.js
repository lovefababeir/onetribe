import React from "react";
import "./donationDetails.scss";
// import onetribe from "../assets/images/#ONETRIBE.png";

const DonationDetails = () => {
	return (
		<div className="donation-details">
			<h4 className="donation-details__greeting">
				Thanks for your interest in supporting
			</h4>
			<p className="donation-details__message">
				Everyday our heroes, like our doctors, police, firefighters save and protect
				us from terrorists, killers, robbers, bad traffic, infectious diseases and
				many more. We may not always know the decisions they face, the risks that
				they take or the sacrifices they make but we trust them because not only do
				they have the knowledge, training, skills and means to do it, but they also
				have the HEART and WILL.
			</p>
			<p className="donation-details__message">
				This is the same for our superheroes. If not for them, your loved ones,
				neighbour, or even doctor may not be here today. So let’s not allow the
				government to stop them from protecting us from evil aliens, androids and
				wizards. It's our job to help our superheroes.
			</p>
			<h4 className="donation-details__micdrop">
				Let's do our job so that <br />
				our superheroes can do theirs
			</h4>

			{/* <p className="donation-details__message">
				Make sure to download your badge of support, tag us at #OneTribe and share.
				<a href={onetribe} download>
					<img src={onetribe} />
				</a>
			</p> */}
		</div>
	);
};

export default DonationDetails;
