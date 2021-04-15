import React from "react"

const DonationFormPaymentFrequency = () => {
  return (
    <div>
      <input
        type="radio"
        className="paymentInfo__frequency"
        name="frequency"
        value="monthly"
        id="monthly"
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
      ></input>
      <label htmlFor="once" className="label__frequency-label form-label">
        One Time
      </label>
    </div>
  )
}
export default DonationFormPaymentFrequency
