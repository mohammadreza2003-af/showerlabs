const handleToggle = (setter: (value: boolean) => void, value: boolean) => {
  setter(!value);
};

const formatCurrency = (amount: number): string => {
  const formatter = new Intl.NumberFormat("da-DK", {
    style: "currency",
    currency: "DKK",
    minimumFractionDigits: 0,
  });

  return formatter.format(amount).replace("DKK", "").trim();
};

const calculateTotal = (
  cart: Array<{ price: number; offer: number }>
): number => {
  return cart.reduce((total, item) => {
    const priceToAdd = item.offer > 0 ? item.offer : item.price;
    return total + priceToAdd;
  }, 0);
};

const redirectToGoogle = () => {
  window.location.href = "https://www.google.com";
};
export { handleToggle, formatCurrency, calculateTotal, redirectToGoogle };
