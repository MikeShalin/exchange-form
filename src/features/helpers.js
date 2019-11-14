import { coins } from './coins'

const getPrice = (coin) => coins.find(({ id }) => coin === id).price_usd

const convertTo = (amount, rate) => amount / rate

export const convertToAmount = (_to, _from, amount) => {
  const rate = getPrice(_to) / getPrice(_from)
  return +convertTo(amount, rate).toFixed(5)
}
