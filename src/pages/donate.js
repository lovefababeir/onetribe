import React from "react";
import Layout from "../components/layout.js";
// import Head from "../components/head.js";
import DonationForm from "../components/donationForm.js";
import DonationDetails from "../components/donationDetails.js";
import "./donate.scss";

const Donate = () => {
	return (
		<Layout page="donate" title={"Donate"}>
			<section className="donation">
				<DonationForm />
				<DonationDetails />
			</section>
		</Layout>
	);
};

export default Donate;
