import React, { useState, useEffect } from 'react';

export const SelectElement = ({ name, value, children, onChange }) => {
  return (
    <select
      name={name}
      value={value}
      onChange={(e) => {onChange(e.target.value)}}
    >
      {children}
    </select>
  )
}
