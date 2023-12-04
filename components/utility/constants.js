export const formatCurrency = (amount=0, currency='USD') => {
    return   amount.toLocaleString('en-US', { style: 'currency', currency });
};
