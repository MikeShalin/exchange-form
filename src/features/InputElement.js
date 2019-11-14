import React from 'react'

export const InputElement = ({ value, setCoin }) => {
  const onChange = (e) => setCoin(e.target.value)
  return (
    <input
      type='text'
      value={value}
      onChange={onChange}
    />
  )
}
