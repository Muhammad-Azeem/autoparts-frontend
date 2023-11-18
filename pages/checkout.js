import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { getStripe } from '../utils/stripe';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { token, error } = await stripe.createToken(cardElement);

        if (error) {
            setPaymentError(error.message);
        } else {
            // Send the token to your server
            await handlePayment(token);
        }
    };
    const handlePayment = async (token) => {
        try {
            const response = await fetch('/api/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: token.id }),
            });

            if (response.ok) {
                // Payment successful, handle accordingly (e.g., show a success message)
                console.log('Payment successful!');
            } else {
                // Payment failed, handle accordingly (e.g., show an error message)
                console.error('Payment failed.');
            }
        } catch (error) {
            console.error('Error processing payment:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="checkout-form">
            <div className="card-element">
                <CardElement />
            </div>
            <button type="submit" disabled={!stripe} className="pay-button">
                Pay
            </button>
            {paymentError && <div className="error-message">{paymentError}</div>}

            <style jsx>{`
        .checkout-form {
          max-width: 400px;
          margin: 0 auto;
        }

        .card-element {
          margin-bottom: 20px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .pay-button {
          background-color: #4caf50;
          color: white;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          border: none;
          border-radius: 4px;
        }

        .error-message {
          color: red;
          margin-top: 10px;
        }
      `}</style>
        </form>
    );
};

const CheckoutPage = () => {
    return (
        <Elements stripe={getStripe()}>
            <CheckoutForm />
        </Elements>
    );
};

export default CheckoutPage;
