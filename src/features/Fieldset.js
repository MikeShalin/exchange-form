import React, { useState, useEffect } from 'react';
import { coins } from './coins'

import { InputElement } from './InputElement'
import { SelectElement } from './SelectElement'

export const Fieldset = ({ label, name, id, setData }) => {
  const [coinId, setCoinId] = useState(id)
  const [coinPrice, setCoinPrice] = useState('')
  useEffect(
    () => {
      setData([coinId, coinPrice])
    },
    [coinId, coinPrice]
  )
  return (
    <fieldset>
      <label>
        {label}
        <InputElement
          value={coinPrice}
          setCoin={setCoinPrice}
        />
      </label>
      <SelectElement name={name} value={coinId} onChange={setCoinId}>
        {
          coins.map(({ id, symbol }) => (
            <option key={id} value={id}>{symbol}</option>
          ))
        }
      </SelectElement>
    </fieldset>
  )
  
}