import React from "react";
import "./donationFormDonor.scss";

const DonationFormDonor = ({ setDonationInfo, donationInfo }) => {
	const handleNameInput = e => {
		const { name, value, validationMessage } = e.target;
		if (validationMessage) {
			console.log(validationMessage);
		}
		setDonationInfo({
			...donationInfo,
			[name]: value,
			fullName: `${donationInfo.firstName} ${donationInfo.lastName}`,
		});
	};

	return (
		<>
			<span>
				<label htmlFor="firstName" className="form-label">
					First Name
				</label>
				<input
					type="text"
					id="firstName"
					name="firstName"
					onChange={handleNameInput}
					required
				/>
			</span>
			<span>
				<label htmlFor="lastname" className="form-label">
					Last Name
				</label>
				<input
					type="text"
					id="lastname"
					name="lastName"
					onChange={handleNameInput}
					required
				/>
			</span>
			<label htmlFor="email" className="form-label">
				Email Address
			</label>

			<input
				type="email"
				id="email"
				name="email"
				onChange={handleNameInput}
				required
			/>
		</>
	);
};

export default DonationFormDonor;
