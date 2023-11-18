// utils/stripe.js
import { loadStripe } from '@stripe/stripe-js';

export const getStripe = async () => {
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
    return stripe;
};
