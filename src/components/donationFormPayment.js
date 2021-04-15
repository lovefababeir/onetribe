import React from "react"
import "./donationFormPayment.scss"
import DonationFormPaymentAmount from "./donationFormPaymentAmount.js"
import DonationFormPaymentFrequency from "./donationFormPaymentFrequency.js"
import DonationFormPaymentCC from "./donationFormPaymentCC.js"

const DonationFormPayment = ({ donationInfo, setDonationInfo }) => {
  return (
    <>
      <DonationFormPaymentFrequency
        setDonationInfo={setDonationInfo}
        donationInfo={donationInfo}
      />
      <DonationFormPaymentAmount
        setDonationInfo={setDonationInfo}
        donationInfo={donationInfo}
      />
      <DonationFormPaymentCC
        setDonationInfo={setDonationInfo}
        donationInfo={donationInfo}
      />
    </>
  )
}
export default DonationFormPayment
