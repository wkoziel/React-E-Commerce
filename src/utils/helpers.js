export const formatPrice = (number) => {
  const price = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100)
  return price
}

export const getUniqueValues = () => {}
