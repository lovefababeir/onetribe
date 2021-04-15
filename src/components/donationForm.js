import React, { useState } from "react";
import "./donationForm.scss";
import DonationFormDonor from "../components/donationFormDonor.js";
import DonationFormPayment from "../components/donationFormPayment.js";

const DonationForm = () => {
	const [donationInfo, setDonationInfo] = useState({
		firstName: "",
		lastName: "",
		fullName: "",
		email: "",
		amount: "",
		frequency: "",
		ccn: "",
		expiry: "",
		cvc: "",
		focus: "",
		err: [],
	});

	const checkPayment = e => {
		e.preventDefault();

		const infoList = Object.keys(donationInfo);
		const errors = [];
		infoList.forEach(item => {
			if (!donationInfo[item]) {
				errors.push(item);
				console.log(item);
			}
			// 		setDonationInfo(...donationInfo, {
			// 			err: donationInfo.push[donationInfo[item]],
			// 		});
		});
	};

	return (
		<form className="donation-form" onSubmit={checkPayment}>
			<h1 className="donation-form__title">Make a Donation </h1>
			<div className="form-section donorInfo">
				<h2 className="form-section__title">Donor's Information</h2>
				<DonationFormDonor
					setDonationInfo={setDonationInfo}
					donationInfo={donationInfo}
				/>
			</div>
			<div className="form-section paymentInfo">
				<h2 className="form-section__title">Payment Information</h2>
				<DonationFormPayment
					setDonationInfo={setDonationInfo}
					donationInfo={donationInfo}
				/>
			</div>
			<input
				type="SUBMIT"
				name="submit"
				className="donation-form__submit"
				onSubmit={checkPayment}
				readOnly
			/>
		</form>
	);
};

export default DonationForm;
