export const computeTotal = (cart) => {
  const total = parseFloat(cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0).toFixed(2));

  const vat = parseFloat((total * 0.20).toFixed(2));

  const shipping = 50;

  const overallTotal = parseFloat((total + vat + shipping).toFixed(2));

  return {
    total,
    vat,
    shipping,
    overallTotal
  };
};
