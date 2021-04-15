import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/lib/styles.scss";
import CreditCardInput from "react-credit-card-input";

const DonationFormPaymentCC = ({ donationInfo, setDonationInfo }) => {
	const name = `${donationInfo.firstName} ${donationInfo.lastName}`;

	const handleInputChange = e => {
		const { name, value } = e.target;

		const length = value.split(" ").join("").length;
		if (length < 17) {
			setDonationInfo({ ...donationInfo, [name]: value, focus: name });
		}
	};

	return (
		<div className="ccInfo">
			<Cards
				cvc={donationInfo.cvc}
				expiry={donationInfo.expiry.split("/").join("")}
				focused={donationInfo.focus}
				name={name}
				number={donationInfo.ccn}
			/>

			<CreditCardInput
				className="cc"
				onError={({ inputName, err }) =>
					console.log(`credit card input error: ${err} ${inputName}`)
				}
				cardNumberInputProps={{
					name: "ccn",
					value: donationInfo.ccn,
					maxLength: "19",
					onChange: handleInputChange,
					onError: err => console.log(`cvc error: ${err}`),
				}}
				cardExpiryInputProps={{
					name: "expiry",
					value: donationInfo.expiry,
					onChange: handleInputChange,
					onError: err => console.log(`expiry error: ${err}`),
				}}
				cardCVCInputProps={{
					name: "cvc",
					value: donationInfo.cvc,
					onChange: handleInputChange,
					onError: err => console.log(`number error: ${err}`),
				}}
				fieldClassName="ccInfo__input"
			/>
		</div>
	);
};

export default DonationFormPaymentCC;
