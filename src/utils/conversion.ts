const convertToDollars = (cents: number) => {
  return cents / 100;
};
const intlPrice = (cents: number) => {
  const dollars = convertToDollars(cents);
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(dollars);
};

export { convertToDollars, intlPrice };
