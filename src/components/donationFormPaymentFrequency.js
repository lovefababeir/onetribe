import React from "react";

const DonationFormPaymentFrequency = ({ setDonationInfo, donationInfo }) => {
	return (
		<div>
			<input
				type="radio"
				className="paymentInfo__frequency"
				name="frequency"
				value="monthly"
				id="monthly"
				checked={donationInfo.frequency === "monthly"}
				onChange={() => setDonationInfo({ ...donationInfo, frequency: "monthly" })}
				required
			></input>
			<label htmlFor="monthly" className="label__frequency-label form-label">
				Monthly
			</label>
			<input
				type="radio"
				className="paymentInfo__frequency"
				name="frequency"
				value="once"
				id="once"
				checked={donationInfo.frequency === "once"}
				onChange={() => setDonationInfo({ ...donationInfo, frequency: "once" })}
			></input>
			<label htmlFor="once" className="label__frequency-label form-label">
				One Time
			</label>
		</div>
	);
};
export default DonationFormPaymentFrequency;
