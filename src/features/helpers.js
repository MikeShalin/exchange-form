import { coins } from './coins'

export const getSymbol = checked => coins.find(({ id }) => id === checked).symbol
