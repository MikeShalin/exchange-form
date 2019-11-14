import React, { useState, useEffect } from 'react'
import _ from 'lodash'

export const Loader = ({ children, step }) => {
  const [width, setWidth] = useState(20)
  const [loader, showLoader] = useState(true)
  useEffect(
    () => {
      _.delay(showLoader, 3001, false)
      _.delay(setWidth, 1, 200)
    }, [],
  )
  
  return (
    <div style={{ display: 'flex' }}>
      <div style={{
        height: 20,
        width: 200,
        border: '1px solid',
        position: 'relative',
      }}
      >
        {children}
        <div style={{
          height: '100%',
          background: 'red',
          transition: '3s',
          position: 'absolute',
          top: 0,
          zIndex: -1,
          width,
        }}
        />
      </div>
      {!loader && '✓'}
    </div>
  )
}