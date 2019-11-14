import React, { useState } from 'react'

import { InputElement } from './InputElement'
import { Fieldset } from './Fieldset'

export const Form = ({ onSubmit }) => {
  const [_to, setTo] = useState(['bitcoin', 0])
  const [_from, setFrom] = useState(['ethereum', 0])
  const [wallet, setWallet] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ _to, _from, wallet })
  }
  return (
    <form style={{ width: 300 }} onSubmit={handleSubmit}>
      <Fieldset
        label='from'
        // price='0.1'
        name='from'
        id={_from[0]}
        setData={([id, price]) => setTo([id, price])}
      />
      <Fieldset
        label='to'
        // price='4.6066972'
        name='to'
        id={_to[0]}
        setData={([id, price]) => setFrom([id, price])}
      />
      <fieldset>
        <label>
          Recipient Wallet
          <InputElement
            value={wallet}
            setCoin={(address) => setWallet(address)}
          />
        </label>
      </fieldset>
      <fieldset>
        <button>Exchange</button>
      </fieldset>
    </form>
  )
}
