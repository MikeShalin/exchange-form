import React, { useState, useEffect } from 'react';
import { coins } from './coins'

import { InputElement } from './InputElement'
import { SelectElement } from './SelectElement'

export const Fieldset = ({ label, name, id, setData, disabled, price }) => {
  const [coinId, setCoinId] = useState(id)
  const [coinPrice, setCoinPrice] = useState('')
  useEffect(
    () => {
      setData([coinId, coinPrice])
    },
    [coinId, coinPrice, price]
  )
  return (
    <fieldset>
      <label>
        {label}
        <InputElement
          value={price || coinPrice}
          setCoin={setCoinPrice}
          disabled={disabled}
        />
      </label>
      <SelectElement name={name} value={coinId} onChange={(id) => {
        setCoinId(id)
      }}>
        {
          coins.map(({ id, symbol }) => (
            <option key={id} value={id}>{symbol}</option>
          ))
        }
      </SelectElement>
    </fieldset>
  )
  
}