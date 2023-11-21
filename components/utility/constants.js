export const formatCurrency = (amount=0, currency='PKR') => {
    return   amount.toLocaleString('en-US', { style: 'currency', currency });
};
