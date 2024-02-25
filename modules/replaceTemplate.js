module.exports = (temp, items) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g, items.productName)
  output = output.replace(/{%ID%}/g, (items.id - 1))
  output = output.replace(/{%IMAGE%}/g, items.image)
  output = output.replace(/{%PRICE%}/g, items.price)
  output = output.replace(/{%FROM%}/g, items.from)
  output = output.replace(/{%NUTRIENTS%}/g, items.nutrients)
  output = output.replace(/{%QUANTITY%}/g, items.quantity)
  output = output.replace(/{%ISORGANIC%}/g, items.isOrganic)
  output = output.replace(/{%DESCRIPTION%}/g, items.description)

  if (!items.isOrganic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic')

  return output;
};