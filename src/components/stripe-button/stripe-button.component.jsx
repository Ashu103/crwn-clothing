import React from 'react';

import StripeCheckout from 'react-stripe-checkout';



const StripeCheckoutButton = ({price}) => {

    const priceForStripe = price*1;

    const publishableKey = 'pk_test_51HTnPRFRRXcrqHaQIRmZFSn0lkug7yTuPu9znPB9c7g36bV7HvxPQSVDVmT9WKKpOGPUJknTrYTkKySkx0p4D7xv00t6gi4JUF'

   const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return (
        <StripeCheckout 
        label = 'Pay Now'
        name = 'Ashu Clothing Ltd.'
        billingAddress
        shippingAddress
        image = 'https://sendeyo.com/up/d/f3eb2117da'
        description = {`Your total is Rs {price}`}
        amount = {priceForStripe}
        panelLabel = 'Pay Now'
        token = {onToken}
        stripeKey = {publishableKey}
        />
    );
};

export default StripeCheckoutButton;