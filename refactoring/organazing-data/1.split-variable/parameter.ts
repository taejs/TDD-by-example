function discount(inputValue, quantity) {
  let result = inputValue;
  if (inputValue > 50) return result - 2;
  if (quantity > 100) return result - 1;
}
