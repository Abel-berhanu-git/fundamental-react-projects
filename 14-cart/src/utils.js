export const getTotals = (cart) => {
  // Array.from(cart.values()) //or
  let totalCost = [...cart.values()].reduce((acc, item) => {
    const itemTotal = item.price * item.amount;
    return acc + itemTotal;
  }, 0);

  // Math.round() round to nearest integer and /100 make only round two decimal places
  //   totalCost = Math.round(totalCost * 100) / 100;  // or
  totalCost = Number(totalCost.toFixed(2));

  const totalAmount = Array.from(cart.values()).reduce(
    (acc, item) => acc + item.amount,
    0,
  );

  return { totalCost, totalAmount };

  // or
  // return [...cart.values()].reduce(
  //   (acc, item) => {
  //     const itemTotal = item.price * item.amount;
  //     acc.totalCost += itemTotal;
  //     acc.totalAmount += item.amount;

  //     return acc;
  //   },
  //   { totalCost: 0, totalAmount: 0 },
  // );
};
