import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const DonationFormPaymentAmount = ({ setDonationInfo, donationInfo }) => {
	const [list, setList] = useState([]);

	useEffect(() => {
		let mounted = true;
		const baseURL = "https://free.currconv.com/";
		const apiKey = process.env.REACT_APP_CURRENCY_API_KEY;
		axios
			.get(`${baseURL}api/v7/currencies?apiKey=${apiKey}`)
			.then(res => {
				if (mounted) {
					setList(Object.keys(res.data.results).sort());
				}
			})
			.catch(err => console.log(err));
		return () => {
			mounted = false;
		};
	}, []);

	return (
		<>
			<label className="form-label form-label--amount" htmlFor="amount">
				Amount:
			</label>
			<span>
				<input
					type="number"
					className="payment__amount"
					name="amount"
					id="amount"
					value={donationInfo.amount}
					onChange={e =>
						setDonationInfo({ ...donationInfo, amount: e.target.value })
					}
					required
				/>
				{list && (
					<select
						className="payment__currency-list"
						value={donationInfo.currency}
						onChange={e =>
							setDonationInfo({ ...donationInfo, currency: e.target.value })
						}
						required
					>
						<option value="USD" defaultValue>
							USD
						</option>
						{list.map(curr => {
							return (
								<option value={curr} key={uuidv4()} className="payment__currency">
									{curr}
								</option>
							);
						})}
					</select>
				)}
			</span>
		</>
	);
};

export default DonationFormPaymentAmount;
